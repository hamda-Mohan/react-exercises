import { useContext } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import { PostsContext } from "../Context/PostsContext";

const PostDetail = () => {
  const { postId } = useParams();
  const { posts } = useContext(PostsContext);
  const navigate = useNavigate();
  const location = useLocation();

  const currentId = Number(postId);
  const currentPost = posts.find((item) => item.id === currentId);

  if (!currentPost) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold">Post Not Found</h2>
        <Link to="/" className="text-blue-500">
          Back Home
        </Link>
      </div>
    );
  }

  const goToPost = (step) => {
    const nextId = currentId + step;
    const exists = posts.some((item) => item.id === nextId);

    if (!exists) return;

    navigate(`/posts/${nextId}`, {
      state: {
        previousId: currentId,
      },
    });
  };

  return (
    <article className="max-w-3xl mx-auto p-8">
      <p className="text-gray-500 mb-2">Post #{currentPost.id}</p>

      <h1 className="text-4xl font-bold mb-6">
        {currentPost.title}
      </h1>

      <p className="text-lg leading-8 mb-10">
        {currentPost.content}
      </p>

      <div className="flex justify-between">
        <button
          onClick={() => goToPost(-1)}
          disabled={currentId === posts[0]?.id}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-40"
        >
          Previous
        </button>

        <Link
          to="/"
          className="px-4 py-2 text-blue-500"
        >
          All Posts
        </Link>

        <button
          onClick={() => goToPost(1)}
          disabled={currentId === posts[posts.length - 1]?.id}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>

      {location.state?.previousId && (
        <p className="text-sm text-gray-400 mt-6">
          Came from post #{location.state.previousId}
        </p>
      )}
    </article>
  );
};

export default PostDetail;