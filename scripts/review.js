/**
 * Gets the search result from the main page.
 * @return search result
 */
function idResult() {
    let queryString = decodeURIComponent(window.location.search);
    let queries = queryString.split("?");
    let id = queries[1];
    return id;
}


/**
 * Reads the user experience points of the user from firebase and 
 * calculates the level of the user as well as its experience till the 
 * next level.
 */
function showExp() {
    let rawEXP;
    firebase.auth().onAuthStateChanged(function (user) {
        let dbref = db.collection("users/").doc(user.uid);
        dbref.get()
            .then(snap => {
                rawEXP = snap.data().experience;
                document.getElementById("level").innerHTML = "Current level: " + calcLevel(rawEXP);
                document.getElementById("exp").style = "width: " + calcExp(rawEXP) + "%";
                document.getElementById("exp").innerHTML = calcExp(rawEXP) + " / 100";
                document.getElementById("exp").style.color = "black";
            })

    })
}

showExp();
/**
 * Gets the level of the user.
 * @param exp
 *       raw experience
 * @return level
 */
function calcLevel(exp) {
    let level = Math.floor(exp / 100);
    return level;
}
/**
 * Gets the level of the user.
 * @param exp
 *       raw experience
 * @return experience
 */
function calcExp(exp) {
    let experience = exp % 100;
    return experience;
}

function displayRecipe() {

    db.collection("recipe").doc(idResult())
        .get()
        .then(snap => {
            document.getElementById("recipeName").innerHTML = snap.data().title;
        })
}
displayRecipe();


document.getElementById("submit").onclick = processForm;

function processForm(e) {
    e.preventDefault();

    let effortScore = document.getElementById("effort").value;
    let tasteScore = document.getElementById("taste").value;
    let difficultyScore = document.getElementById("difficulty").value;
    let reviewTitle = document.getElementById("reviewtitle").value;
    let reviewBody = document.getElementById("reviewtext").value;

    if (reviewTitle.length != 0 && reviewBody.length != 0) {
        db.collection("recipe").doc(idResult()).collection("review").add({

            effort: parseInt(effortScore),
            taste: parseInt(tasteScore),
            difficulty: parseInt(difficultyScore),
            reviewheader: parseInt(reviewTitle),
            review: parseInt(reviewBody)

        }).then(function () {
            incrementAmounts();
            window.location.href = "reviewcomplete.html"
        });

    } else {
        alert("Please fill out your review heading and message");
    }


}

function incrementAmounts() {
    firebase.auth().onAuthStateChanged(function (user) {
        let increment = firebase.firestore.FieldValue.increment(10);
        let uploadIncrement = firebase.firestore.FieldValue.increment(1);
        let dbref = db.collection("users/").doc(user.uid);

        dbref.update({
            experience: increment,
            reviews: uploadIncrement
        })
    })
}



