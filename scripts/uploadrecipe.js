// let queryString = decodeURIComponent(window.location.search);
// let queries = queryString.split("?");
// let title = queries[0];
// document.write(title);

var title =localStorage.getItem("title");

let para = document.createElement("p");
document.body.appendChild(para);
let node = document.createTextNode(title);
para.appendChild(node);
