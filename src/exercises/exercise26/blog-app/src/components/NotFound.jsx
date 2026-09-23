import { Link, useRouteError } from "react-router";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="text-xl mt-4">
        {error?.statusText || "Page not found"}
      </p>

      <Link
        to="/"
        className="mt-6 bg-blue-500 text-white px-5 py-2 rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;