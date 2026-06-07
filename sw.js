self.addEventListener("install", (event) => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

// Mantem requests em rede normalmente; este SW existe para habilitar
// base de capacidades PWA e evolucao futura de cache offline.
self.addEventListener("fetch", () => { });