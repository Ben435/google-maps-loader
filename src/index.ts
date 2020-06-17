import { ApiConfig, GoogleMapsSdk, GoogleMapsSdkLoader } from "./types";
import { validateApiConfig, Loader } from "./utils";

export const initGoogleMapsAsync = (apiConfig: ApiConfig): Promise<GoogleMapsSdk>  => {
    return new Promise(resolve => initGoogleMapsLoader(apiConfig).subscribe(resolve));
}

export const initGoogleMapsLoader = (apiConfig: ApiConfig): GoogleMapsSdkLoader  => {
    validateApiConfig(apiConfig);

    const loader = Loader();

    const callbackFuncName = 'initMap';

    (window as any)[callbackFuncName] = () => loader.set((window as any).google);

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiConfig.apiKey}&callback=${callbackFuncName}`;

    if (apiConfig.async) {
        script.async = true;
        script.defer = true;
    }

    document.head.appendChild(script);

    return loader;
}
