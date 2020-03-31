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
        displayCards(docSnapshot.data());
        //displayRecipe(docSnapshot.data(), docSnapshot.id);

    });
});

// function displayRecipe(recipe, id) {
//     searchField = document.getElementById("searchContainer");
//     var n = recipe.title;
//     console.log(n);
//     var para = document.createElement("div");
//     para.setAttribute("id", id);
//     searchField.appendChild(para);
//     var node = document.createTextNode(n);
//     para.appendChild(node);
//     $("#" + id).click(function () {
//         window.location.href = "recipe.html?" + id;

//     })
// }
//creates a card for each search result
// function createCard() {
//     searchContainer = document.getElementById("searchContainer");
//     card = document.createElement("div");
//     card.className += ("col-md-3 card");
//     searchContainer.appendChild(card);
//     cardImg = document.createElement("img");
//     cardImg.className += ("card-img-top");
//     cardImg.src = "images/ChickenBroccoli.jpg"
//     card.appendChild(cardImg);
//     cardBody = document.createElement("div");
//     cardBody.className += ("card-body");
//     card.appendChild(cardBody);
//     recipeTitle = document.createElement("h4");
//     recipeTitle.className += ("card-title");
//     recipeTitle.id = "title" + counter;
//     cardBody.appendChild(recipleTitle);
//     recDesc = document.getElementById("p");
//     recDesc.className += ("card-text");
//     recDesc.id = "desc" + counter;
//     cardBody.appendChild(recDesc);
//     submit = document.getElementById("a");
//     submit.className += ("btn btn-outline-secondary");
//     submit.innerHTML = "View Recipe";
//     submit.href = "recipe.html";
//     cardBody.appendChild(submit);
// }
      // let's say we have 4 columns

      function displayCards(CardObjects) {

        CardObjects.forEach(function (doc) {

                createOneCard(doc);

            })

    }

    function createOneCard(c) { //pass in one document object

        var coldiv = document.createElement("div");

        coldiv.setAttribute("class", "col-md-3");



        var carddiv = document.createElement("div");

        carddiv.setAttribute("class", "card");



        var img = document.createElement("img");

        img.setAttribute("class", "card-img-top");

        img.setAttribute("src", "food.jpg");



        var cardbodydiv = document.createElement("div");

        cardbodydiv.setAttribute("class", "card-body");



        var h4 = document.createElement("h4");

        h4.setAttribute("class", "card-title");

        var text = document.createTextNode(c.data().name);

        h4.appendChild(text);



        var p = document.createElement("p");

        p.setAttribute("class", "card-text");

        var text = document.createTextNode(c.data().description);

        p.appendChild(text);



        var a = document.createElement("a");

        a.setAttribute("href", c.data().id + ".html");

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
