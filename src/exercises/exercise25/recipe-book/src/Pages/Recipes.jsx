import { recipes } from '../Data/RecipeData';
import RecipeCard from '../Components/RecipeCard';

function Recipes() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          All Recipes
        </h1>

        <div className="grid grid-cols-1  lg:grid-cols-3   gap-10">

          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Recipes;