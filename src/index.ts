import { writable, Writable } from 'svelte/store';

interface ApiConfig {
    apiKey: string
    async?: boolean
}

type GoogleMapsSdk = { maps: any }

interface GoogleMapsSdkLoader extends Writable<GoogleMapsSdk> {}

const validateApiConfig = (apiConfig: ApiConfig): void => {
    if (!apiConfig.apiKey) {
        throw Error(`GoogleMapsSDK requires API key, found: ${apiConfig.apiKey}`)
    }
}

export const initGoogleMapsLoader = (apiConfig: ApiConfig): GoogleMapsSdkLoader  => {
    validateApiConfig(apiConfig);

    const loader = writable<GoogleMapsSdk | null>(null);

    const callbackFuncName = 'initMap';

    (window as any)[callbackFuncName] = () => {
        setTimeout(() => loader.set(window.google), 2000)
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiConfig.apiKey}&callback=${callbackFuncName}`;

    if (apiConfig.async) {
        script.async = true
        script.defer = true
    }

    document.head.appendChild(script);

    return loader
}
