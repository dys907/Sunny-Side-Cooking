let search = document.getElementById("anythingSearch");
search.onkeyup = function (event) {

    if (event.keyCode == 13) {
        window.location = "searchresult.html?" + search.value;
    }
}