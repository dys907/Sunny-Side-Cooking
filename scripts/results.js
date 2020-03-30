let queryString = decodeURIComponent(window.location.search);
let queries = queryString.split("?");
let search = queries[1].toLowerCase();
console.log(search);
const recipes = db.collection("recipe");
let recipeArray;
function getAllRecipesWithIng() {
    const ing1 = recipes.where("ing1", "==", search).get();
    const ing2 = recipes.where("ing2", "==", search).get();
    const ing3 = recipes.where("ing3", "==", search).get();
    const ing4 = recipes.where("ing4", "==", search).get();

    const [ing1QuerySnapshot, ing2QuerySnapshot, ing3QuerySnapshot, ing4QuerySnapshot] =Promise.all([
        ing1,
        ing2,
        ing3,
        ing4
    ]).then(() => {


    })
    
    // const ing1Array = ing1QuerySnapshot.docs;
    // const ing2Array = ing2QuerySnapshot.docs;
    // const ing3Array = ing3QuerySnapshot.docs;
    // const ing4Array = ing4QuerySnapshot.docs;
    // recipeArray = ing1Array.concat(ing2Array, ing3Array, ing4Array);

    // return recipeArray;

 }

//generate cards
// getAllRecipesWithIng().then(result => {
//     result.forEach(docSnapshot => {
        
//         console.log(docSnapshot.data());
//     });
// });

function createCard() {
    searchContainer = document.getElementById("searchContainer");
}