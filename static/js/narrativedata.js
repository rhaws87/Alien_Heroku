// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.
let listofsounds = 'silence sound buzz crackle silent soundless bam quiet quietly loud thunderous boom noise sound'

let listofcolors = 'red green blue white yellow purple bright dim dark black silouette shadow yellow gold glimmering silver aluminum shiny dull brilliant flash pulsing metallic blinking'

let listoffeelings ='scared scary terrified terrifying frightened frightening amazed amazing excited exciting surprising surprised happy sad horrified mortified confused'

let listofspeeds ="slow fast instantly just gone disappeared rapidly poof great speed really fast quickly"

let listofmotion ="straight line right angle perpendicular ninty degree 90 deg reappear break up disappear appear was gone divided jumped"

let listofsize='colossal large small distant close huge tiny giant'

let listofencounter='contact abducted saw missing time taken away'


window.narrdata=[]
d3.csv("../static/js/UFO_Narratives.csv", function(CSVdata) {
    // console.log(CSVdata[0][0],CSVdata[0].text);
    console.log('Length:',CSVdata.length)
    window.narrdata=CSVdata.slice()
    console.log('Length:',CSVdata.length)
    console.log(CSVdata[80000], Math.floor(Math.random() * (CSVdata.length-1)) )
     document.getElementById("UFOquotes").innerHTML=CSVdata[Math.floor(Math.random() * (CSVdata.length-1))].text
    }); 
function Rndit(){
    num= Math.floor(Math.random() * (window.narrdata.length-1))
    console.log(num,narrdata[num].text)
    document.getElementById("UFOquotes").innerHTML=window.narrdata[num].text
    Hilitor("UFOquotes",listofsounds,"yellow").apply(listofsounds)
    Hilitor("UFOquotes",listofcolors,"green").apply(listofcolors)
    Hilitor("UFOquotes",listoffeelings,"blue").apply(listoffeelings)
    Hilitor("UFOquotes",listofspeeds,"red").apply(listofspeeds)
    Hilitor("UFOquotes",listofmotion,"tomato").apply(listofmotion)
    Hilitor("UFOquotes",listofmotion,"tomato").apply(listofmotion)
    Hilitor("UFOquotes",listofsize,"cyan").apply(listofsize)
    Hilitor("UFOquotes",listofencounter,"purple").apply(listofencounter)
  }

  // THis is from a javascript library used to
  // highlight HTML backgrounds using HTML5 MARK
  //Syntax.  It has been highlighted to for this project
  //so that each category of words has its own color.
  function Hilitor(id, tag,col)
  {
  
    // private variables
    var targetNode = document.getElementById(id) || document.body;
    var hiliteTag = tag || "MARK";
    var skipTags = new RegExp("^(?:" + hiliteTag + "|SCRIPT|FORM|SPAN)$");
    var colors = [col,col,col,col,col,col];
    var wordColor = [];
    var colorIdx = 0;
    var matchRegExp = "";
    var openLeft = false;
    var openRight = false;
  
    // characters to strip from start and end of the input string
    var endRegExp = new RegExp('^[^\\w]+|[^\\w]+$', "g");
  
    // characters used to break up the input string into words
    var breakRegExp = new RegExp('[^\\w\'-]+', "g");
  
    this.setEndRegExp = function(regex) {
      endRegExp = regex;
      return endRegExp;
    };
  
    this.setBreakRegExp = function(regex) {
      breakRegExp = regex;
      return breakRegExp;
    };
  
    this.setMatchType = function(type)
    {
      switch(type)
      {
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
  
    this.setRegex = function(input)
    {
      input = input.replace(endRegExp, "");
      input = input.replace(breakRegExp, "|");
      input = input.replace(/^\||\|$/g, "");
      if(input) {
        var re = "(" + input + ")";
        if(!this.openLeft) {
          re = "\\b" + re;
        }
        if(!this.openRight) {
          re = re + "\\b";
        }
        matchRegExp = new RegExp(re, "i");
        return matchRegExp;
      }
      return false;
    };
  
    this.getRegex = function()
    {
      var retval = matchRegExp.toString();
      retval = retval.replace(/(^\/(\\b)?|\(|\)|(\\b)?\/i$)/g, "");
      retval = retval.replace(/\|/g, " ");
      return retval;
    };
  
    // recursively apply word highlighting
    this.hiliteWords = function(node)
    {
      if(node === undefined || !node) return;
      if(!matchRegExp) return;
      if(skipTags.test(node.nodeName)) return;
  
      if(node.hasChildNodes()) {
        for(var i=0; i < node.childNodes.length; i++)
          this.hiliteWords(node.childNodes[i]);
      }
      if(node.nodeType == 3) { // NODE_TEXT
        if((nv = node.nodeValue) && (regs = matchRegExp.exec(nv))) {
          if(!wordColor[regs[0].toLowerCase()]) {
            wordColor[regs[0].toLowerCase()] = colors[colorIdx++ % colors.length];
          }
  
          var match = document.createElement(hiliteTag);
          match.appendChild(document.createTextNode(regs[0]));
          match.style.backgroundColor = wordColor[regs[0].toLowerCase()];
          match.style.color = "#000";
  
          var after = node.splitText(regs.index);
          after.nodeValue = after.nodeValue.substring(regs[0].length);
          node.parentNode.insertBefore(match, after);
        }
      };
    };
  
    // remove highlighting
    this.remove = function()
    {
      var arr = document.getElementsByTagName(hiliteTag);
      while(arr.length && (el = arr[0])) {
        var parent = el.parentNode;
        parent.replaceChild(el.firstChild, el);
        parent.normalize();
      }
    };
  
    // start highlighting at target node
    this.apply = function(input)
    {
      this.remove();
      if(input === undefined || !(input = input.replace(/(^\s+|\s+$)/g, ""))) {
        return;
      }
      if(this.setRegex(input)) {
        this.hiliteWords(targetNode);
      }
      return matchRegExp;
    };
  
  }