document.addEventListener("DOMContentLoaded", function(){
	init();
});

function init(){
	var wrap = document.querySelector(".wrap");
	var width = parseInt(window.getComputedStyle(wrap).width);
	var basket = wrap.querySelector(".basket");
	var btn = wrap.querySelector(".btn");
	var overOpacity = 0.7;
	var outOpacity = window.getComputedStyle(btn).opacity;
	insertClone(basket, width);
	wrap.addEventListener("click", function(evt){
		moveBox(basket, width, evt.target);
		evt.target.blur();		
	});
	wrap.addEventListener("mouseover", function(evt){
		modOpacity(overOpacity, evt.target);
	});
	wrap.addEventListener("mouseout", function(evt){
		modOpacity(outOpacity, evt.target);
	});

}
function insertClone(div, width){
	var len = div.children.length;
	var lastClone = div.children[len-1].cloneNode(true);
	var lastX = -width;
	setTrans(lastClone, lastX, "");
	div.insertBefore(lastClone, div.children[0]);
	var firstClone = div.children[1].cloneNode(true);
	var firstX = width * len;
	setTrans(firstClone, firstX, "");
	div.appendChild(firstClone);
}

function setTrans(node, x, tr){
	node.style.transform = "translate3d("+x+"px, 0px, 0px)";
	if(tr === "") return;
	node.style.transition = tr;
}

function moveBox(div, width, evtTarget){
	if(evtTarget.tagName !== "BUTTON") return;
	var boxNum = div.children.length - 2;
	var x = +div.style.transform.replace(/translate3d\((-?\d+).+/, "$1");
	if(evtTarget.id === "left") {
		moveLeft(div, boxNum, x, width);
		return;
	}
	if(evtTarget.id === "right") {
		moveRight(div, boxNum, x, width);
		return;
	}
}

function moveLeft(div, boxNum, x, width){
	if(x === width){
		var mod =  - (boxNum - 1) * width;
		var mod2 = mod + width;
		setTrans(div, mod, "none");
		setTimeout(function(){
		setTrans(div, mod2, "All 1.5s");
		}, 10);
		return;
	}
	x += width;
	setTrans(div, x, "");
	return;
}

function moveRight(div, boxNum, x, width){
	var a = boxNum * width;
	if(x === -a) {
		setTrans(div, 0, "none");
		setTimeout(function(){
			setTrans(div, -width, "All 1.5s");		
		}, 10);
		return;	
		}
	x -= width;
	setTrans(div, x, "");
	return;	
}

function modOpacity(value, evtTarget){
	if(evtTarget.tagName !== "BUTTON") return;
	evtTarget.style.opacity = value;
}
