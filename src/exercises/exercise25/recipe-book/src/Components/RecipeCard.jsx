import { Link } from 'react-router';

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipes/${recipe.id}`}>
      <div className="flex flex-col text-start bg-pink-50 px-5 py-5 space-y-5 rounded-lg shadow-lg cursor-pointer w-80 hover:shadow-xl hover:-translate-y-1 transition duration-300">

        <h3 className="text-2xl font-bold text-gray-900">
          {recipe.title}
        </h3>

        <p className="text-base font-medium text-gray-600">
          {recipe.description}
        </p>

        <p className="bg-pink-100 w-fit px-3 py-2 rounded-lg text-pink-900 text-base font-bold capitalize">
          {recipe.category}
        </p>

      </div>
    </Link>
  );
}

export default RecipeCard;