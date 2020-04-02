let rawEXP;
firebase.auth().onAuthStateChanged(function (user) {
    let dbref = db.collection("users/").doc(user.uid);
    dbref.get()
         .then(snap => {
            rawEXP = snap.data().experience;
            let level = Math.floor(rawEXP / 100);
            exp = rawEXP % 100;

            document.getElementById("level").innerHTML = "Current level: " + level;
            document.getElementById("exp").style = "width: " + exp + "%";
         })

})

