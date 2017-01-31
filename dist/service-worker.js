var dataCacheName = 'web-v1';
var cacheName     = 'webPWA-final-1';
var filesToCache  = [
  '/',
  './index.html',
  './inc/js/app.js',
  './inc/css/style.css',
  './inc/img/default/img.png',
  './inc/img/icons/header-icon.png',
  './inc/img/icons/launcher/icon-128x128.png',
  './inc/img/icons/launcher/icon-144x144.png',
  './inc/img/icons/launcher/icon-152x152.png',
  './inc/img/icons/launcher/icon-192x192.png',
  './inc/img/icons/launcher/icon-256x256.png'
];

self.addEventListener('install', function(e) {
  // console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      // console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  // console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          // console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    /*
     * The app is asking for app shell files. In this scenario the app uses the
     * "Cache, falling back to the network" offline strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
     */
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
});
