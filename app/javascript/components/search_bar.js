
// const searchBar = () => {

//   const suggestions = document.getElementById("results");
//   const list = suggestions.querySelectorAll("li");
//   const search = document.getElementById("search");
//   const find = document.getElementById("find");

//   search.addEventListener("submit", (event) => {
//     console.log(search.value);
// })




// url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
// ingredients_hash = JSON.parse(open(url).read)

// ingredients_hash["drinks"].each do |ingredient|
//   Ingredient.create(name: ingredient["strIngredient1"])
// end

// search.addEventListener("keyup", (event) => {
//   fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${search.value}`)
//     .then(response => response.json())
//     .then((data) => {
//       suggestions.innerHTML = "";
//       data.words.forEach((word) => {
//         const item = `<li>${word}</li>`;
//         suggestions.insertAdjacentHTML("beforeend", item);
//       });
//     });
//     find.addEventListener("click", (event) => {
//       event.link("#{root_path}##{word}")
//     })
// });
// export { searchBar };
