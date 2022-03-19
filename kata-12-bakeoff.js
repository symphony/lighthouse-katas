const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Since we don't need to worry about duplicate ingredients, we can add both bakeries' ingredients to a single list
  const allIngredients = bakeryA.concat(bakeryB);

  // Loop through recipes and read ingredients for each
  for (const recipe of recipes) {
    // check to see if ingredient exists in our bakeries' stock
    const check1 = allIngredients.includes(recipe.ingredients[0]);
    const check2 = allIngredients.includes(recipe.ingredients[1]);
    // we could use a for loop here, but since we know we will only have 2 ingredients an AND condition works
    if (check1 && check2) {
      // we can return the recipe directly if it passes since we know there will always be one correct recipe
      return recipe.name;
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));