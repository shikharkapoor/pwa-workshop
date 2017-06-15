var log = console.log.bind(console);
var err = console.error.bind(console);

var CACHE_NAME = 'pwa-demo-cache-v1';
var urlsToCache = [
	'/',
	'/public/css/styles.css',
	'/public/js/app.js',
	new Request('https://www.reddit.com/.json')
];

self.addEventListener('install',function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache) {
				return cache.addAll(urlsToCache);
			})
	);
	log('Service Worker: Installed');
});

self.addEventListener('activate',function() {
	log('Service Worker: Active');
});

self.addEventListener('fetch',function(event) {
	event.respondWith(
		caches.open(CACHE_NAME).then(function(cache) {
			return cache.match(event.request).then(function(response) {
				var fetchPromise = fetch(event.request).then(function(networkResponse) {
					cache.put(event.request, networkResponse.clone());
					return networkResponse;
				});
				return response || fetchPromise;
			})
		})
	);
	log('Service Worker: Fetch');
});
