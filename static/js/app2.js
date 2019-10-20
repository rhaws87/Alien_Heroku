 

d3.json("..//static//js//militarybases.json", function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
   console.log(data, data);
  createFeatures(data);
});

var geojsonMarkerOptions = {
radius: 5,
fillColor: "#ff0000",
color: "#000",
weight: 1,
opacity: 1,
fillOpacity: 0.7
};


// // // Create function to create circular features
function createFeatures(militaryBases) {
// console.log("-----------");
 // console.log(militaryBases.features.properties[1]);
var darpa = L.geoJson(militaryBases,{
  pointToLayer: function (features, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions)
    .bindPopup("<h3>" + "Base: " + features.properties[1] +
    "</h3><hr><p>" + "Military Branch: " + features.properties[0] + "<br>" +
    "State: " + features.properties[2] + "</p>");
  }
});

// Sending our earthquakes layer to the createMap function
createMap(darpa);
}


function createMap(darpa) {
// Define base layer
var lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_Key
})
//GET NEW DARKMAP LAYER FROM MAPBOX
var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_Key
})

// Define a baseMaps object to hold our base layers
var baseMaps = {
  "Light": lightmap,
  "Dark": darkmap
};

//   // Create overlay object to hold our overlay layer
var overlayMaps = {
  darpa: darpa
};

// Create our map
var myMap = L.map("map", {
  center: [37.6872, -97.3301],
  zoom: 5,
  layers: [darkmap, darpa]
});
  console.log(myMap);

  var url = "../static/js/GeoJson.json";

  d3.json(url)
  .then(function(UFO) {
  console.log("-----");
  console.log(UFO);
  console.log(UFO.features[20]["geometry"].coordinates);
  
  var heatArray = [];
  
  let features = UFO.features;
  features.forEach(f => {
    coords = f.geometry.coordinates;
    heatArray.push([coords[1], coords[0]])
  });
  
  console.log("heatarray", heatArray)
  
  var heat = L.heatLayer(heatArray, {
    radius: 10,
    blur: 1
  }).addTo(myMap);
  });

//   Create a layer control
//   Pass in our baseMaps and overlayMaps
//   Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
 }).addTo(myMap);

//   //Add legend to myMap
//   legend.addTo(myMap);
}