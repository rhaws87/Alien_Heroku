// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.
let listofsounds = " silence sound buzz crackle silent soundless bam quiet quietly loud thunderous boom noise sound 'no sound' 'no noise'"

let listofcolors = " red green blue white yellow purple bright flashing 'bright light' dim orange dark black silouette shadow yellow gold glimmering silver aluminum shiny dull brilliant flash pulsing metallic blinking"

let listoffeelings = ' awe scared scary horrible terrified shocking shocked terrifying frightened frightening amazed amazing excited exciting surprising surprised happy sad horrified mortified confused'

let listofspeeds = " slow fast instantly vanished 'just vanished' gone disappeared rapidly poof great speed 'really fast' quickly"

let listofmotion = " traveling hover leaped straight 'straight line' right angle perpendicular ninety degree 90 deg appeared reappear break upward disappear appear 'was gone' divided jumped"

let listofsize = ' colossal large small distant close huge tiny giant '

let listofencounter = " contact abducted 'I saw' 'missing time' 'taken away' "
let listofshapes = ' cylindrical saucer oval object airplane aircraft airplanes helicopter helicopters craft triangle triangular circle sphere chevron V v cigar cylinder light ship'
window.narrdata = []
d3.csv("../static/js/UFO_Narratives.csv", function (CSVdata) {
  console.log(CSVdata[0][0],CSVdata[0].text);
  console.log('Length:',CSVdata.length)
  window.narrdata = CSVdata.slice()
  console.log('Length:',CSVdata.length)
  console.log(CSVdata[80000], Math.floor(Math.random() * (CSVdata.length-1)) )
  document.getElementById("UFOquotes").innerHTML = CSVdata[Math.floor(Math.random() * (CSVdata.length - 1))].text
  let myHilitor = new Hilitor("UFOquotes");

  myHilitor.apply(listofsounds + listofcolors + listoffeelings + listofspeeds + listofmotion + listofsize + listofencounter + listofshapes);
});
function Rndit() {
  num = Math.floor(Math.random() * (window.narrdata.length - 1))
  //console.log(num,narrdata[num].text)
  document.getElementById("UFOquotes").innerHTML = window.narrdata[num].text
  let myHilitor = new Hilitor("UFOquotes");
  myHilitor.apply(listofsounds + listofcolors + listoffeelings + listofspeeds + listofmotion + listofsize + listofencounter + listofshapes);

}
function Hilitor(id, tag) {

  // private variables
  var targetNode = document.getElementById(id) || document.body;
  var hiliteTag = tag || "MARK";
  var skipTags = new RegExp("^(?:" + hiliteTag + "|SCRIPT|FORM|SPAN)$");
  var colors = ["#800000", "#008000", "#808000", "#000080", "#800080", "#008080", "#c0c0c0",
    "#808080", "#ff0000", "#00ff00", "#ffff00", "#0000ff", "#ff00ff", "#00ffff", "#ffffff", "#000000", "#00005f"
    , "#000087", "#0000af", "#0000d7", "#0000ff", "#005f00", "#005f5f", "#005f87", "#005faf", "#005fd7", "#005fff"
    , "#008700", "#00875f", "#008787", "#0087af", "#0087d7", "#0087ff", "#00af00", "#00af5f", "#00af87", "#00afaf",
    "#00afd7", "#00afff", "#00d700", "#00d75f", "#00d787", "#00d7af", "#00d7d7", "#00d7ff", "#00ff00", "#00ff5f",
    "#00ff87", "#00ffaf", "#00ffd7", "#00ffff", "#5f0000", "#5f005f", "#5f0087", "#5f00af", "#5f00d7", "#5f00ff",
    "#5f5f00", "#5f5f5f", "#5f5f87", "#5f5faf", "#5f5fd7", "#5f5fff", "#5f8700", "#5f875f", "#5f8787", "#5f87af",
    "#5f87d7", "#5f87ff", "#5faf00", "#5faf5f", "#5faf87", "#5fafaf", "#5fafd7", "#5fafff", "#5fd700", "#5fd75f",
    "#5fd787", "#5fd7af", "#5fd7d7", "#5fd7ff", "#5fff00", "#5fff5f", "#5fff87", "#5fffaf", "#5fffd7", "#5fffff",
    "#870000", "#87005f", "#870087",
    "#8700af", "#8700d7", "#8700ff", "#875f00", "#875f5f", "#875f87", "#875faf", "#875fd7", "#875fff",
    "#878700", "#87875f", "#878787", "#8787af", "#8787d7", "#8787ff", "#87af00", "#87af5f", "#87af87",
    "#87afaf", "#87afd7", "#87afff", "#87d700", "#87d75f", "#87d787", "#87d7af", "#87d7d7", "#87d7ff",
    "#87ff00", "#87ff5f", "#87ff87", "#87ffaf", "#87ffd7", "#87ffff", "#af0000", "#af005f", "#af0087",
    "#af00af", "#af00d7", "#af00ff", "#af5f00", "#af5f5f", "#af5f87", "#af5faf", "#af5fd7", "#af5fff",
    "#af8700", "#af875f", "#af8787", "#af87af", "#af87d7", "#af87ff", "#afaf00", "#afaf5f", "#afaf87",
    "#afafaf", "#afafd7", "#afafff", "#afd700", "#afd75f", "#afd787", "#afd7af", "#afd7d7", "#afd7ff",
    "#afff00", "#afff5f", "#afff87", "#afffaf", "#afffd7", "#afffff", "#d70000", "#d7005f", "#d70087",
    "#d700af", "#d700d7", "#d700ff", "#d75f00", "#d75f5f", "#d75f87", "#d75faf", "#d75fd7", "#d75fff", "#d78700",
    "#d7875f", "#d78787", "#d787af", "#d787d7", "#d787ff", "#d7af00", "#d7af5f", "#d7af87", "#d7afaf", "#d7afd7",
    "#d7afff", "#d7d700", "#d7d75f", "#d7d787", "#d7d7af", "#d7d7d7", "#d7d7ff", "#d7ff00", "#d7ff5f", "#d7ff87",
    "#d7ffaf", "#d7ffd7", "#d7ffff", "#ff0000", "#ff005f", "#ff0087", "#ff00af", "#ff00d7", "#ff00ff", "#ff5f00",
    "#ff5f5f", "#ff5f87", "#ff5faf", "#ff5fd7", "#ff5fff", "#ff8700", "#ff875f", "#ff8787", "#ff87af", "#ff87d7",
    "#ff87ff", "#ffaf00", "#ffaf5f", "#ffaf87", "#ffafaf", "#ffafd7", "#ffafff", "#ffd700", "#ffd75f", "#ffd787",
    "#ffd7af", "#ffd7d7", "#ffd7ff", "#ffff00", "#ffff5f", "#ffff87", "#ffffaf", "#ffffd7", "#ffffff", "#080808",
    "#121212", "#1c1c1c", "#262626", "#303030", "#3a3a3a", "#444444", "#4e4e4e", "#585858", "#626262", "#6c6c6c",
    "#767676", "#808080", "#8a8a8a", "#949494", "#9e9e9e", "#a8a8a8", "#b2b2b2", "#bcbcbc", "#c6c6c6", "#d0d0d0",
    "#dadada", "#e4e4e4", "#eeeeee"];

  var wordColor = [];
  var colorIdx = 0;
  var matchRegExp = "";
  var openLeft = false;
  var openRight = false;

  // characters to strip from start and end of the input string
  var endRegExp = new RegExp('^[^\\w]+|[^\\w]+$', "g");

  // characters used to break up the input string into words
  var breakRegExp = new RegExp('[^\\w\'-]+', "g");

  this.setEndRegExp = function (regex) {
    endRegExp = regex;
    return endRegExp;
  };

  this.setBreakRegExp = function (regex) {
    breakRegExp = regex;
    return breakRegExp;
  };

  this.setMatchType = function (type) {
    switch (type) {
      case "left":
        this.openLeft = false;
        this.openRight = true;
        break;

      case "right":
        this.openLeft = true;
        this.openRight = false;
        break;

      case "open":
        this.openLeft = this.openRight = true;
        break;

      default:
        this.openLeft = this.openRight = false;

    }
  };

  this.setRegex = function (input) {
    input = input.replace(endRegExp, "");
    input = input.replace(breakRegExp, "|");
    input = input.replace(/^\||\|$/g, "");
    if (input) {
      var re = "(" + input + ")";
      if (!this.openLeft) {
        re = "\\b" + re;
      }
      if (!this.openRight) {
        re = re + "\\b";
      }
      matchRegExp = new RegExp(re, "i");
      return matchRegExp;
    }
    return false;
  };

  this.getRegex = function () {
    var retval = matchRegExp.toString();
    retval = retval.replace(/(^\/(\\b)?|\(|\)|(\\b)?\/i$)/g, "");
    retval = retval.replace(/\|/g, " ");
    return retval;
  };

  // recursively apply word highlighting
  this.hiliteWords = function (node) {
    if (node === undefined || !node) return;
    if (!matchRegExp) return;
    if (skipTags.test(node.nodeName)) return;

    if (node.hasChildNodes()) {
      for (var i = 0; i < node.childNodes.length; i++)
        this.hiliteWords(node.childNodes[i]);
    }
    if (node.nodeType == 3) { // NODE_TEXT
      if ((nv = node.nodeValue) && (regs = matchRegExp.exec(nv))) {
        if (!wordColor[regs[0].toLowerCase()]) {
          wordColor[regs[0].toLowerCase()] = colors[colorIdx++ % colors.length];
        }

        var match = document.createElement(hiliteTag);
        match.appendChild(document.createTextNode(regs[0]));
        match.style.backgroundColor = wordColor[regs[0].toLowerCase()];
        bc = RGBtoHex(match.style.backgroundColor)//new RGBColor(match.style.backgroundColor)
        C = []
        C = RGBColor(bc)
        // console.log('color of background', bc)
        // console.log(match.style.backgroundColor)
        cdist = ((255 - +C.r)   + (255 - +C.g) ** 2 + (255 - +C.b) ** 2)
        // console.log(cdist)
        // console.log((C.r), (C.g), (C.b))
        if (((255 - +C.r)  > 120 && (255 - +C.r)  < 136) && ((255 - +C.g)  > 120 && (255 - +C.g)  < 136) && ((255 - +C.b)  > 120 && (255 - +C.b)  < 136)) {
          match.style.color = "#000";
        }

        else {
          match.style.color = rgb((255 - +C.r), (255 - +C.g), (255 - +C.b)); "#000";
        }
        var after = node.splitText(regs.index);
        after.nodeValue = after.nodeValue.substring(regs[0].length);
        node.parentNode.insertBefore(match, after);
      }
    };
  };

  // remove highlighting
  this.remove = function () {
    var arr = document.getElementsByTagName(hiliteTag);
    while (arr.length && (el = arr[0])) {
      var parent = el.parentNode;
      parent.replaceChild(el.firstChild, el);
      parent.normalize();
    }
  };

  // start highlighting at target node
  this.apply = function (input) {
    this.remove();
    if (input === undefined || !(input = input.replace(/(^\s+|\s+$)/g, ""))) {
      return;
    }
    if (this.setRegex(input)) {
      this.hiliteWords(targetNode);
    }
    return matchRegExp;
  };

}
function RGBtoHex(rgbString) {
  // var rgbString = "rgb(0, 70, 255)"; // get this in whatever way.

  var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  // parts now should be ["rgb(0, 70, 255", "0", "70", "255"]

  delete (parts[0]);
  for (var i = 1; i <= 3; ++i) {
    parts[i] = parseInt(parts[i]).toString(16);
    if (parts[i].length == 1) parts[i] = '0' + parts[i];
  }
  var hexString = '#' + parts.join('').toUpperCase(); // "#0070FF"
  return hexString
}
// function RGBColor(str){
//   var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
//   return match ? {
//     red: match[1],
//     green: match[2],
//     blue: match[3]
//   } : {};
// }
function RGBColor(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function rgb(r, g, b) {
  return 'rgb(' + [(r || 0), (g || 0), (b || 0)].join(',') + ')';
}
