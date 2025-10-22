const cacheName = 'workflow-tools-v1';
const assetsToCache = [
  './',
  './index.html',
  './RepairAssist.html',
  './QuickPark.html',
  './Feedback.html',
  './To Do.html',
  './favicon.png',
  './logo.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
];

// Install Service Worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assetsToCache))
  );
});

// Fetch from cache first, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
