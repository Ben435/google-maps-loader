export type GoogleMapLibary = 'drawing' | 'geometry' | 'places' | 'visualization'

export interface ApiConfig {
    apiKey: string
    async?: boolean
    version?: 'weekly' | 'quarterly' | string
    libraries?: GoogleMapLibary[]
}

export type GoogleMapsSdk = { maps: any }

export interface GoogleMapsSdkLoader {
    subscribe(cb: (google: GoogleMapsSdk) => void): void
    set(google: GoogleMapsSdk): void
}
