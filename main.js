const recipes = [
  {
    author: "AllRecipes",
    url: "https://www.allrecipes.com/recipe/12409/apple-crisp-ii/",
    isBasedOn: "",
    cookTime: "45min",
    datePublished: "2023-10-10",
    tags: ["dessert"],
    description:
      "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
    image: "./images/apple-crisp.jpg",
    recipeIngredient: [
      "10 C apples, cored and sliced",
      "1 C white sugar",
      "1 Tbsp white flour",
      "1 tsp ground cinnamon",
      "3 Tbsp water",
      "1 C rolled oats",
      "1 C Flour",
      "1 C Brown sugar",
      "1/4 tsp baking powder",
      "1/4 tsp baking soda",
      "1/2 C butter, melted",
    ],
    name: "Apple Crisp",
    prepTime: "30 min",
    recipeInstructions: [
      "Preheat the oven to 350 degrees F (175 degrees C).",
      "Place sliced apples in a 9x13-inch baking dish. Mix white sugar, 1 tablespoon flour, and cinnamon together; sprinkle over apples. Pour water evenly over apples.",
      "Combine oats, 1 cup flour, brown sugar, baking powder, and baking soda in a large bowl. Add melted butter and mix with a fork until crumbly; sprinkle evenly over apple mixture.",
      "Bake in the preheated oven until top is golden brown and apples are bubbling around the edges, about 45 minutes.",
    ],
    recipeYield: "12 servings",
    rating: 4,
  },
];

const recipesSection = document.getElementById("#recipes");

recipes.forEach((item) => {
  const recipeContainer = document.createElement("div");
  recipeContainer.id = "recipeContainer";

  const tags = document.createElement("div");

  item.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    tagElement.className = "tag";
    tags.appendChild(tagElement);
  });

  const name = document.createElement("h3");
  const rating = document.createElement("div");
  rating.innerHTML = `<span
	class="rating"
	role="img"
	aria-label="Rating: 4 out of 5 stars"
>
	<span aria-hidden="true" class="icon-star">⭐</span>
	<span aria-hidden="true" class="icon-star">⭐</span>
	<span aria-hidden="true" class="icon-star">⭐</span>
	<span aria-hidden="true" class="icon-star-empty">⭐</span>
	<span aria-hidden="true" class="icon-star-empty">☆</span>
</span>`;

  const desc = document.createElement("h3");
  const img = document.createElement("img");

  name.textContent = item.name;
  rating.textContent = item.rating;
  desc.textContent = item.description;

  img.src = item.imgSrc;
  img.alt = item.imgAlt;

  recipesSection.appendChild(recipeContainer);
  recipeContainer.appendChild(tags);
  recipeContainer.appendChild(name);
  recipeContainer.appendChild(rating);
  recipeContainer.appendChild(desc);
  recipeContainer.appendChild(img);

  books.appendChild(bookContainer);
});
