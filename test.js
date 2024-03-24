const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const contentP = document.createElement("p");
contentP.textContent = "Hey I'm red!";
contentP.style.color = "red";

const contentHeader = document.createElement("h3");
contentHeader.textContent = "I'm a blue h3!";
contentHeader.style.color = "blue";

content.appendChild(contentP);
content.appendChild(contentHeader);

container.appendChild(content);

//create custom div
const cust_div = document.createElement("div");
cust_div.classList.add("newDiv");

cust_div.style.backgroundColor = "pink";
cust_div.style.borderColor = "black";
cust_div.style.borderStyle = "solid";

const newDivHeader = document.createElement("h1");
newDivHeader.textContent = "I'm in a div";
cust_div.appendChild(newDivHeader);

const newDivP = document.createElement("p");
newDivP.textContent = "ME TOO!";
cust_div.appendChild(newDivP);

container.appendChild(cust_div);

//button properties
const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
