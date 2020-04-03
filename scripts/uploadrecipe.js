displayAll();
document.getElementById("complete").onclick = processForm;

/**
 * Takes all the local storage values from the previous page 
 * and adds them to the mock recipe page
 */
function displayAll() {
    document.querySelector("#uploadTitle").innerHTML = localStorage.getItem("title");
    document.querySelector("#ing1").innerHTML = localStorage.getItem("ing1");
    document.querySelector("#ing2").innerHTML = localStorage.getItem("ing2");
    document.querySelector("#ing3").innerHTML = localStorage.getItem("ing3");
    document.querySelector("#ing4").innerHTML = localStorage.getItem("ing4");
    document.querySelector("#instruction").innerHTML = localStorage.getItem("instruction");
    document.querySelector("#description").innerHTML = localStorage.getItem("description");
    document.querySelector("#preptime").innerHTML = "Prep Time: " + localStorage.getItem("preptime") + " minutes";
    document.querySelector("#cooktime").innerHTML = "Cook Time: " + localStorage.getItem("cooktime") + " minutes";

}

/**
 * On submission, the user will have 10 points incremented into their experience 
 * field as well as have their upload count into the user firebase. The local storage
 * values used to display the mock recipe will be added into the recipe collection by
 * writing a completely new document with the user inputs.
 * @param {*} e 
 *          event that prevents functionality if not handled
 */
function processForm(e) {
    e.preventDefault();

    incremenetValues();
    addRecipe();  
}


/**
 * On submission, the user will have 10 points incremented into their experience 
 * field as well as have their upload count into the user firebase.
 */
function incrementValues() {
    firebase.auth().onAuthStateChanged(function (user) {
        let increment = firebase.firestore.FieldValue.increment(10);
        let uploadIncrement = firebase.firestore.FieldValue.increment(1);
        let dbref = db.collection("users/").doc(user.uid);

        dbref.update({
            experience: increment,
            uploads: uploadIncrement
        })
    })
}
/**
 * On submission the locally stored values are written to Firebase as a completely new document.
 * All values are in lowercase to specify search queries later on. A try-catch is used incase the 
 * document fails to send and will be console logged for reference. Once successful, the user will
 * be taken to the next page.
 */
function addRecipe() {
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
    }).then(function () {
        console.log("Document successfully written!");
    })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        })
        .then(function () {
            localStorage.clear();
            window.location.href = "uploadcomplete.html"
        });
}