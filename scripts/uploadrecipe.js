document.querySelector("#uploadTitle").innerHTML = localStorage.getItem("title");
document.querySelector("#ing1").innerHTML = localStorage.getItem("ing1");
document.querySelector("#ing2").innerHTML = localStorage.getItem("ing2");
document.querySelector("#ing3").innerHTML = localStorage.getItem("ing3");
document.querySelector("#ing4").innerHTML = localStorage.getItem("ing4");
document.querySelector("#instruction").innerHTML = localStorage.getItem("instruction");
document.querySelector("#description").innerHTML = localStorage.getItem("description");
document.querySelector("#prep").innerHTML = "Prep Time: " + localStorage.getItem("preptime") +" minutes";
document.querySelector("#cook").innerHTML = "Cook Time: " + localStorage.getItem("cooktime") +" minutes";

document.getElementById("complete").onclick = processForm;
function processForm(e) {
    e.preventDefault();
    
firebase.auth().onAuthStateChanged(function (user) {
    let increment = firebase.firestore.FieldValue.increment(10);
    let dbref = db.collection("users/").doc(user.uid);

    dbref.update({
        experience: increment
    })
})

    db.collection("Recipe").add({
        title: localStorage.getItem("title"),
        ingredients: [localStorage.getItem("ing1"),
        localStorage.getItem("ing2"),
        localStorage.getItem("ing3"),
        localStorage.getItem("ing4")],
        instructions: localStorage.getItem("instruction"),
        description: localStorage.getItem("description"),
        preptime: localStorage.getItem("preptime"),
        cooktime: localStorage.getItem("cooktime")
    })
    .then(function() {
        localStorage.clear();
        window.location.href = "uploadcomplete.html"

    });

   
    //all passed to uploadrecipe.html    
}
