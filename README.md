# Google Maps Loader

Load Google Maps in an npm-friendly way.


## Usage

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

See [./example] for `svelte` example.
