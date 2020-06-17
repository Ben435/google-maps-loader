<script>
	import { initGoogleMapsLoader } from 'svelte-google-maps-loader'
	import { GOOGLE_MAPS_API_KEY } from './config'

	const loader = initGoogleMapsLoader({
		apiKey: GOOGLE_MAPS_API_KEY,
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
</script>

<main>
	<h1>Hello!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<div id="map"></div>
</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}

	#map {
		width: 100vw;
		height: 80vh;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>