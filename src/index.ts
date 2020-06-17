import { ApiConfig, GoogleMapsSdkLoader } from "./types";
import { validateApiConfig, Loader } from "./utils";

export const initGoogleMapsLoader = (apiConfig: ApiConfig): GoogleMapsSdkLoader  => {
    validateApiConfig(apiConfig);

    const loader = Loader();

    const callbackFuncName = 'initMap';

    (window as any)[callbackFuncName] = () => {
        setTimeout(() => loader.set((window as any).google), 2000)
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
