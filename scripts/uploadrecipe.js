//local storage to bring information from previous page to make mock recipe page:
function displayAll() {
    document.querySelector("#uploadTitle").innerHTML = localStorage.getItem("title");
    document.querySelector("#ing1").innerHTML = localStorage.getItem("ing1");
    document.querySelector("#ing2").innerHTML = localStorage.getItem("ing2");
    document.querySelector("#ing3").innerHTML = localStorage.getItem("ing3");
    document.querySelector("#ing4").innerHTML = localStorage.getItem("ing4");
    document.querySelector("#instruction").innerHTML = localStorage.getItem("instruction");
    document.querySelector("#description").innerHTML = localStorage.getItem("description");
    document.querySelector("#preptime").innerHTML = "Prep Time: " + localStorage.getItem("preptime") +" minutes";
    document.querySelector("#cooktime").innerHTML = "Cook Time: " + localStorage.getItem("cooktime") +" minutes";

}
displayAll();
//submit button taking all information to the database
document.getElementById("complete").onclick = processForm;
function processForm(e) {
    e.preventDefault();
    
firebase.auth().onAuthStateChanged(function (user) {
    let increment = firebase.firestore.FieldValue.increment(10);
    let uploadIncrement = firebase.firestore.FieldValue.increment(1);
    let dbref = db.collection("users/").doc(user.uid);

    dbref.update({
        experience: increment,
        uploads: uploadIncrement
    })
})

    db.collection("recipe").add({
        title: localStorage.getItem("title"),
        ing1: localStorage.getItem("ing1").toLowerCase(),
        ing2: localStorage.getItem("ing2").toLowerCase(),
        ing3: localStorage.getItem("ing3").toLowerCase(),
        ing4: localStorage.getItem("ing4").toLowerCase(),
        instructions: localStorage.getItem("instruction"),
        description: localStorage.getItem("description"),
        preptime: localStorage.getItem("preptime"),
        cooktime: localStorage.getItem("cooktime")
    }).then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    })
    .then(function() {
        localStorage.clear();
        window.location.href = "uploadcomplete.html"

    });

   
    //all passed to uploadrecipe.html    
}
