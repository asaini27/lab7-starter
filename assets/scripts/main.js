// main.js

// Run the init() function when the page has loaded
window.addEventListener("DOMContentLoaded", init);

// Starts the program, all function calls trace back here
function init() {
	// Get the recipes from localStorage
	let recipes = getRecipesFromStorage();
	// Add each recipe to the <main> element
	addRecipesToDocument(recipes);
	// Add the event listeners to the form elements
	initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
	// A9. TODO - Complete the functionality as described in this function
	//           header. It is possible in only a single line, but should
	//           be no more than a few lines.
	let recipes = localStorage.getItem('recipes');
	let recipeArray = JSON.parse(recipes);
	return recipeArray;
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
	// A10. TODO - Get a reference to the <main> element=
	let mainElement = document.querySelector('main');
	// A11. TODO - Loop through each of the recipes in the passed in array,
	//            create a <recipe-card> element for each one, and populate
	//            each <recipe-card> with that recipe data using element.data = ...
	//            Append each element to <main>
	for(let recipe of recipes) {
		
		let recipeCard = document.createElement('recipe-card');
		recipeCard.data = recipe;
		mainElement.append(recipeCard);
	}

}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
	// EXPLORE - START (All explore numbers start with B)
	// B1. TODO - Complete the functionality as described in this function
	//            header. It is possible in only a single line, but should
	//            be no more than a few lines.
	let stored = JSON.stringify(recipes);
	localStorage.setItem('recipes',stored);
}

/**
 * Adds the necessary event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {
	//B3
	let form = document.querySelector('form');
	//B2 and 3
	form.addEventListener('submit', function(event) {
	  event.preventDefault();
	 //B4
	  let formData = new FormData(form);
	   //B5
	  let recipeObject = {};
	  //B6
	  formData.forEach((value, key) => {
		recipeObject[key] = value;
	  });
	 
	  let recipeData = document.createElement('recipe-card');
	   //B7
	  recipeData.data = recipeObject;
	  //B8
	  let mainElement = document.querySelector('main');
	  mainElement.append(recipeData);
	  //B9
	  let recipes = getRecipesFromStorage();
	  recipes.push(recipeObject);
	  saveRecipesToStorage(recipes);
	});
  
	let clearButton = document.querySelector('.danger');
	clearButton.addEventListener('click', function() {
	  localStorage.clear();
	  let mainElement = document.querySelector('main');
	  mainElement.innerHTML = '';
	});
	// Steps B4-B9 will occur inside the event listener from step B3
	// B4. TODO - Create a new FormData object from the <form> element reference above

	// B5. TODO - Create an empty object (we'll refer to this object as recipeObject to
	//            make this easier to read), and then extract the keys and corresponding
	//            values from the FormData object and insert them into recipeObject
	// B6. TODO - Create a new <recipe-card> element
	// B7. TODO - Add the recipeObject data to <recipe-card> using element.data
	// B8. TODO - Append this new <recipe-card> to <main>
	// B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
	//            then save the recipes array back to localStorage
	// B10. TODO - Get a reference to the "Clear Local Storage" button
	// B11. TODO - Add a click event listener to clear local storage button
	// Steps B12 & B13 will occur inside the event listener from step B11
	// B12. TODO - Clear the local storage
	// B13. TODO - Delete the contents of <main>
	

	// B10 - 13
	let submitButton = document.querySelector('.danger');
	submitButton.addEventListener('click' , function () {
		let mainElement = document.querySelector('main');
		mainElement.innerHTML = "";
		localStorage.clear();
	});
	
}
