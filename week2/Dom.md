# DOM manipulation 
## How can you use JavaScript to create an HTML element and then add it to your webpage? How would you replace an existing element with it?
### to add a new element to the HTML DOM
- you must create the element (element node) first, and then append it to an existing element here use appendChild(element) here add the new element in the of the parent element.
Example : 
```
ar newParagraph = document.createElement("p");
var content = document.createTextNode("This is new.");
newParagraph.appendChild(content);
var parent = document.getElementById("div1");
parent.appendChild(newParagraph);

```
- but when need add it in the spesific palce in the parent element can add it  insertBefore(newElement,childElement).
Example : 
```
var newParagraph = document.createElement("p");
var content = document.createTextNode("This is new.");
newParagraph.appendChild(content);

var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.insertBefore(newParagraph,child);

```
### when need replace existing element
- an by done by use the replaceChild() method , need to determine three thing 1- parent 2- the element need to replace it 3- new element:
Example :
```
var newParagraph = document.createElement("p");
var content = document.createTextNode("This is new.");
newParagraph.appendChild(content);

var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.replaceChild(newParagraph, child);

```
## How would you add a <li> element to the start of a <ul>?
- add a <li> element to the start of a <ul>
```
<ul id="list">
	<li>item 1</li>
	<li>item 2</li>
</ul>
```
```
var newListItem = document.createElement("li");
var contant = document.createTextNode("This is new list item .");
newListItem.appendChild(contant);

var parent = document.getElementById("list");
var child = document.getElementByTagName("li")[0];
parent.insertBefor(newListItem, child)
element.insertBefore(para,child);

```
the result 
```
<ul id="list">
	<li>This is new list item</li>
	<li>item 1</li>
	<li>item 2</li>
</ul>
```
## What is a JavaScript Event? What does event.preventDefault() do and why might you use it?

1) events are "things" that happen to HTML elements.
2) Event itself contains the properties and methods which are common to all events.

What does event.preventDefault() do and why might you use it?
The preventDefault() method cancel the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
For example, this can be useful when:
• Clicking on a "Submit" button, prevent it from submitting a form
• Clicking on a link, prevent the link from following the URL

```
<!DOCTYPE html>

<html>
<body>
<a id="myAnchor" href="https://w3schools.com/">Go to W3Schools.com</a>
<p>The preventDefault() method will prevent the link above from following the URL.</p>
<script>
document.getElementById("myAnchor").addEventListener("click", function(event){
event.preventDefault();
document.body.style.background = "#f00003";
});
</script>
</body>
</html>

```


## What is a NodeList? How is it different from an Array?
NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll()

#### Why node list insted of html collectoin

Both interfaces are collections of DOM nodes. They differ in the methods they provide and in the type of nodes they can contain. While a NodeList can contain any node type, an HTMLCollection is supposed to only contain Element nodes.

An HTMLCollection provides the same methods as a NodeList

- Node vs Array :

The Array in JavaScript is a global object which contains a list of items.

Although NodeList is not an Array, it is possible to iterate over it with forEach(). It can also be converted to a real Array using Array.from().

## What are the security concerns around Element.innerHTML and what could you use instead?

- innerText
returns the visible text contained in a node
not return the text of elements that are hidden with CSS.

- textContent 
returns the full text.
return the text of elements that are hidden with CSS
```
<div id="t">
<div>visible , 
text</div>
<div style="visibility:hidden">hidden text</div>
</div>
```

- innerText : result  "visible , text ".
- textContent : result "visible ,\ntext  hidden text".

- innerHTML
copy all html inside the element then remove it and paste it in addition to the new html.
The innerHTML property sets or returns the HTML content of an element.

-can use append child insted of innerHTML
