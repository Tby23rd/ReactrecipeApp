//function for react components
function heading(){
return React.createElement("h1", {id: "recipe-0", name:"level1"}, "Baked Salmon Recipe");
}

function IngredientsList() {

//incredient list
let ingredients = ["1 cup unsalted butter",
					"1 cup crunchy peanut butter",
					"1 cup brown sugar",
					"1 cup white sugar",
					"2 eggs",
					"2.5 cups all purpose flour",
					"1 teaspoon baking powder",
					"0.5 teaspoon salt"
					];
					
return React.createElement(

/*
"ul",
{className: "ingredients" },
React.createElement("li", null, "1 cup unsalted butter"),
React.createElement("li", null, "1 cup crunchy peanut butter"),
React.createElement("li", null, "1 cup brown sugar"),
React.createElement("li", null, "1 cup white sugar"),
React.createElement("li", null, "2 eggs"),
React.createElement("li", null, "2.5 cups all purpose flour"),
React.createElement("li", null, "1 teaspoon baking powder"),
React.createElement("li", null, "0.5 teaspoon salt") */

//map the ingredients to the list
"ul",
{className: "ingredients" },
ingredients.map((ingredient,i) => React.createElement("li", {id:i}, ingredient))
);
}

//render the component
ReactDOM.render(
React.createElement(heading, null, null),
document.getElementById("root")
);

//render the component
ReactDOM.render(
React.createElement(IngredientsList,null, null),
document.getElementById("ingredient")
);

