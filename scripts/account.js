let exp;

firebase.auth().onAuthStateChanged(function (user) {
    let dbref = db.collection("users/").doc(user.uid);
    document.getElementById("username").innerHTML = user.displayName;
    dbref.get()
         .then(snap => {
            rawEXP = snap.data().experience;
            let level = Math.floor(rawEXP / 100);
            exp = rawEXP % 100;

            document.getElementById("level").innerHTML = "Current level: " + level;
            document.getElementById("exp").style = "width: " + exp + "%";
            document.getElementById("uploaded").innerHTML = "Recipes uploaded: " +  snap.data().uploads;
            document.getElementById("reviewed").innerHTML = "Recipes reviewed: " +  snap.data().reviews;
         })

})
