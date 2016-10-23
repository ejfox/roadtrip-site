var $,URI,d3,flyToNext,flyToPrev,flyToStop,getParameterByName,listToGeoJson,listToGeoJsonPoints,locations,map,map2,points,route,stoplist,uriStop;$=require("jquery"),URI=require("uri-js"),d3=require("d3"),locations=[{"Location name":"New York City",State:"NY","Days At Location":0,trip:1,lat:40.6957,lon:-73.9409,bearing:-50,pitch:20,zoom:11},{"Location name":"Washington, DC",State:"DC","Days At Location":2,trip:1,lat:38.9072,lon:-77.0369,bearing:0,pitch:60,zoom:11},{"Location name":"Raleigh",State:"NC","Days At Location":1,trip:1,lat:35.7796,lon:-78.6382,bearing:12,pitch:20,zoom:9},{"Location name":"Fayetteville",State:"NC","Days At Location":1,trip:1,lat:35.0527,lon:-78.8784,bearing:0,pitch:0,zoom:8},{"Location name":"Asheville",State:"NC","Days At Location":2,trip:1,lat:35.5951,lon:-82.5515,bearing:-50,pitch:80,zoom:11},{"Location name":"Nantahala National Forest",State:"NC","Days At Location":3,trip:1,lat:35.2338,lon:-83.5593,bearing:-30,pitch:60,zoom:10},{"Location name":"Atlanta",State:"GA","Days At Location":2,trip:1,lat:33.749,lon:-84.388,bearing:120,pitch:40,zoom:8},{"Location name":"Savannah",State:"GA","Days At Location":4,trip:1,lat:32.0835,lon:-81.0998,bearing:90,pitch:20,zoom:12},{"Location name":"Montgomery",State:"AL","Days At Location":1,trip:1,lat:32.3668,lon:-86.3,bearing:40,pitch:10,zoom:9},{"Location name":"Selma",State:"AL","Days At Location":1,trip:1,lat:32.4074,lon:-87.0211,bearing:0,pitch:0,zoom:8},{"Location name":"De Soto National Forest",State:"MS","Days At Location":5,trip:1,lat:31.0669,lon:-88.9833,bearing:0,pitch:50,zoom:9},{"Location name":"New Orleans",State:"LA","Days At Location":3,trip:1,lat:29.9511,lon:-90.0715,bearing:-40,pitch:50,zoom:9},{"Location name":"Sabine National Forest",State:"TX","Days At Location":5,trip:1,lat:31.4439,lon:-93.77,bearing:-30,pitch:40,zoom:8},{"Location name":"Dallas",State:"TX","Days At Location":0,trip:1,lat:32.7767,lon:-96.797,bearing:-20,pitch:30,zoom:7},{"Location name":"Amarillo",State:"TX","Days At Location":1,trip:1,lat:35.222,lon:-101.8313,bearing:-20,pitch:30,zoom:7},{"Location name":"Colorado Springs",State:"CO","Days At Location":2,trip:1,lat:38.8339,lon:-104.8214,bearing:-20,pitch:50,zoom:12},{"Location name":"Denver",State:"CO","Days At Location":2,trip:1,lat:39.7392,lon:-104.9903,bearing:-40,pitch:50,zoom:11},{"Location name":"Boulder",State:"CO","Days At Location":2,trip:1,lat:40.015,lon:-105.2705,bearing:-40,pitch:70,zoom:11},{"Location name":"Grand Mesa",State:"CO","Days At Location":1,trip:1,lat:39.0403,lon:-107.9498,bearing:-90,pitch:90,zoom:10},{"Location name":"Bryce",State:"UT","Days At Location":5,trip:1,lat:37.6728,lon:-112.1573,bearing:0,pitch:30,zoom:9},{"Location name":"Zion National Park",State:"UT","Days At Location":7,trip:1,lat:37.2982,lon:-113.0263,bearing:-20,pitch:60,zoom:12},{"Location name":"Las Vegas",State:"NV","Days At Location":3,trip:1,lat:36.1699,lon:-115.1398,bearing:-40,pitch:30,zoom:9},{"Location name":"Mojave National Preserve",State:"CA","Days At Location":3,trip:1,lat:35.011,lon:-115.4734,bearing:-20,pitch:25,zoom:10},{"Location name":"Los Angeles",State:"CA","Days At Location":2,trip:1,lat:34.0522,lon:-118.2437,bearing:0,pitch:50,zoom:11},{"Location name":"Yosemite National Park",State:"CA","Days At Location":5,trip:1,lat:37.8651,lon:-119.5383,bearing:0,pitch:50,zoom:12},{"Location name":"San Francisco",State:"CA","Days At Location":6,trip:1,lat:37.7749,lon:-122.4194,bearing:0,pitch:50,zoom:11},{"Location name":"Mendocino National Forest",State:"CA","Days At Location":3,trip:2,lat:39.653,lon:-122.9496,bearing:0,pitch:50,zoom:11},{"Location name":"Redwoods National Forest",State:"CA","Days At Location":3,trip:2,lat:41.2132,lon:-124.0046,bearing:50,pitch:40,zoom:10},{"Location name":"Eugene",State:"OR","Days At Location":1,trip:2,lat:44.0521,lon:-123.0868,bearing:25,pitch:30,zoom:10},{"Location name":"Portland",State:"OR","Days At Location":1,trip:2,lat:45.5231,lon:-122.6765,bearing:0,pitch:70,zoom:11},{"Location name":"Olympia",State:"WA","Days At Location":3,trip:2,lat:47.0379,lon:-122.9007,bearing:35,pitch:70,zoom:11},{"Location name":"Mt Hood National Forest",State:"OR","Days At Location":2,trip:2,lat:45.33,lon:-121.7089,bearing:35,pitch:70,zoom:11},{"Location name":"Grand Teton National Park",State:"WY","Days At Location":3,trip:2,lat:43.7904,lon:-110.6818,bearing:45,pitch:50,zoom:10},{"Location name":"Yellowstone National Park",State:"WY","Days At Location":3,trip:2,lat:44.428,lon:-110.5885,bearing:55,pitch:70,zoom:9},{"Location name":"Wind River Reservation",State:"WY","Days At Location":1,trip:2,lat:43.2833,lon:-108.834,bearing:55,pitch:35,zoom:9},{"Location name":"Black Hills",State:"SD","Days At Location":7,trip:2,lat:43.9939,lon:-103.7718,bearing:55,pitch:35,zoom:9},{"Location name":"Chicago",State:"IL","Days At Location":2,trip:2,lat:41.8781,lon:-87.6298,bearing:25,pitch:35,zoom:9},{"Location name":"Detroit",State:"MI","Days At Location":3,trip:2,lat:42.3314,lon:-83.0458,bearing:25,pitch:35,zoom:9},{"Location name":"Toronoto",State:"ON","Days At Location":1,trip:2,lat:43.6532,lon:-79.3832,bearing:25,pitch:85,zoom:9},{"Location name":"Niagra Falls",State:"NY","Days At Location":1,trip:2,lat:43.0962,lon:-79.0377,bearing:25,pitch:75,zoom:9},{"Location name":"New York City",State:"NY","Days At Location":0,trip:2,lat:40.7128,lon:-74.0059,bearing:0,pitch:0,zoom:9}],window.locations=locations,window.autoplay=!1,getParameterByName=function(t,o){var a,n;return o||(o=window.location.href),t=t.replace(/[\[\]]/g,"\\$&"),a=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),n=a.exec(o),n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},route={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"LineString",coordinates:[]}}]},listToGeoJson=function(t){var o,a,n,i;for(n=[],o=0,a=t.length;o<a;o++)i=t[o],n.push(route.features[0].geometry.coordinates.push([i.lon,i.lat]));return n},listToGeoJson(locations),points={type:"geojson",data:{type:"FeatureCollection",features:[]}},listToGeoJsonPoints=function(t){var o,a,n,i;for(n=[],o=0,a=t.length;o<a;o++)i=t[o],n.push(points.data.features.push({type:"Feature",geometry:{type:"Point",coordinates:[i.lon,i.lat]},properties:{title:i["Location name"],icon:"circle"}}));return n},listToGeoJsonPoints(locations),mapboxgl.accessToken="pk.eyJ1IjoiZWpmb3giLCJhIjoiY2lyZjd0bXltMDA4b2dma3JzNnA0ajh1bSJ9.iCmlE7gmJubz2RtL4RFzIw",uriStop=getParameterByName("stop"),null===uriStop?window.currentStop=0:window.currentStop=uriStop,map=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/light-v9",center:[locations[window.currentStop].lon,locations[window.currentStop].lat],bearing:locations[window.currentStop].bearing,pitch:locations[window.currentStop].pitch,zoom:locations[window.currentStop].zoom}),map2=new mapboxgl.Map({container:"map2",style:"mapbox://styles/mapbox/dark-v9",center:[locations[window.currentStop].lon,locations[window.currentStop].lat],bearing:locations[window.currentStop].bearing/10,pitch:locations[window.currentStop].pitch/10,zoom:4}),map.on("load",function(){return map.addSource("route",{type:"geojson",data:route}),map.addLayer({id:"route",source:"route",type:"line",layout:{"line-join":"round","line-cap":"round"},paint:{"line-width":8,"line-color":"black","line-opacity":.5,"line-blur":6}},"place-city-sm"),console.log("points",points),map.addSource("points",points),map.addLayer({id:"points",type:"symbol",source:"points",layout:{"icon-image":"{icon}-15","icon-padding":4,"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-anchor":"top","text-padding":12,"text-optional":!0,"symbol-avoid-edges":!0,"text-allow-overlap":!1}},"place-city-sm"),map2.addSource("points",points),map2.addLayer({id:"points",type:"symbol",source:"points",layout:{"icon-image":"circle-11","icon-size":.75}},"water")}),map2.on("load",function(){return map2.addSource("route",{type:"geojson",data:route}),map2.addLayer({id:"route",source:"route",type:"line",layout:{"line-join":"round","line-cap":"round"},paint:{"line-width":2,"line-color":"white","line-opacity":1,"line-blur":1}},"place-city-sm")}),$("#location-name").text(locations[window.currentStop]["Location name"]),$("#navigation #prev-button").hide(),flyToStop=function(){return map.flyTo({center:[locations[window.currentStop].lon,locations[window.currentStop].lat],bearing:locations[window.currentStop].bearing,pitch:locations[window.currentStop].pitch,zoom:locations[window.currentStop].zoom,speed:.8}),map2.flyTo({center:[locations[window.currentStop].lon,locations[window.currentStop].lat],bearing:locations[window.currentStop].bearing/2.75,pitch:locations[window.currentStop].pitch/10,zoom:locations[window.currentStop].zoom/2.1,speed:.5}),$("#stoplist li").removeClass("current-stop"),$('#stoplist [data-stop-id="'+window.currentStop+'"]').addClass("current-stop"),$("#location-name").text(locations[window.currentStop]["Location name"]),window.currentStop>0?$("#navigation #prev-button").show():$("#navigation #prev-button").hide()},stoplist=d3.select("#stoplist"),stoplist.selectAll("li").data(locations).enter().append("li").text(function(t,o){return console.log("d",t),t["Location name"]}).attr("data-stop-id",function(t,o){return o}).attr("class",function(t,o){if(0===o)return"current-stop"}).style("cursor","pointer").on("click",function(t,o){return window.currentStop=o,flyToStop()}),flyToNext=function(){return window.currentStop<locations.length?window.currentStop++:window.currentStop=0,flyToStop()},flyToPrev=function(){return window.currentStop>0?window.currentStop--:window.currentStop=locations.length,flyToStop()},$("#navigation #next-button").click(function(){return flyToNext()}),$("#navigation #prev-button").click(function(){return flyToPrev()}),$("#autoplay-button").click(function(){return $(this).toggleClass("autoplay-active"),window.autoplay===!1?(window.autoplay!==!1,flyToNext(),window.autoplay=setInterval(function(){return flyToNext()},3500)):clearInterval(window.autoplay)});