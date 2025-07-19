import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id } = post;
  return (
    <div className="border-2 border-gray-300 py-8 px-3 rounded-lg shadow bg-gray-100">
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p className="text-gray-600 mt-3">{post.body}</p>
      <div className="mt-4">
        <Link className="" to={`/post/${id}`}>
          <button className="bg-gray-800 text-white p-2 rounded-xl text-sm font-semibold hover:bg-yellow-800"> Post Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
