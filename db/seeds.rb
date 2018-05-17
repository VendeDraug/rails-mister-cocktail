Ingredient.delete_all

require 'json'
require 'open-uri'


url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
ingredients_hash = JSON.parse(open(url).read)

ingredients_hash["drinks"].each do |ingredient|
  Ingredient.create(name: ingredient["strIngredient1"])
end
