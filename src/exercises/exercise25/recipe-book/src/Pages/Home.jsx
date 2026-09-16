import { Link } from 'react-router';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      <div className="max-w-5xl mx-auto text-center">

        {/* Welcome */}
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Welcome to Recipe Book
        </h1>

        <p className="text-base md:text-lg font-medium text-gray-600 mb-10">
          Discover delicious recipes and explore different categories.
        </p>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          <Link
            className="bg-pink-600 text-white p-8 text-center rounded-xl shadow-lg hover:bg-pink-700 hover:shadow-xl transition duration-300"
            to="/recipes"
          >
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Browse Recipes
              </h2>

              <p className="text-base font-medium">
                See all our available recipes.
              </p>
            </div>
          </Link>

          <Link
            className="bg-pink-600 text-white p-8 text-center rounded-xl shadow-lg hover:bg-pink-700 hover:shadow-xl transition duration-300"
            to="/categories"
          >
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Explore Categories
              </h2>

              <p className="text-base font-medium">
                Find recipes by category.
              </p>
            </div>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;