import { useContext, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { PostsContext } from "../Context/PostsContext";

const Home = () => {
  const { posts } = useContext(PostsContext);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search).get("search") || "";
  const [keyword, setKeyword] = useState(query);

  const visiblePosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [posts, query]);

  const searchPosts = (e) => {
    e.preventDefault();

    navigate(
      keyword.trim()
        ? `/?search=${encodeURIComponent(keyword.trim())}`
        : "/"
    );
  };

  return (
    <section className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Blog Posts</h2>

        <Link
          to="/create"
          className="bg-blue-500 text-white px-5 py-2 rounded-lg"
        >
          Create Post
        </Link>
      </div>

      <form onSubmit={searchPosts} className="mb-8 flex gap-3">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search posts..."
          className="border px-4 py-2 rounded-lg"
        />

        <button
          type="submit"
          className="bg-gray-800 text-white px-5 py-2 rounded-lg"
        >
          Search
        </button>
      </form>

      <div className="space-y-4">
        {visiblePosts.length > 0 ? (
          visiblePosts.map((post) => (
            <Link
              key={post.id}
              to={`/posts/${post.id}`}
              className="block border p-5 rounded-lg hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold">{post.title}</h3>
            </Link>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </section>
  );
};

export default Home;