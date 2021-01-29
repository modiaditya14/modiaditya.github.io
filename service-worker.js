const cachename = "static-site"
const assets =[
  "/192.png",
"/512.png",
"/fav.png",
"/favicon.png",
"/Github.png",
"/index.html",
"/index.js",
"/manifest.json",
"/vue.js",
"https://fonts.googleapis.com/icon?family=Material+Icons"
]
self.addEventListener("install", evt => {
    evt.waitUntil(
    caches.open(cachename).then(cache =>{
      var ctime = new Date()
      console.log('caching at '+ ctime.getHours() + ":"+ ctime.getMinutes() + ":"+ ctime.getSeconds() + ":"+ ctime.getMilliseconds())
     cache.addAll(assets)
     })
    )
  });

  self.addEventListener('activate',evt => {
    var ctime = new Date()
    console.log('active at '+ ctime.getHours() + ":"+ ctime.getMinutes() + ":"+ ctime.getSeconds() + ":"+ ctime.getMilliseconds())
  })
  self.addEventListener('fetch',evt => {
    //console.log("fetch",evt)
    evt.respondWith(
      caches.match(evt.request).then(
        cachesres =>{
          var ctime = new Date()
          console.log('fetching'+evt.request.url.toString()+'at '+ ctime.getHours() + ":"+ ctime.getMinutes() + ":"+ ctime.getSeconds() + ":"+ ctime.getMilliseconds())
          return cachesres || fetch(evt.request)
        }
      )
    )
  })
