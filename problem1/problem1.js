
/* 
 * 1. executeItemNode 함수를 완성하세요
 * 이 함수의 actionType 매개변수는 'add' 또는 'remove'를 받습니다.  add를 받으면 추가하고, remove를 받으면 일을 삭제합니다.
 * todoORNumber 는 add일때는 새로운 일을 문자열로 받고, remove일때는 숫자를 받습니다.
 * 할일 목록은 할일의 문자열 길이 순으로 정렬됩니다. 목록이 추가될때마다 바로 정렬되야 합니다.(가장 긴 할일 내용이 뒤로 가야함)
 * 삭제하려는 경우 num과 일치하는 item번호가 없다면 'message' 영역에서 적당한 메시지를 붉은색으로 표시됐다 3초뒤 사라집니다.
 * 추가하려는 경우 이미 같은일이 있다면 message영역에서 적당한 메시지를 붉은색으로 표시했다 3초뒤 사라집니다.
 * 함수를 여러개로 나눠도 상관없습니다.
 * 참고로 1번을 풀기 위해서는 string조작과 setTimeout이라는 것을 공부해야 할 수도 있습니다.
 * 
 * 2. 좀더 사용하기 쉬운 웹화면이 되도록, css에 다양한 스타일을 적용하면서 꾸며봅니다.
 * 
 * 3. 아래 event 관련 코드를 학습해보고, 어떤 코드를 의미하는지 최대한 자세히 주석으로 설명을 넣어보세요.
 */
function getElement_and_text(ele_name, text) {
	var ele_node = document.createElement(ele_name);
	var txt_node = document.createTextNode(text);
	ele_node.appendChild(txt_node);
	return ele_node;
}

function displayText(query, txt) {
	var target = document.querySelector(query);
	var msg = getElement_and_text("p", txt);
	target.style.color = "red";
	target.appendChild(msg);
	setTimeout(function() {
		target.removeChild(target.childNodes[1]);
		target.style.color = "";
	}, 3000);
}

function executeItemNode(actionType, todoORnumber) {
	var todo_list = document.querySelector("section.basket ol");
	var todo = getElement_and_text("li", todoORnumber);
	var todo_child = todo_list.children;
	var cnt = todo_child.length;
	switch(actionType) {
		case "add":
			for(var i = 0; i < cnt; i++) {
				if(todo_child[i].textContent === todoORnumber) {
					displayText("div.message", "해당 할일은 이미 있습니다.");
					return;	
				} 
				var tdc_txt_len = todo_child[i].textContent.length;
				if(tdc_txt_len > todoORnumber.length) {
					todo_list.insertBefore(todo, todo_child[i]); 
					// todo_child[i] 이걸로 돌아가는게 미심쩍음 질문을 위해 놔둬보자
					return;
				}
			}
			todo_list.appendChild(todo);    
			break;
		case "remove":
			if(todoORnumber < 0 || todoORnumber > cnt) {
				displayText("div.message", "해당 되는 항목이 없습니다.");
				return;
			}
			var index = todo_list.querySelector("li:nth-of-type(" + todoORnumber +")");
			todo_list.removeChild(index);
			break;
	}
	actionType = "";
	todoORnumber = "";
}
/* 
 * 3번문제는 여기에 자세히 설명을 넣으시면 됩니다.
class가 controller인 노드를 찾음*(section노드)
그 노드아래에서 botton노드(class 가 add와 remove인 button노드)를 타겟으로
click 했을시 버튼 노드의 previousElementSibling(각각의 button노드 앞에 있는 input노드)의 입력값을 
두번째 인자로 botton노드의 클래스명(add나 move)를 첫번째 인자에 넣고 excuteItemNode를 호출함
 */

var controller = document.querySelector(".controller"); 

controller.addEventListener("click", function(evt) {  
  var btn = evt.target;
  if(btn.tagName !== "BUTTON") return;
  var inputValue = btn.previousElementSibling.value;
  var actionType = btn.className;
  executeItemNode(actionType, inputValue);
});

