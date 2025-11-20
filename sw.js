const staticdev = 'notes-app-v1';
const assets = ['/index.html','/manifest.json','/sw.js','/192.png'];

self.addEventListener("install", installEvent => {
	installEvent.waitUntill(
		caches.open(staticdev).then(cache => {
			cache.addAll(assets)
		})
	)
})

self.addEventListener("fetch", fetchEvent => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then(res => {
			return res || fetch(fetchEvent.request)
		})
	)
})