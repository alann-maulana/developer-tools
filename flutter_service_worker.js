'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_18.part.js": "7111355dba5e9de68b043f393d56d6db",
"index.html": "ecb5931d13baebbdf710207369ba0859",
"/": "ecb5931d13baebbdf710207369ba0859",
"main.dart.js_2.part.js": "eb99358d2c7b0cb5922123fd218ca077",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_36.part.js": "d35e661ae68918e604a7243ef3497b61",
"main.dart.js_4.part.js": "4fa966b4e3cca5669358343f093968f1",
"main.dart.js_26.part.js": "f9f0f541bfec6d94a45bba74d30053a5",
"main.dart.js_13.part.js": "3f43bd4b602aa676dc3bb5ad1afff3a2",
"main.dart.js_32.part.js": "550e0a1e0e75ab44edb33f0fcf8529c1",
"main.dart.js_38.part.js": "115401f3b14edcdd540edd1bdeed3ed5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "2202e9f3f84b147d7b3e8483f0a22b7e",
"version.json": "b1a8e5a77d7044dc4e9b2d000d49cf11",
"main.dart.js_3.part.js": "d0f79ab9219a01af09d5fe307db91ade",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_22.part.js": "f3eb70d84973e81b2c3447b0d5754209",
"manifest.json": "19971e5e6df875bc88815efa6b80d7c7",
"main.dart.js_21.part.js": "4fcdcfba582730fc59b059ef6a95f2cd",
"main.dart.js_27.part.js": "875d97e249e5ec7e47f94aac5dcb87df",
"main.dart.js_7.part.js": "720d300e01114fa60b173643fb2e2438",
"main.dart.js_20.part.js": "eb595558451021cc213212337893cee4",
"main.dart.js_28.part.js": "bdb457957fd6d76e32c6ff2ddbbfa23f",
"main.dart.js_29.part.js": "6412494ca135b18771d23a51e8d8e2f4",
"main.dart.js_34.part.js": "aeebb4f6f188f17cc452391ef07ecc90",
"main.dart.js_41.part.js": "8e031d189530d2cb617831adde413640",
"main.dart.js_15.part.js": "7ba4d19f37ff065c8bd1715c428d0fda",
"main.dart.js_46.part.js": "60435372572f866a7d2bb81101ee943f",
"main.dart.js_31.part.js": "b2a8c05776f7e043d500ef25ca453eda",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "74c769cb35148f618e437d1bbba1369e",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "96eae1fadcf2b7dd22fcca7583fea805",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"main.dart.js_5.part.js": "561de196ee0e7fabbed1c6313abfc42e",
"main.dart.js_1.part.js": "dcd5362314b29dc7bec2abc188a87b9d",
"main.dart.js_25.part.js": "52dc4b8dcd519a5c8276d93ad2c0ec66",
"main.dart.js_16.part.js": "79f602a21fdeb893f55040e821971971",
"main.dart.js_8.part.js": "366bdd597f18393dbd65b524bf93493a",
"main.dart.js_10.part.js": "0e9d7f9ed77a4e649a63d4375aadbd85",
"main.dart.js_44.part.js": "217b06333d3d248366e07996834b3a0b",
"main.dart.js_42.part.js": "913fd7cd24a09703290e9f79d53c243b",
"main.dart.js_24.part.js": "2b0e52213b64c8e1a55293cb2d1d8644",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js_37.part.js": "9ffebab79b973f209b82b07ec0731093"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
