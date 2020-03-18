document.getElementById("submit").onclick = processForm;
function processForm(e) {
    e.preventDefault();
    let title = document.getElementById("uploadTitle").value;

    let ing1 = document.getElementById("ing1").value;
    let ing2 = document.getElementById("ing2").value;
    let ing3 = document.getElementById("ing3").value;
    let ing4 = document.getElementById("ing4").value;
    let instruction = document.getElementById("instruction").value;
    let description = document.getElementById("description").value;
    let preptime = document.getElementById("preptime").value;
    let cooktime = document.getElementById("cooktime").value;
    localStorage.setItem("title", title);
    localStorage.setItem("ing1", ing1);
    localStorage.setItem("ing2", ing2);
    localStorage.setItem("ing3", ing3);
    localStorage.setItem("ing4", ing4);
    localStorage.setItem("instruction", instruction);
    localStorage.setItem("description", description);
    localStorage.setItem("preptime", preptime);
    localStorage.setItem("cooktime", cooktime);   
    window.location.href = "uploadrecipe.html"
    //all passed to uploadrecipe.html    
}

function loadData() {
document.querySelector("#uploadTitle").value = localStorage.getItem("title");
document.querySelector("#ing1").value = localStorage.getItem("ing1");
document.querySelector("#ing2").value = localStorage.getItem("ing2");
document.querySelector("#ing3").value = localStorage.getItem("ing3");
document.querySelector("#ing4").value = localStorage.getItem("ing4");
document.querySelector("#instruction").value = localStorage.getItem("instruction");
document.querySelector("#description").value = localStorage.getItem("description");
document.querySelector("#prep").value = localStorage.getItem("preptime");
document.querySelector("#cook").value = localStorage.getItem("cooktime");

}

loadData();