const search = document.getElementById("anythingSearch");

/**
 * Takes the user to the results page if the enter key is pressed
 * @param event
 *          enter key press 
 */
search.onkeyup = function (event) {
    if (event.keyCode == 13) {
        window.location = "searchresult.html?" + search.value;
    }
}