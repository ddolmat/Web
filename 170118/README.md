<h1> DOM이벤트가 중첩되었을 경우</h1>
```HTML
<div>
  <ul>
    <li>
      <button></button>
    </li>
  </ul>
</div>
```
```JavaScript
var div = document.querySelector("div");
var ul = div.querySelector("ul");
var li = ul.querySelector("li");
var button = li.querySelector("button");

div.addEventListener("click", function(){
	console.log("div");
});
ul.addEventListener("click", function(){
	console.log("ul");
});
li.addEventListener("click", function(){
	console.log("li");
});
button.addEventListener("click", function(){
	console.log("button");
});
```
<br>위와같은 구조에서 최하위 child인 button을 click할 경우 console창에<br>button<br>li<br>ul<br>div<br>순으로 찍히게 된다.<br> 즉 최하위 자식에 걸린 이벤트가 최우선이고 최상위부모에 걸린 이벤트가 제일 가장나중에 실행된다.
