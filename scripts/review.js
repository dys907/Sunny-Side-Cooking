


// console.log(typeof(effortScore));
// Update the current slider value (each time you drag the slider handle)
// reviewTitle.oninput = function() {

//     reviewTitleValue= this.value;
// }

// reviewBody.oninput = function() {

//     reviewBodyValue= this.value;
//  }
//  sug.oninput = function() {

//     sugValue= this.value;
//  }
// effort.oninput = function() {

//    effortScore= this.value;
// }
// taste.oninput = function() {
//     tasteScore= this.value;
//  }
// difficulty.oninput = function() {
//     difficultyScore= this.value;
//  } 


document.getElementById("submit").onclick = processForm;

function processForm(e) {
    e.preventDefault();

    let effortScore = document.getElementById("effort").value;
    let tasteScore = document.getElementById("taste").value;
    let difficultyScore = document.getElementById("difficulty").value;
    let reviewTitle = document.getElementById("reviewtitle").value;
    let reviewBody = document.getElementById("reviewtext").value;

    if (reviewTitle.length != 0 && reviewBody.length != 0) {
        db.collection("recipe").doc("01/").collection("review").add({

            effort: effortScore,
            taste: tasteScore,
            difficulty: difficultyScore,
            reviewheader: reviewTitle,
            review: reviewBody
    
        }).then(function() {
            window.location.href = "reviewcomplete.html"
    
        });
    

    } else {
        alert("Please fill out your review heading and message");
    }
    

}

function addEffort() {
    if (effortScore != undefined) {
        
            effort: effortScore

        
    }
}

function addTaste() {
    if (tasteScore != undefined) {

            taste: tasteScore


    }
}

function addDifficulty() {
    if (difficultyScore != undefined) {
        db.collection("recipe").doc("01/").collection("review").add({
            difficulty: difficultyScore

        })
    }
}