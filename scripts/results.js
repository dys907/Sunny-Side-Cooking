let queryString = decodeURIComponent(window.location.search);
let queries = queryString.split("?");
let search = queries[1].toLowerCase();
console.log(search);
const recipes = db.collection("recipe");
let recipeArray;
let counter = 1;
async function getAllRecipesWithIng() {
    const ing1 = recipes.where("ing1", "==", search).get();
    const ing2 = recipes.where("ing2", "==", search).get();
    const ing3 = recipes.where("ing3", "==", search).get();
    const ing4 = recipes.where("ing4", "==", search).get();

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
    recipeArray = ing1Array.concat(ing2Array, ing3Array, ing4Array);

    return recipeArray;

}
//generate cards
getAllRecipesWithIng().then(result => {
    result.forEach(docSnapshot => {
        //createCard();
        console.log(docSnapshot.data());
        counter++;
    });
});
//creates a card for each search result
function createCard() {
    searchContainer = document.getElementById("searchContainer");
    card = document.createElement("div");
    card.className += ("col-md-3 card");
    searchContainer.appendChild(card);
    cardImg = document.createElement("img");
    cardImg.className += ("card-img-top");
    cardImg.src = "images/ChickenBroccoli.jpg"
    card.appendChild(cardImg);
    cardBody = document.createElement("div");
    cardBody.className += ("card-body");
    card.appendChild(cardBody);
    recipeTitle = document.createElement("h4");
    recipeTitle.className += ("card-title");
    recipeTitle.id = "title" + counter;
    cardBody.appendChild(recipleTitle);
    recDesc = document.getElementById("p");
    recDesc.className += ("card-text");
    recDesc.id = "desc" + counter;
    cardBody.appendChild(recDesc);
    submit = document.getElementById("a");
    submit.className += ("btn btn-outline-secondary");
    submit.innerHTML = "View Recipe";
    submit.href = "recipe.html";
    cardBody.appendChild(submit);


    


}
