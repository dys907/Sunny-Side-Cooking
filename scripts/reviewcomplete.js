showExp();

/**
 * Reads the user experience points of the user from firebase and 
 * calculates the level of the user as well as its experience till the 
 * next level
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
                document.getElementById("exp").innerHTML =  calcExp(rawEXP) + " / 100" ;
                document.getElementById("exp").style.color = "black";
             })
    
    })
}
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
