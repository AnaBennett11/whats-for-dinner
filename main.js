//query selector variables go here

var letsCookButton = document.querySelector('button')
var cookPot = document.querySelector('.stockpot')
var youShouldMake = document.querySelector('.sentence')
var random = document.querySelector('.random')




//data to work with
var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"];

var main = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"];

var desserts =[
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"];



//event listeners go here
letsCookButton.addEventListener("click", randomizeDish);




//functions go here

//When the user selects the “Entire Meal” option
//1. add a querySelector
//2. add an EventListener
//and then clicks the “Let’s Cook!” button, the user
//sees a message with a side, main and dessert option
//from the lists of possible dishes for all categories
//
//When the meal items appear, the cookpot icon disappears



function getRandomDish(array) {
  return array[Math.floor(Math.random() * array.length)];
};


function randomizeDish() {

  if(document.getElementById("side").checked){
    presentDish(getRandomDish(sides));
  }else if(document.getElementById("main dish").checked){
    presentDish(getRandomDish(main));
  }else if(document.getElementById("dessert").checked){
    presentDish(getRandomDish(desserts));
 }else if(document.getElementById("entire meal").checked){
   presentDish(getRandomMeal(sides, main, desserts));
 }
}

function presentDish(food){
cookPot.classList.add("hidden")
youShouldMake.classList.remove("hidden")
random.innerText = food

}

function getRandomMeal(sides, main, desserts){
  var theSide = getRandomDish(sides);
  var theMain = getRandomDish(main);
  var theDessert = getRandomDish(desserts);

return theMain + " with a side of " + theSide + " and " + theDessert + " for dessert! ";
}
