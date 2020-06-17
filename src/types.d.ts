export interface ApiConfig {
    apiKey: string
    async?: boolean
}

export type GoogleMapsSdk = { maps: any }

export interface GoogleMapsSdkLoader {
    subscribe(cb: (google: GoogleMapsSdk) => void): void
    set(google: GoogleMapsSdk): void
}
