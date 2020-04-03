

userInfo();

/**
 * Reads the data of the logged in user. Sends the user's name, experience, upload count and 
 * review count onto the HTML page. Experience is calculated into levels and remaining
 * experience.
 */
function userInfo() {
   firebase.auth().onAuthStateChanged(function (user) {
      let dbref = db.collection("users/").doc(user.uid);
      document.getElementById("username").innerHTML = user.displayName;
   
      dbref.get()
         .then(snap => {
            let rawEXP = snap.data().experience;
            document.getElementById("level").innerHTML = "Current level: " + calcLevel(rawEXP);
            document.getElementById("exp").style = "width: " + calcExp(rawEXP) + "%";
            document.getElementById("exp").innerHTML =  calcExp(rawEXP) + " / 100" ;
            document.getElementById("exp").style.color = "black";
            document.getElementById("uploaded").innerHTML = "Recipes uploaded: " + snap.data().uploads;
            document.getElementById("reviewed").innerHTML = "Recipes reviewed: " + snap.data().reviews;
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