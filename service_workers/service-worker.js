const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    '/',
    '/offlineServiceWorker.html',
    '/style.css',
    '/app.js'
];

self.addEventListener('install', event =>{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch',event => {
    event.respondWith(
        fetch(event.request).catch(()=>caches.match(event.request))
    );
});