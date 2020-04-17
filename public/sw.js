let cacheName = 'Charge-cache';
let filesToCache = [
    './',
    './index.html',
    './css/style.css',
    './js/example.js',
    './img/icon.png',
    './img/logo.svg',
    './img/splash.png',
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        ( async () => {
            try {
                const cache = await caches.open(cacheName);
                cache.addAll(filesToCache);
            } catch (e) {
                console.log('1', e.message);
            }

        })());
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        ( async () => {
            try {
                const response = await caches.match(e.request);
                return response || fetch(e.request);
            } catch (e) {
                console.log('2', e.message);
            }

        })());
});