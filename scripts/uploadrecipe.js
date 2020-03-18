

document.querySelector("#uploadTitle").innerHTML = localStorage.getItem("title");

document.querySelector("#ing1").innerHTML = localStorage.getItem("ing1");
document.querySelector("#ing2").innerHTML = localStorage.getItem("ing2");
document.querySelector("#ing3").innerHTML = localStorage.getItem("ing3");
document.querySelector("#ing4").innerHTML = localStorage.getItem("ing4");
document.querySelector("#instruction").innerHTML = localStorage.getItem("instruction");
document.querySelector("#description").innerHTML = localStorage.getItem("description");
document.querySelector("#prep").innerHTML = "Prep Time: " + localStorage.getItem("preptime") +" minutes";
document.querySelector("#cook").innerHTML = "Cook Time: " + localStorage.getItem("cooktime") +" minutes";

