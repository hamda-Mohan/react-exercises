import { useParams, Link } from 'react-router';
import { recipes } from '../Data/RecipeData';

function RecipeDetail() {
  const { id } = useParams();

  const recipe = recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-100 px-6 py-10">
        <Link
            to="/recipes"
            className="text-pink-600 font-semibold hover:underline"
          >
            Back to Recipes
          </Link>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 text-center">

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Recipe Not Found
          </h1>

          

        </div>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-gray-100 px-6 py-10">

    <div className="max-w-4xl mx-auto">

      {/* Back */}
      <Link
        to="/recipes"
        className="inline-block text-pink-600 font-semibold hover:underline mb-5"
      >
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-xl shadow-md p-8">

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {recipe.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-6">
          {recipe.description}
        </p>

        {/* Category */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Category
          </h2>

          <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-semibold capitalize">
            {recipe.category}
          </span>
        </div>

        {/* Ingredients */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ingredients
          </h2>

          <ul className="space-y-3">
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700"
              >
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Instructions
          </h2>

          <ol className="space-y-4">
            {recipe.instructions.map((instruction, index) => (
              <li
                key={index}
                className="flex gap-4 bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <span className=" w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </span>

                <span className="text-gray-700 pt-1">
                  {instruction}
                </span>
              </li>
            ))}
          </ol>
        </div>

      </div>

    </div>

  </div>
);
}

export default RecipeDetail;