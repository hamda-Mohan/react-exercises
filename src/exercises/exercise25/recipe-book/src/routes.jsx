import { createBrowserRouter } from "react-router";
import App from './App'
import Home from './Pages/Home'
import NotFound from "./Components/NotFound"; 
import Recipes from "./Pages/Recipes";
import RecipesDetails from "./Pages/RecipesDetails";
import Categories from "./Pages/Categories";
import CategoriesDetails from "./Pages/CategoriesDetails";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "recipes",
                element: <Recipes />,
            },
            {
                path: "recipes/:id",
                element: <RecipesDetails />,
            },
            {
                path: "categories",
                element: <Categories />,
            },
            {
                path: "categories/:categoryId",
                element: <Categories />,
            },
            

        ]
    }
])

export default router;