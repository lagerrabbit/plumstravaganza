var canvas;
var jsonobject;
var padding=50;

/////DOM STUFF
var searchTermSpan;
var keywordInput1;
var keywordInput2;
var keywordInput3;
var searchTerm = "";
var speechDataSpan;
var searchButton; 
var linksSpan;

function setup() {
  //step 1
  //canvas = createCanvas(1200,200);
  //step 2
  //canvas.parent("canvasID");
  //step 3
  keywordInput1 = createInput('');
  //keywordInput2 = createInput('');
  //keywordInput3 = createInput('');
  //step 4
  keywordInput1.parent("keywordInputID");
  //keywordInput2.parent("keywordInputID");
  //keywordInput3.parent("keywordInputID");
  //keywordInput.changed(fetchStatistics);
  //step 5
  searchTermSpan = createSpan('');
  //step 6
  searchTermSpan.parent("searchtermID");
  //step 7 
  searchButton = createButton("search");
  //step 8
  searchButton.parent("keywordInputID");
  //step 9
  searchButton.mousePressed(fetchStatistics);
  //step 10
  searchButton.class("btn btn-default");
  //step 11
   speechDataSpan = createSpan('');
  //step 12
  speechDataSpan.parent("speechDataID");
  //linksSpan = createSpan();
  //linksSpan.parent("LinksID");
}

function draw() {
  background(255);
  stroke(0); noFill();
  //rect(0,0,width-1,height-1);
  if (jsonobject)
  {
	  //drawStatistics();
	  //drawStats2();
	  //drawYears();
  }
}
function drawStats2()
{
	var numArticles = jsonobject.response.total;
	//console.log(numArticles);
	htmlString="";
	scaledNum = map(numArticles, 0, 1850390, 0, 200);
	for (var i=0; i<jsonobject.response.results.length; i++)
	{
		//var div = createDiv('');
		//div.parent("linksID");
		//var link = createA(jsonobject.response.results[i].webUrl,jsonobject.response.results[i].webTitle);
		//link.parent(div);
		
		htmlString += '<div><a href="' + jsonobject.response.results[i].webUrl +'" target="_blank" style="color: rgb('+ int(i)*25 +','+ int(i)*25 +','+ int(i)*25 +');font-size: '+ (50-(4* int(i))) + 'px;">' + jsonobject.response.results[i].webTitle +'</a></div>'
	
		//link.style("font-size", 50-(4*i)+'px');
		//link.style("color", red);
		
	}
	speechDataSpan.html(htmlString);
}
function drawStatistics()
{
  noStroke();
  //step 15
  var minfreq = jsonobject.minfreq;
  //step 16
  var maxfreq = jsonobject.maxfreq;
  //step 17
  var startyear = jsonobject.startyear;
  //step 18
  var endyear = jsonobject.endyear;
  //step 19
  var totalentries = jsonobject.totalentries;
  
  var closestSpeech = {}
  var closestYearDistance=99999;
    
  for (var i=0; i<jsonobject.response.results.length; i++)
  {
	  //step 20
	  var party = jsonobject.statistics[x].party;
	  //step 21
	  var year = jsonobject.statistics[x].year;
	  //step 21
	  var freq = jsonobject.statistics[x].freq;
	  
	  var xLoc = map(year, startyear, endyear, 0+padding, width-padding); //start later, end sooner on canvas
	  var diam = map(freq, minfreq, maxfreq, 0, 60);	  
	  if (party=="democrat") fill(0,0,255,60);
	  else if (party=="republican") fill(255,0,0,60);
	  else fill(0,255,0,100);
	  ellipse(xLoc, height/2, diam, diam);
	  	  
	  if (dist(mouseX,mouseY,xLoc,height/2)<closestYearDistance && freq>0)
	  {
		  closestSpeech["year"]=year;
		  closestSpeech["dist"]=dist(mouseX,mouseY,xLoc,height/2);
		  closestSpeech["xcoord"]=xLoc;
		  closestSpeech["president"]=jsonobject.statistics[x].president;
		  closestSpeech["party"]=jsonobject.statistics[x].party;
		  closestSpeech["diam"]=diam;
		  closestSpeech["freq"]=freq;
		  closestYearDistance = closestSpeech["dist"];
	  }
  }
  
  //SETTING HTML STRING
  htmlString="";
  //htmlString +='<a href= style="color:'+255-(25*i) +',125,125;"' + jsonobject.response.results[i].webUrl + '">' + jsonobject.response.results[i].webTitle + '</a>';
	 
  
  //step 22
  speechDataSpan.html(htmlString);
}

function drawYears()
{
	var min = jsonobject.startyear;
	var max = jsonobject.endyear;
	var yearsToDisplay=10;
	
	for (var x=0;x<yearsToDisplay;x++)
	{
		var xcoord = map(x,0,yearsToDisplay-1,padding,width-padding);
		var year = int(map(x,0,yearsToDisplay-1,min,max));
		noStroke(); fill(0);
		text(year, xcoord-textWidth(year)/2, 15);
		stroke(200); strokeWeight(1);
		line(xcoord,20,xcoord,height);
	}
}

function fetchStatistics()
{
  //step 13
  searchTerm = keywordInput1.value();
  //step 14
  searchTermSpan.html(searchTerm);
  jsonobject = loadJSON('http://content.guardianapis.com/search?q='+searchTerm+'&order-by=newest&api-key=c9b2f355-dce0-4aab-817c-8ccf2eaaf96e',drawStats2);
  console.dir(jsonobject);
}
