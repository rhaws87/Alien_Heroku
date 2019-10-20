// UFO Data --> standalone file
// Perform a GET request to the query URL
  // var URL = "../static/js/GeoJsonNew.json";
// Perform a GET request to the query URL
d3.json("../static/js/GeoJsonNew.json", function(data_MiB) {
  // Once we get a response, send the data.features object to the createFeatures function
  console.log(data_MiB);
  createFeatures(data_MiB);
});

var geojsonMarkerOptions_MiB = {
radius: 20,
fillColor: "#5bff00",
color: "#000",
weight: 1,
opacity: 1,
fillOpacity: 0.8
};

// // // Create function to create circular features
function createFeatures(UFOPlots) {
console.log("-----------");
console.log(UFOPlots.features[20]["geometry"].properties.index);
curindx =UFOPlots.features[20]["geometry"].properties.index 
urlcall ="/api_getUFOText_v1.1 <" + curindx + ">"
console.log(getText(urlcall))
console.log(UFOPlots.features[20]["geometry"].properties.Date_Time);
 console.log(UFOPlots.features[20]["geometry"].properties.Shape);
 console.log(UFOPlots.features[20]["geometry"].properties.Duration); 
console.log(UFOPlots.features[20]["geometry"].coordinates[0]);
console.log(UFOPlots.features[20]["geometry"].coordinates[1]);

let plot = [];
let plot2 =[];
var test=[];  
// let features = UFOPlots.features;
// features.forEach(f => {
//   coords = f.geometry.coordinates;
//   plot.push([coords[1]['latitude'], coords[0]['longitude']])
// });

  let features = UFOPlots["features"];
  console.log("Point 20:",features[20]['geometry'].coordinates[0] ,features[20]['geometry'].coordinates[1] );
for (let i = 0; i < UFOPlots["features"].length; i++){
  let test = [features[i]['geometry'].coordinates[0] , features[i]['geometry'].coordinates[1]]    
  let lng =features[i]['geometry'].coordinates[0]//['longitude']
  let lat =features[i]['geometry'].coordinates[1]//['latitude']
  plot.push([lng,lat])
  plot2.push([lat,lng])
  //plot.push(test);
}   
console.log("here");
// console.log(plot);

var MiB2 = L.geoJson(plot,{
  pointToLayer: function (features, plot) {
    return L.circleMarker(plot, geojsonMarkerOptions_MiB)
    .bindPopup("<h3>" + "Base: " + features.properties[2] +
    "</h3><hr><p>" + "Military Branch: " + features.properties[2] + "<br>" +
    "State: " + features.properties[2] + "</p>");
  }
});
  // createMap(MiB,true);
    //if you used the heat map with the for loop above, this will work 
var MiB2 = L.heatLayer(plot, {
  radius: 10,
  blur: 1
});  
console.log("here after");
// Sending our UFO layer to the createMap function
createMap(MiB2,true);
}

function createMap(MiB2,initialize) {
// Define base layer
if (initialize=true) {
var lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 15,
  id: "mapbox.light",
  accessToken: API_Key
})
//GET NEW DARKMAP LAYER FROM MAPBOX
var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 15,
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
  MiB: MiB2
};

// Create our map
var myMap = L.map("map", {
  center: [37.6872, -97.3301],
  zoom: 5,
  layers: [darkmap, MiB2]
});
} //end if initalize
  //console.log(myMap);

//   Create a layer control
//   Pass in our baseMaps and overlayMaps
//   Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
 }).addTo(MiB2);

//   //Add legend to myMap
//   legend.addTo(myMap);
}

let listofsounds=[ 'silence','sound','buzz','crackle','silent','soundless','quiet','quietly','loud','thunderous','boom','noise','sound']
let listofcolors=['red','green','blue','white','yellow','purple','bright','dim','dark','black','silouette','shadow','yellow','gold','glimmering','silver','aluminum','shiny','dull','brilliant','flash','pulsing','metallic','blinking']
let listoffeelings=['scared','scary','terrified','terrifying','frightened','frightening','amazed','amazing','excited','exciting','surprising','surprised','happy','sad','horrified','mortified','confused']
let listofspeeds=["slow","fast","instantly","just gone","disappeared","rapidly",'poof','great speed','really fast','quickly']
let listofmotion=["straight line",'right angle','perpendicular','ninty degree', '90 deg','reappear','break up','disappear','appear','was gone','divided','jumped']
let listofsize=['colossal','large','small','distant','close','huge','tiny','giant']
let listofencounter=['contact','abducted','saw','missing time','taken away']
 
function highlight(text) {
    var inputText = document.getElementById("innerText");
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
     inputText.innerHTML = innerHTML;
    }
  }
function Scanlists(listofwords){
  listofwords.forEach(f => {
   highlight(f)
  });
}
  var defurl = "/api_getUFOText_v1.1 <1>";

function getText(url) {
  // d3.text(url).then(function(response) {

  //  console.log(response);
  //  highlight(response)
  //    return response
   
  // });
  return "This is returned from getText"
  var block = document.getElementById("innerText") = ""
  block.innerHTML="This is returned from getText"

}
