const recipes = db.collection("recipe");

printResult();

/**
 * Generates card with the searched results using an asynchronous callback.
 * @param results 
 *          the results of the search query
 */
getAllRecipesWithIng().then(result => {
    displayCards(result);
});


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

/**
 * Prints the search result to the html page 
 */
function printResult() {
    document.getElementById("searchTitle").innerHTML = "Searching for: " + searchResult();
}

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
/**
 * Generates 4 cards with the search results 
 */ 
function displayCards(CardObjects, numCards) {
    CardObjects.forEach(function (doc) {
            createOneCard(doc);

        })

}
/**Creates dynamic bootstrap cards based on the number of query matches in the 
 * @param c 
 *      reads the selected doc files found in the search.
 */
function createOneCard(c) { 

    let coldiv = document.createElement("div");
    coldiv.setAttribute("class", "col-md-3");
    let carddiv = document.createElement("div");
    carddiv.setAttribute("class", "card");
    let img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", "images/logo_nobg_small.png");
    let cardbodydiv = document.createElement("div");
    cardbodydiv.setAttribute("class", "card-body");
    let h4 = document.createElement("h4");
    h4.setAttribute("class", "card-title");
    let text = document.createTextNode(c.data().title);
    h4.appendChild(text);
    let p = document.createElement("p");
    p.setAttribute("class", "card-text");
    let text = document.createTextNode(c.data().description);
    p.appendChild(text);
    let a = document.createElement("a");
    a.setAttribute("href","recipe.html?" + c.id);
    a.setAttribute("class", "btn btn-outline-warning");
    let text = document.createTextNode("View Recipe");
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