import { recipes } from "./recipes.mjs";

// Taken from ChatGPT
function getFont(fontName) {
  const link = document.createElement("link");
  link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(
    / /g,
    "+"
  )}&display=swap`;
  link.rel = "stylesheet";
  document.head.appendChild(link);
}
getFont("Pacifico");

function getRandom(num) {
  return Math.floor(Math.random() * num);
}

function getRandomEntry() {
  const random = getRandom(recipes.length);
  return recipes[random];
}

function filterRecipes(query) {
  return recipes.filter((recipe) => {
    const name = recipe.name.toLowerCase();
    const desc = recipe.description.toLowerCase();
    return name.includes(query) || desc.includes(query);
  });
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }
  html += `</span>`;
  return html;
}

function showNoResults() {
  const noResultsMessage = document.getElementById("noResults");
  if (noResultsMessage) {
    noResultsMessage.classList.remove("hidden");
  }
}

function hideNoResults() {
  const noResultsMessage = document.getElementById("noResults");
  if (noResultsMessage) {
    noResultsMessage.classList.add("hidden");
  }
}

function renderRecipe(item) {
  const recipesSection = document.getElementById("recipes");

  const recipeContainer = document.createElement("div");
  recipeContainer.classList.add("recipe");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");

  const tagsContainer = document.createElement("div");
  tagsContainer.classList.add("tagsContainer");

  item.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    tagElement.className = "tag";
    tagsContainer.appendChild(tagElement);
  });

  const name = document.createElement("h2");
  name.textContent = item.name;
  name.style.color = "blue";
  name.style.fontFamily = "'Pacifico', cursive";

  const rating = document.createElement("p");
  rating.className = "recipe__ratings";
  rating.innerHTML = ratingTemplate(item.rating);

  const desc = document.createElement("p");
  desc.className = "recipe__description";
  desc.textContent = item.description;

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = `Image of ${item.name}`;
  img.style.width = "400px";
  img.style.height = "auto";
  img.style.margin = "0 10px";
  img.style.borderRadius = "10px";
  img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";

  recipeContainer.appendChild(tagsContainer);
  recipeContainer.appendChild(name);
  recipeContainer.appendChild(rating);
  recipeContainer.appendChild(desc);

  imgContainer.appendChild(img);

  recipesSection.appendChild(recipeContainer);
  recipesSection.appendChild(imgContainer);
}

function init(query) {
  const selectedRecipes = filterRecipes(query);
  console.log(selectedRecipes);
  const sortedRecipes = selectedRecipes.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const recipesSection = document.getElementById("recipes");
  recipesSection.innerHTML = ""; // Clear the recipes section

  if (sortedRecipes.length > 0) {
    hideNoResults();
    sortedRecipes.forEach(function (recipe) {
      renderRecipe(recipe);
    });
  } else {
    showNoResults();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderRecipe(getRandomEntry());

  document.getElementById("searchButton").addEventListener("click", (event) => {
    event.preventDefault();
    console.log("button clicked");
    const searchInput = document.getElementById("searchInput").value;
    const query = searchInput.toLowerCase();

    init(query);
  });
});
