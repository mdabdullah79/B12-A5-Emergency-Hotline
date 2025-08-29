1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans:
    <table border=1 width="100%" cellpadding="50">
        <tr id="title">
            <td>getElementById</td>
            <td>getElementsByClassName</td>
            <td>querySelector</td>
            <td>querySelectorAll</td>
        </tr>
        <tr>
            <td>It's returns one element by specific id</td>
            <td>It's returns multiple element by a class name</td>
            <td>It's returns first matching element</td>
            <td>It's returns all matching elements (Node List)</td>
        </tr>
    </table>

2. How do you **create and insert a new element into the DOM**?
Ans:
For create element:
let newDiv = document.createElement("div");
newDiv.innerHTML = `
        <div>
        <h1>New Div</h1>
        </div>
`;
New Element into dom
const oldDiv = document.getElementbyID("ID");
oldDiv.appendChild(newDiv);

3. What is **Event Bubbling** and how does it work?
Ans:
Event Bubbling — this is what happens when we add an event listener to a parent element, and the user clicks the child element

Example:
<div id="parent">
  <button id="child">Click me</button>
</div>

document.getElementById("parent").addEventListener("click", function(){
  console.log("Parent clicked!");
});

document.getElementById("child").addEventListener("click",function(){
  console.log("Child clicked!");
});

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans:
Event Delegation is a technique where you attach a single event listener to a parent element to handle events on its child elements.

It is useful because it saves memory (fewer listeners) and works even for dynamically added elements

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:
<table border=1 width="100%" cellpadding="50">
        <tr> 
            <td>preventDefault()</td>
            <td>stopPropagation()</td>
        </tr>
        <tr>
            <td>stop default action.</td>
            <td>stop event from bubbling up.</td>
        </tr>
    </table>
---