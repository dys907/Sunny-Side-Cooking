let queryString = decodeURIComponent(window.location.search);
let queries = queryString.split("?");
let id = queries[1];
function displayRecipe() {

    db.collection("recipe").doc(id)
        .get()
        .then(snap => {
            document.getElementById("uploadTitle").innerHTML = snap.data().title;
            document.getElementById("ing1").innerHTML = snap.data().ing1;
            document.getElementById("ing2").innerHTML = snap.data().ing2;
            document.getElementById("ing3").innerHTML = snap.data().ing3;
            document.getElementById("ing4").innerHTML = snap.data().ing4;
            document.getElementById("prep").innerHTML = "Preparation Time: " + snap.data().preptime + " minutes";
            document.getElementById("cook").innerHTML = "Cook Time: " + snap.data().cooktime + " minutes";
            document.getElementById("description").innerHTML = snap.data().description;
            document.getElementById("instructions").innerHTML = snap.data().instructions;


        })
}
displayRecipe();

document.getElementById("submit").onclick = processForm;
 //takes us to the review page
function processForm(e) {
    e.preventDefault();

    window.location.href = "review.html?" + id;
}