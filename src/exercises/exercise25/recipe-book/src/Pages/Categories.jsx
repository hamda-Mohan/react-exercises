import { Link, useParams } from "react-router";
import { categories, recipes } from "../Data/RecipeData";

function Categories() {
  const { categoryId } = useParams();

  const selectedCategory = categories.find(
    (category) => category.id === categoryId
  );

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category === categoryId
  );

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-xl shadow-md p-8">

          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Categories
          </h1>

          <aside className="grid gap-5">

            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.id}`}
                className={`block border rounded-xl p-5 cursor-pointer transition duration-300 hover:bg-pink-50 hover:border-pink-400 hover:shadow-lg ${
                  categoryId === category.id
                    ? "border-pink-500 bg-pink-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <h2
                  className={`text-xl font-bold ${
                    categoryId === category.id
                      ? "text-pink-600"
                      : "text-gray-900"
                  }`}
                >
                  {category.name}
                </h2>

                <p className="text-gray-600 mt-2">
                  {category.description}
                </p>
              </Link>
            ))}

          </aside>
        </div>

        {/* Selected Category Recipes */}

        {selectedCategory && (
          <div className="bg-white rounded-xl shadow-md p-8 mt-6">

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {selectedCategory.name} Recipes
            </h2>

            {filteredRecipes.length > 0 ? (

              <div className="space-y-4">

                {filteredRecipes.map((recipe) => (
                  <Link
                    key={recipe.id}
                    to={`/recipes/${recipe.id}`}
                    className="block border border-gray-300 rounded-lg p-5 cursor-pointer hover:shadow-md hover:border-pink-400 hover:bg-pink-50 transition"
                  >

                    <h3 className="text-xl font-bold text-gray-900">
                      {recipe.title}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      {recipe.description}
                    </p>

                  </Link>
                ))}

              </div>

            ) : (

              <p className="text-gray-600">
                No recipes found in this category.
              </p>

            )}

          </div>
        )}

      </div>
    </div>
  );
}

export default Categories;