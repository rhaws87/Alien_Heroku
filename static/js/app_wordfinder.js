// let listofsounds=[ 'silence','sound','buzz','crackle','silent','soundless','quiet','quietly','loud','thunderous','boom','noise','sound']
// let listofcolors=['red','green','blue','white','yellow','purple','bright','dim','dark','black','silouette','shadow','yellow','gold','glimmering','silver','aluminum','shiny','dull','brilliant','flash','pulsing','metallic','blinking']
// let listoffeelings=['scared','scary','terrified','terrifying','frightened','frightening','amazed','amazing','excited','exciting','surprising','surprised','happy','sad','horrified','mortified','confused']
// let listofspeeds=["slow","fast","instantly","just gone","disappeared","rapidly",'poof','great speed','really fast','quickly']
// let listofmotion=["straight line",'right angle','perpendicular','ninty degree', '90 deg','reappear','break up','disappear','appear','was gone','divided','jumped']
// let listofsize=['colossal','large','small','distant','close','huge','tiny','giant']
// let listofencounter=['contact','abducted','saw','missing time','taken away']
 
// function highlight(text) {
//     var inputText = document.getElementById("innerText");
//     var innerHTML = inputText.innerHTML;
//     var index = innerHTML.indexOf(text);
//     if (index >= 0) { 
//      innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
//      inputText.innerHTML = innerHTML;
//     }
//   }
// function Scanlists(){
//   listofsounds.forEach(f => {
//    highlight(f)
//   });
// }
//   var url = "/api_getUFOText_v1.1 <1>";

// function getText() {
//   d3.text(url).then(function(response) {

//    console.log(response);
//    highlight(response)
//    return response
    // var trace = {
    //   type: "scatter",
    //   mode: "lines",
    //   name: "Bigfoot Sightings",
    //   x: response.map(data => data.year),
    //   y: response.map(data => data.sightings),
    //   line: {
    //     color: "#17BECF"
    //   }
    // };

    // var data = [trace];

    // var layout = {
    //   title: "Bigfoot Sightings Per Year",
    //   xaxis: {
    //     type: "date"
    //   },
    //   yaxis: {
    //     autorange: true,
    //     type: "linear"
    //   } 
    // };

    // Plotly.newPlot("plot", data, layout);
//   });
// }