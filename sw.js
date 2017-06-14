var log = console.log.bind(console);
var err = console.error.bind(console);

self.addEventListener('install',function(event) {
	log('Service Worker: Installed');
	//event.waitUntil(
	//	fetchStuffAndInitDatabases()
	//);
});

self.addEventListener('activate',function() {
	log('Service Worker: Active');
});

self.addEventListener('fetch',function() {
	log('Service Worker: Fetch');
});
