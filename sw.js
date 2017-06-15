importScripts('https://cdnjs.cloudflare.com/ajax/libs/sw-toolbox/3.6.1/sw-toolbox.js');

var log = console.log.bind(console);
var err = console.error.bind(console);

// var CACHE_NAME = 'pwa-demo-cache-v1';
var urlsToCache = [
	'/',
	'/public/styles/styles.css',
	'/public/js/app.js',
	'https://www.reddit.com/.json'
];

// toolbox.precache(urlsToCache);

self.addEventListener('install',function(event) {
	// event.waitUntil(self.skipWaiting());
	log('Service Worker: Installed');
});

self.addEventListener('activate',function() {
	log('Service Worker: Active');
});

toolbox.router.get('*.json', toolbox.cacheFirst, {
	origin: 'https://www.reddit.com',
	maxAgeSeconds: 43200
});
