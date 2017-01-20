function ajax(url, id){
	var oReq = new XMLHttpRequest();
	var secId = id;
	oReq.addEventListener("load", inputContent);
	oReq.open("GET", url);
	oReq.send();
}

function inputContent(){
	var temp = JSON.parse(this.responseText);
	var content = "<dt>"+temp["title"]+"</dt><dd>"+temp["body"]+"</dd>";
	var target = document.querySelector(".eleDisplayShow");
	target.innerHTML = "";
	target.insertAdjacentHTML("beforeend", content);
}

function classSwap(oldNode, newNode, dClass) {
	oldNode.classList.remove(dClass);
	newNode.classList.add(dClass);
}

var urlList = {
	"my_position" : "http://jsonplaceholder.typicode.com/posts/1",
	"my_friend" : "http://jsonplaceholder.typicode.com/posts/2",
	"my_theme" : "http://jsonplaceholder.typicode.com/posts/3",
	"my_news" : "http://jsonplaceholder.typicode.com/posts/4"
}

function changeView(evt) {
	var evtTarget = evt.target;
	if(evtTarget.tagName !== "SPAN" && evtTarget.tagName !== "DIV") return;
	if(evtTarget.tagName === "SPAN" ) evtTarget = evtTarget.parentElement;
	var sTab = nav.querySelector(".selectedTab");
	classSwap(sTab, evtTarget, "selectedTab");
	var secId = "my_"+evtTarget.id;
	var dpSec = document.querySelector(".eleDisplayShow");
	var newSec = document.querySelector("#"+secId);
	classSwap(dpSec, newSec, "eleDisplayShow");
	ajax(urlList[secId], secId);
}

function displaySection(id) {
	var dpSec = document.querySelector(".eleDisplayShow");
	dpSec.classList.remove("eleDisplayShow");
	document.querySelector("#"+id).classList.add("eleDisplayShow");
}

var nav = document.querySelector(".mainView > nav");

nav.addEventListener("click", changeView);


