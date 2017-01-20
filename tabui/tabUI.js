var oReq = new XMLHttpRequest();

function ajax(url, func){
	oReq.addEventListener("load", func);
	oReq.open("GET", url);
	oReq.send();
}

function inputContent(secID){
	var temp = JSON.parse(this.responseText);
	var target = document.querySelector("#"+secId);
	var content = "<div>"+temp["title"]+"</div><div>"+temp["body"]+"</div>";
	target.innerAdjacentHTML("beforeend",content);
}

function changeTabColor(evt) {
	var target = evt.target;
	if(target.tagName !== "SPAN") return;
	var sTab = nav.querySelector(".selectedTab");
	sTab.classList.remove("selectedTab");
	target.parentElement.classList.add("selectedTab");
	var secId = "my_"+target.parentElement.id;
	ajax(urlList[secId],function(){
		inputContent(secID);
	});	
}
var urlList = {
	"my_position" : "http://jsonplaceholder.typicode.com/posts/1",
	"my_friend" : "http://jsonplaceholder.typicode.com/posts/2",
	"my_theme" : "http://jsonplaceholder.typicode.com/posts/3",
	"my_news" : "http://jsonplaceholder.typicode.com/posts/1"
}

var nav = document.querySelector(".mainView > nav");

nav.addEventListener("click", changeTabColor);


