let cacheName = 'Charge-cache';
let filesToCache = [
    './',
    './index.html',
    './css/style.css',
    './js/example.js',
    './img/icon.png',
    './img/logo.svg',
    './img/splash.png',
    "./modules/esri-leaflet/dist/esri-leaflet.js",
    "./modules/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js",
    "./modules/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css",
    "./modules/leaflet/dist/leaflet.js",
    "./modules/leaflet/dist/leaflet.css",
    "./modules/leaflet/dist/images/marker-icon.png",
    "./modules/leaflet/dist/images/marker-shadow.png",
    "./modules/@fortawesome/fontawesome-free/css/all.min.css",
    "./modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2",
    "./modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff",
    "./modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"
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