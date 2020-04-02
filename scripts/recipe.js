
/**
 * Stores the research results.
 * @return the id of the search result
*/
function queryResult() {
    let queryString = decodeURIComponent(window.location.search);
    let queries = queryString.split("?");
    let id = queries[1];
    return id;
}


/**Reads the recipe information from firebase and displays all relevant elements in the HTML*/
function displayRecipe() {
    db.collection("recipe").doc(queryResult())
        .get()
        .then(snap => {
            document.getElementById("uploadTitle").innerHTML = snap.data().title;
            document.getElementById("ing1").innerHTML = snap.data().ing1;
            document.getElementById("ing2").innerHTML = snap.data().ing2;
            document.getElementById("ing3").innerHTML = snap.data().ing3;
            document.getElementById("ing4").innerHTML = snap.data().ing4;
            document.getElementById("preptime").innerHTML = "Prep Time: " + snap.data().preptime + " minutes";
            document.getElementById("cooktime").innerHTML = "Cook Time: " + snap.data().cooktime + " minutes";
            document.getElementById("description").innerHTML = snap.data().description;
            document.getElementById("instructions").innerHTML = snap.data().instructions;


        })
}
displayRecipe();

 //takes us to the review page
document.getElementById("submit").onclick = processForm;
function processForm(e) {
    e.preventDefault();

    window.location.href = "review.html?" + queryResult();
}

db.collection("recipe").doc(queryResult()).collection("review")