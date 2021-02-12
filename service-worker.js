const cachename = "static-site"
const assets =[
  "./192.png",
"./512.png",
"./fav.png",
"./favicon.png",
"./Github.webp",
"./index.html",
"./index.js",
"./manifest.json",
"https://cdn.jsdelivr.net/npm/vue@2",
"./equal.png",
"https://fonts.googleapis.com/icon?family=Material+Icons"
]
self.addEventListener("install", evt => {
    evt.waitUntil(
    caches.open(cachename).then(cache =>{
      
     cache.addAll(assets)
     })
    )
  });

  self.addEventListener('activate',() => {
    
  })
  self.addEventListener('fetch',evt => {
    //console.log("fetch",evt)
    evt.respondWith(
      caches.match(evt.request).then(
        cachesres =>{
          return cachesres || fetch(evt.request)
        }
      )
    )
  })
