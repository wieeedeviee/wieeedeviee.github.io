const home = "Home";
const content1 = "Fake News, Disinformation, and Misinformation";
const content2 = "The Spread of Misinformation";
const content3 = "Prevalence of Fake News in the PH";
const content4 = "Stopping Disinformation";

function openNav()	{
	document.getElementById("side-menu").style.width = "350px";
	document.getElementById("side-menu").style.paddingRight = "10px";
	document.getElementById("side-menu").style.paddingLeft = "15px";
	document.getElementById("main").style.marginLeft = "350px";
	document.getElementById("main").style.padding = "16px";
	document.getElementById("ico-menu").setAttribute( "onclick", "javascript: closeNav();" );
	document.getElementsByTagName("h1")[0].style.fontSize = "50px";
}

function closeNav()	{
	document.getElementById("side-menu").style.width = "0";
	document.getElementById("side-menu").style.paddingRight = "0";
	document.getElementById("side-menu").style.paddingLeft = "0";
	document.getElementById("main").style.marginLeft = "0";
	document.getElementById("main").style.padding = "0";
	document.getElementById("ico-menu").setAttribute("onclick","javascript: openNav();");
	document.getElementsByTagName("h1")[0].style.fontSize = "60px";
}

function navHomeLink()	{
	const element = document.getElementById("nav-sect");
	element.getElementsByClassName("nav-home")[0].style.backgroundPosition = "-19px -76px";
}
function navHomeHover()	{
	const element = document.getElementById("nav-sect");
	element.getElementsByClassName("nav-home")[0].style.backgroundPosition = "-19px -125px";
}
function navHomeActive()	{
	const element = document.getElementById("nav-sect");
	element.getElementsByClassName("nav-home")[0].style.backgroundPosition = "-19px -175px";
}

let i = 0;

function navCtLink()	{
	const collection = document.getElementsByClassName("nav-ct");
	collection[i].style.backgroundPosition = "-110px -76px";
}
function navCtHover()	{
	const collection = document.getElementsByClassName("nav-ct");
	collection[i].style.backgroundPosition = "-67px -76px";
	collection[i].style.transition = "0.5s";
}
function navCtActive()	{
	const collection = document.getElementsByClassName("nav-ct");
	collection[i].style.backgroundPosition = "-153px -76px";
	collection[i].style.transition = "0s";
}

function navCtLink1()	{
	i = 1;
	navCtLink();
	i = 0;
}
function navCtHover1()	{
	i = 1;
	navCtHover();
	i = 0;
}
function navCtActive1()	{
	i = 1;
	navCtActive();
	i = 0;
}

function navCtLink2()	{
	i = 2;
	navCtLink();
	i = 0;
}
function navCtHover2()	{
	i = 2;
	navCtHover();
	i = 0;
}
function navCtActive2()	{
	i = 2;
	navCtActive();
	i = 0;
}

function navCtLink3()	{
	i = 3;
	navCtLink();
	i = 0;
}
function navCtHover3()	{
	i = 3;
	navCtHover();
	i = 0;
}
function navCtActive3()	{
	i = 3;
	navCtActive();
	i = 0;
}

function navL()	{
	let element = document.getElementById("i-am-left");
	document.getElementById("nav-left").style.transform = "scale(1.0)";
	element.getElementsByClassName("navtext")[0].style.textDecoration = "none";
}
function navLHover()	{
	let element = document.getElementById("i-am-left");
	document.getElementById("nav-left").style.transform = "scale(1.3)";
	element.getElementsByClassName("navtext")[0].style.textDecoration = "underline solid var(--white) 0.5px";
}
function navLActive()	{
	let element = document.getElementById("i-am-left");
	document.getElementById("nav-left").style.opacity = "60%";
	document.getElementById("nav-left").style.backgroundColor = "var(--dark_gray)";
	element.getElementsByClassName("navtext")[0].style.color = "var(--gray) !important";
	element.getElementsByClassName("navtext")[0].style.textDecoration = "underline solid var(--gray) 0.5px";
}

function navR()	{
	let element = document.getElementById("i-am-right");
	document.getElementById("nav-right").style.transform = "scale(1.0)";
	element.getElementsByClassName("navtext")[0].style.textDecoration = "none";
}
function navRHover()	{
	let element = document.getElementById("i-am-right");
	document.getElementById("nav-right").style.transform = "scale(1.3)";
	element.getElementsByClassName("navtext")[0].style.textDecoration = "underline solid var(--white) 0.5px";
}
function navRActive()	{
	let element = document.getElementById("i-am-right");
	document.getElementById("nav-right").style.opacity = "60%";
	document.getElementById("nav-right").style.backgroundColor = "var(--dark_gray)";
	element.getElementsByClassName("navtext")[0].style.color = "var(--gray) !important";
	element.getElementsByClassName("navtext")[0].style.textDecoration = "underline solid var(--gray) 0.5px";
}


function openDD() {
  document.getElementById("dd").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#ico-info')) {
    var dropdowns = document.getElementsByClassName("dd-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function clickLike(){
	let txt;
	if (confirm("Leave a like for this page?")) {
		txt = "Thank you!";
		alert(txt);
	}
}
function clickComment() {
	let text;
	let comment = prompt("Leave a comment! Feedback is very much appreciated.", "");
	if (comment == null || comment == "") {
		text = "User cancelled the prompt.";
	} else {
		text = "Thank you! Now, do you think it will be posted? Or even recorded? " 
				+ "Eh, I don't think so...for now.";
	}
	alert(text);
}
function clickShare(){
	let link = "<TBA>";
	alert(	"Copy our website's link " + link 
			+ " and share it with peers to provide them information about fake news.")
}

/*CODE REFERENCES:
 >> https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
 >> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_getelementsbyclassname2
 >> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbyclassname_loop
 >> https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown
 >> https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm
 >> https://www.w3schools.com/js/tryit.asp?filename=tryjs_alert
 >> https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt
*/