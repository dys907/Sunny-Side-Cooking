    let queryString = decodeURIComponent(window.location.search);
    let queries = queryString.split("?");
    let id = queries[1];

document.getElementById("submit").onclick = processForm;

function processForm(e) {
    e.preventDefault();

    let effortScore = document.getElementById("effort").value;
    let tasteScore = document.getElementById("taste").value;
    let difficultyScore = document.getElementById("difficulty").value;
    let reviewTitle = document.getElementById("reviewtitle").value;
    let reviewBody = document.getElementById("reviewtext").value;

    if (reviewTitle.length != 0 && reviewBody.length != 0) {
        db.collection("recipe").doc(id).collection("review").add({

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







