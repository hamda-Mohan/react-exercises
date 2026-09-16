import { Link, useParams } from 'react-router';
import { categories, recipes } from '../Data/RecipeData';
import RecipeCard from '../Components/RecipeCard';

function CategoryDetail() {
  const { categoryId } = useParams();

  const category = categories.find(
    (category) => category.id === categoryId
  );

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category === categoryId
  );

  if (!category) {
    return (
      <div>
        <h1>Category Not Found</h1>

        <Link to="/categories">
          Back to Categories
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{category.name}</h1>

      <p>{category.description}</p>

      {filteredRecipes.length > 0 ? (
        <div>
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      ) : (
        <p>No recipes found in this category.</p>
      )}

      <br />

      <Link to="/categories">
        ← Back to Categories
      </Link>
    </div>
  );
}

export default CategoryDetail;