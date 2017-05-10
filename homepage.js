jQuery(document).ready(function($) {
var carousel = [
{
	"image path":"images/p1-mml-bagel-world.png",
	"caption":"Phase 1 - MML - Bagel World"
},{
	"image path":"images/p1-mml-cold-blood.png",
	"caption":"Phase 1 - MML - Cold Blood, Warm Love"
},{
	"image path":"images/p1-mml-just-get-lost.png",
	"caption":"Phase 1 - MML - Just Get Lost"
},{
	"image path":"images/p1-mml-macarons.png",
	"caption":"Phase 1 - MML - Macarons"
},{
	"image path":"images/p1-mml-nelis.png",
	"caption":"Pahse 1 - MML - Neli's Website"
},{
	"image path":"images/p1-mml-quiesco.png",
	"caption":"Phase 1 - MML - Quiesco"
},{
	"image path":"images/p1-mml-style-ideal.png",
	"caption":"Phase 1 - MML - Style Ideal"
},{
	"image path":"images/p1-cs-pizza.png",
	"caption":"Phase 1 - CS - Pizza, The Perfect Food"
},{
	"image path":"images/p1-cs-weekend.png",
	"caption":"Phase 1 - CS - Weekend Break"
},{
	"image path":"images/p1-sibl-blue-oak.png",
	"caption":"Phase 1 - SIBL - Blue Oak Lake"
},{
	"image path":"images/p1-htr-waterfalls.png",
	"caption":"Phase 1 - HTR - Waterfalls"
},{
	"image path":"images/p1-htr-colebrook.png",
	"caption":"Phase 1 - HTR - Colebrook"
},{
	"image path":"images/p1-mml-nyc-landmarks.png",
	"caption":"Phase 1 - MML - New York City Landmarks"
},{
	"image path":"images/p1-mml-united.png",
	"caption":"Phase 1 - MML - United Martian Cosmiclines"
},{
	"image path":"images/p1-mml-mjd.png",
	"caption":"Phase 1 - MML - MJD Soul Food & Catering"
},{
	"image path":"images/p1-cs-onthewall.png",
	"caption":"Phase 1 - CS - On The Wall"
},{
	"image path":"images/p1-cs-delish.png",
	"caption":"Phase 1 - CS - Delish Photography"
},{
	"image path":"images/p1-blc-wefix.png",
	"caption":"Phase 1 - BLC - WeRepair"
},{
	"image path":"images/p1-chr-webrunch.png",
	"caption":"Phase 1 - CHR - WeBrunch"
},{
	"image path":"images/p1-chr-hoptown.png",
	"caption":"Phase 1 - CHR - Hoptown Brewery"
},{
	"image path":"images/p1-chr-lotus.png",
	"caption":"Phase 1 - CHR - Growing Lotus Yoga"
},{
	"image path":"images/p1-sgc-eating-green.png",
	"caption":"Phase 1 - SGC - Eating Green"
},{
	"image path":"images/p2-mml-ithica.png",
	"caption":"Phase 2 - Ithica, NY"
},{
	"image path":"images/p2-mml-brightbud.png",
	"caption":"Phase 2 - Bright Bud"
},{
	"image path":"images/p2-sibl-moontan.png",
	"caption":"Phase 2 - SIBL - Moontan"
},{
	"image path":"images/p2-sibl-camping.png",
	"caption":"Phase 2 - SIBL - Camping for Clowns"
}
]

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

carousel = shuffle(carousel);

for(var i = 0; i < carousel.length; i++){
	var indicator = document.createElement("li");
	indicator.setAttribute("data-target","#myCarousel");
	indicator.setAttribute("data-slide-to", i);
	if(i == 0){
		indicator.className =	"active";
	}
	document.getElementById("carousel-indicators").appendChild(indicator);

	var item = document.createElement("div");

	if(i==0){
		item.className = "item carousel-text active";
	} else{
		item.className = "item carousel-text";
	}

	var itemImage = document.createElement("img");
	itemImage.setAttribute("src",carousel[i]["image path"]);
	item.appendChild(itemImage);

	var caption = document.createElement("p");
	caption.appendChild(document.createTextNode(carousel[i]["caption"]))
	item.appendChild(caption);

	document.getElementById("carousel-inner").appendChild(item);




}








});