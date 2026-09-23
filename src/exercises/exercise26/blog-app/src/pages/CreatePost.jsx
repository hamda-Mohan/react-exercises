import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { PostsContext } from "../Context/PostsContext";

const CreatePost = () => {
  const { addPost } = useContext(PostsContext);
  const navigate = useNavigate();

  const [postInfo, setPostInfo] = useState({
    title: "",
    content: "",
  });

  const updateField = (e) => {
    const { name, value } = e.target;

    setPostInfo((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const submitPost = (e) => {
    e.preventDefault();

    if (!postInfo.title.trim() || !postInfo.content.trim()) {
      return;
    }

    addPost(postInfo);
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Create New Post
      </h1>

      <form onSubmit={submitPost} className="space-y-5">
        <input
          name="title"
          value={postInfo.title}
          onChange={updateField}
          placeholder="Post title"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="content"
          value={postInfo.content}
          onChange={updateField}
          placeholder="Write your post..."
          rows="8"
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg"
        >
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;