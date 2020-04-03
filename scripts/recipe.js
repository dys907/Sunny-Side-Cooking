const reviews = db.collection("recipe").doc(queryResult()).collection("review");
const tastes = document.getElementById("taste");
const efforts = document.getElementById("effort");
const difficulties = document.getElementById("difficulty");


displayRecipe();
averageDifficulty();
averageEffort();
averageTaste();

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

/**
 * Redirect to the review page which the query result attachs to the url on redirect.
 */
document.getElementById("submit").onclick = processForm;
function processForm(e) {
    e.preventDefault();
    window.location.href = "review.html?" + queryResult();
}

/** 
 * Reads all the taste ratings using a promise then stores all snapshots of the scores in an array
 * @return array with all the read taste ratings
 */
async function getAllTastes() {
    const tasteScore = reviews.where("taste", ">=", 0).get();
    const [tasteQuerySnapshot] = await Promise.all([
        tasteScore
    ]);
    let tasteArray = tasteQuerySnapshot.docs;
    return tasteArray;
}

/**
 * Reads associated values from firebase. Sums up the average taste of the recipe using a for each of all 
 * elements in the array.
 */
function averageTaste() {
    let sum = 0;
    let counter = 0;
    getAllTastes().then(result => {
        result.forEach(docSnapshot => {
            sum += docSnapshot.data().taste;
            counter++
        });
        if (counter == 0) {
            counter = 1;
        }
        average = sum / counter;
        tastes.style = "width: " + ((average) / 4 * 100) + "%";
        tasteColour(average);
    });
}

/** 
 * Reads all the effort ratings using a promise then stores all snapshots of the scores in an array
 * @return array with all the read effort ratings
 */
async function getAllEffort() {
    const effortScore = reviews.where("effort", ">=", 0).get();
    const [effortQuerySnapshot] = await Promise.all([
        effortScore
    ]);
    let effortArray = effortQuerySnapshot.docs;
    return effortArray;
}

/**
 * Reads associated values from firebase. Sums up the average effort of the recipe using a for each of all 
 * elements in the array.
 */
function averageEffort() {
    let sum = 0;
    let counter = 0;
    getAllEffort().then(result => {
        result.forEach(docSnapshot => {
            sum += docSnapshot.data().effort;
            counter++
        });
        if (counter == 0) {
            counter = 1;
        }
        average = sum / counter;
        efforts.style = "width: " + ((average) / 4 * 100) + "%";
        effortColour(average);
    });
}
/** 
 * Reads all the difficulty ratings using a promise then stores all snapshots of the scores in an array
 * @return array with all the read difficulty ratings
 */
async function getAllDifficulty() {
    const difficultyScore = reviews.where("difficulty", ">=", 0).get();
    const [difficultyQuerySnapshot] = await Promise.all([
        difficultyScore
    ]);
    let difficultyArray = difficultyQuerySnapshot.docs;
    return difficultyArray;
}

/**
 * Sums up the average difficulty of the recipe
 */
function averageDifficulty() {
    let sum = 0;
    let counter = 0;
    let average = 0;
    getAllDifficulty().then(result => {
        result.forEach(docSnapshot => {
            sum += docSnapshot.data().difficulty;
            counter++
        });
        if (counter == 0) {
            counter = 1;
        }
        average = sum / counter;
        difficulties.style = "width: " + ((average) / 4 * 100) + "%";
        difficultyColour(average);
    });

}

/**
 * Changes the color of the taste review bar depending on the rating of the item 
 * @param num 
 *          the value assosiated to the average rating.
 */
function tasteColour(num) {
    if (num < 1.5) {
        tastes.className = "progress-bar bg-danger"
    } else if (num > 3) {
        tastes.className = "progress-bar bg-success"
    }
}

/**
 * Changes the color of the effort review bar depending on the rating of the item 
 * @param num 
 *          the value assosiated to the average rating.
 */
function effortColour(num) {
    if (num < 1.5) {
        efforts.className = "progress-bar bg-danger"
    } else if (num > 3) {
        efforts.className = "progress-bar bg-success"
    }
}

/**
 * Changes the color of the difficulty review bar depending on the rating of the item 
 * @param num 
 *          the value assosiated to the average rating.
 */
function difficultyColour(num) {
    if (num < 1.5) {
        difficulties.className = "progress-bar bg-danger"
    } else if (num > 3) {
        difficulties.className = "progress-bar bg-success"
    }
}