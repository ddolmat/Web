// 미션 3 - 1 stawberry 아래 새로운 과일 추가하기
var fruits = document.querySelector("ul");
var ananas_node = document.createElement("LI");
var ananas_textnode = document.createTextNode("ananas");

ananas_node.appendChild(ananas_textnode);
fruits.appendChild(ananas_node);

// 미션 3 - 2 다시 삭제하기
fruits.removeChild(fruits.lastElementChild);

//미션 4 바나나와 오렌지사이에 새로운 과일을 추가하기
var dragonfruit_textnode = document.createTextNode("dragonfruit");
var dragonfruit_node = document.createElement("LI");
var orange = document.querySelector("li:nth-child(3)");

dragonfruit_node.appendChild(dragonfruit_textnode);
fruits.insertBefore(dragonfruit_node, orange);

//미션 5 apple을 grape와 strawberry사이로 옮기기
var strawberry = fruits.lastElementChild;
var apple = fruits.firstElementChild; 

fruits.insertBefore(apple, strawberry);

//미션 6 class가 red인 노드만 삭제하기
function delChild(arr, delChild) {
	for(var i = 0; i < delChild.length; i++) {
		arr.removeChild(delChild[i]);
	}
}

var colors = document.querySelector("ul:nth-child(2)");
var red = document.querySelectorAll(".red");

delChild(colors, red);

//미션 7 section 하위에 blue라는 클래스의 노드가 있을경우 하위의 h2 노드삭제
var sons_of_section = document.querySelector("section");
var blue = sons_of_section.querySelector(".blue");
var h2 = sons_of_section.querySelectorAll("h2");

if(blue !== null) delChild(sons_of_section, h2);
