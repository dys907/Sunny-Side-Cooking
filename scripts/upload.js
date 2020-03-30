// //holds all the ingredients
//  let ing1 = document.getElementById("ing1");
//  let am1 = document.getElementById("am1");
//  let ingArray = [ing1];
//  let amountArray = [am1];

// //making more ingredient fields
// let ingCounter = 1;
// function ingAdd() {
//     for (let i = 0; i< ingArray.size; i++) {
//       if (ingArray[i].value.length == 0 && amountArray[i].value.length == 0) {
//         break;
//       } 
//       addIngredientTODOM();
//       ingCounter++;

//     }

// }
// function addIngredientTODOM() {
//     //access the div tag holding all ingredients
//     let ingredientsList = document.getElementById("ingredient-area");
//     //1stlayer
//     let formrow = document.createElement("div");
//     formrow.className += ("form-row");
//     //2ndlayer ing
//     let colsm = document.createElement("div");
//     colsm.className += ("form-group col-sm-9");
//     //3rdlayer
//     let ingredient = document.createElement("input");
//     ingredient.className += ("form-control");
//     //2ndlayer amount
//     let colsmA = document.createElement("div");
//     colsmA.className += ("form-group col-sm-3");
//     //3rdlayer 
//     let amount = document.createElement("input");
//     amount.className += ("form-control");

//     ingredient.setAttribute("type", "text");
//     ingredient.setAttribute("placeholder", "Ingredient");
//     amount.setAttribute("type", "text");
//     amount.setAttribute("placeholder", "amount");
//     //appends everything together
//     colsm.appendChild(ingredient);
//     colsmA.appendChild(amount);

//     formrow.appendChild(colsm);
//     formrow.appendChild(colsmA);

//     ingredientsList.appendChild(formrow);

// }
//NOT MVP---------------------------------------------------------------------------
/*
function addIngredientTODOM2() {
    <div class="form-row">
    <div class="form-group col-sm-6">
      <input type="text" class="form-control" id="ing1" placeholder="1">
    </div>
    <div class="form-group col-sm-6">
      <input type="text" class="form-control" id="ing2" placeholder="2">
    </div>
  </div>
}
*/


document.getElementById("submit").onclick = processForm;
function processForm(e) {
    e.preventDefault();
    let title = document.getElementById("uploadTitle").value;
    //NEED THIS PART DYNAMICALLY---------------------------------------
    let ing1 = document.getElementById("ing1").value;
    let ing2 = document.getElementById("ing2").value;
    let ing3 = document.getElementById("ing3").value;
    let ing4 = document.getElementById("ing4").value;
    //NEED THIS PART DYNAMICALLY---------------------------------------
    let instruction = document.getElementById("instruction").value;
    let description = document.getElementById("description").value;
    let preptime = document.getElementById("preptime").value;
    let cooktime = document.getElementById("cooktime").value;

    localStorage.setItem("title", title);
    localStorage.setItem("ing1", ing1);
    localStorage.setItem("ing2", ing2);
    localStorage.setItem("ing3", ing3);
    localStorage.setItem("ing4", ing4);
    localStorage.setItem("instruction", instruction);
    localStorage.setItem("description", description);
    localStorage.setItem("preptime", preptime);
    localStorage.setItem("cooktime", cooktime);   
    window.location.href = "uploadrecipe.html"
    //all passed to uploadrecipe.html    
}

function loadData() {
document.querySelector("#uploadTitle").value = localStorage.getItem("title");
document.querySelector("#ing1").value = localStorage.getItem("ing1");
document.querySelector("#ing2").value = localStorage.getItem("ing2");
document.querySelector("#ing3").value = localStorage.getItem("ing3");
document.querySelector("#ing4").value = localStorage.getItem("ing4");
document.querySelector("#instruction").value = localStorage.getItem("instruction");
document.querySelector("#description").value = localStorage.getItem("description");
document.querySelector("#preptime").value = localStorage.getItem("preptime");
document.querySelector("#cooktime").value = localStorage.getItem("cooktime");

}

loadData();