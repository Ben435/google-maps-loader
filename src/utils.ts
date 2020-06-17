import { GoogleMapsSdkLoader, GoogleMapsSdk, ApiConfig } from "./types";

export const validateApiConfig = (apiConfig: ApiConfig): void => {
    if (!apiConfig.apiKey) {
        throw Error(`GoogleMapsSDK requires API key, found: ${apiConfig.apiKey}`)
    }
}

export const constructSrcUrl = (apiConfig: ApiConfig, callbackFuncName: string): string => {
    const baseUrl = 'https://maps.googleapis.com/maps/api/js'
    const queryParams: any = {
        key: apiConfig.apiKey,
        callback: callbackFuncName,
    }
    if (apiConfig.version) {
        queryParams.v = apiConfig.version
    }

    const queryString = new URLSearchParams(queryParams).toString();

    return `${baseUrl}?${queryString}`
}

export function Loader(): GoogleMapsSdkLoader {
    let val: GoogleMapsSdk = null;
    let subscribers: ((v: GoogleMapsSdk) => void)[] = [];
    function subscribe(cb): void {
        subscribers.push(cb)

        if (val) {
            cb(val)
        }
    }

    function set(newVal: GoogleMapsSdk): void {
        if (newVal) {
            val = newVal
            subscribers.forEach(cb => cb(val))
        }
    }

    return { set, subscribe }
}
