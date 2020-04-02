const recipes = db.collection("recipe");

/**
 * Gets the search result from the main page.
 * @return search result
 */
function searchResult() {
    let queryString = decodeURIComponent(window.location.search);
    let queries = queryString.split("?");
    let search = queries[1].toLowerCase();
    return search;
}

/**Prints the search result to the html page */
function printResult() {
    document.getElementById("searchTitle").innerHTML = "Searching for: " + searchResult();
}
printResult();

/**
 * Searches for the query request amoung the 4 ingredients in the 
 * database then returns an array holding all the recipes with
 * the recipe.
 * @return array recipe with all search results
 */
async function getAllRecipesWithIng() {
    const ing1 = recipes.where("ing1", "==", searchResult()).get();
    const ing2 = recipes.where("ing2", "==", searchResult()).get();
    const ing3 = recipes.where("ing3", "==", searchResult()).get();
    const ing4 = recipes.where("ing4", "==", searchResult()).get();

    const [ing1QuerySnapshot, ing2QuerySnapshot, ing3QuerySnapshot, ing4QuerySnapshot] = await Promise.all([
        ing1,
        ing2,
        ing3,
        ing4
    ]);

    const ing1Array = ing1QuerySnapshot.docs;
    const ing2Array = ing2QuerySnapshot.docs;
    const ing3Array = ing3QuerySnapshot.docs;
    const ing4Array = ing4QuerySnapshot.docs;
    let recipeArray = ing1Array.concat(ing2Array, ing3Array, ing4Array);

    return recipeArray;

}
/**Generates card with the searched results*/
getAllRecipesWithIng().then(result => {
        displayCards(result);
        displayRecipe(docSnapshot.data(), docSnapshot.id);
});


/**Generates 4 cards with the search results */ 
function displayCards(CardObjects, numCards) {
    CardObjects.forEach(function (doc) {
            createOneCard(doc);

        })

}
/**Creates dynamic bootstrap cards */
function createOneCard(c) { 

    var coldiv = document.createElement("div");
    coldiv.setAttribute("class", "col-md-3");
    var carddiv = document.createElement("div");
    carddiv.setAttribute("class", "card");
    var img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", "images/logo_nobg_small.png");
    var cardbodydiv = document.createElement("div");
    cardbodydiv.setAttribute("class", "card-body");
    var h4 = document.createElement("h4");
    h4.setAttribute("class", "card-title");
    var text = document.createTextNode(c.data().title);
    h4.appendChild(text);
    var p = document.createElement("p");
    p.setAttribute("class", "card-text");
    var text = document.createTextNode(c.data().description);
    p.appendChild(text);
    var a = document.createElement("a");
    a.setAttribute("href","recipe.html?" + c.id);
    a.setAttribute("class", "btn btn-outline-secondary");
    var text = document.createTextNode("View Recipe");
    a.appendChild(text);
    cardbodydiv.appendChild(h4);
    cardbodydiv.appendChild(p);
    cardbodydiv.appendChild(a);
    img.appendChild(cardbodydiv);
    carddiv.appendChild(img);
    carddiv.appendChild(cardbodydiv);
    coldiv.appendChild(carddiv);
    document.getElementById("cards").appendChild(coldiv);
}