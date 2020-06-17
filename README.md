# Google Maps Loader

Load Google Maps in an npm-friendly way.


## Usage

Can use the standard loader

```js
import { initGoogleMapsLoader } from 'svelte-google-maps-loader'

const loader = initGoogleMapsLoader({
    apiKey: 'YOUR_API_KEY',
    async: true,
})

loader.subscribe(google => {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: -34.397, 
            lng: 150.644,
        },
    });
})
```

Or the `Promise` loader

```js
import { initGoogleMapsAsync } from 'svelte-google-maps-loader'

initGoogleMapsAsync({
    apiKey: 'YOUR_API_KEY',
    async: true,
}).then(google => {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: -34.397, 
            lng: 150.644,
        },
    });
})
```

See [example](./example) for a `svelte` example.

## Config

Either method takes an `ApiConfig` object, with the following options:

| Key | Type | Description |
| --- | ---- | ----------- |
| `apiKey` | `string` | Your [Google Maps JavaScript SDK key](https://developers.google.com/maps/documentation/android-sdk/get-api-key#get-the-api-key) |
| `async` | `boolean` | If set, will load the Google Maps SDK with the `async` and `defer` flags enabled.
