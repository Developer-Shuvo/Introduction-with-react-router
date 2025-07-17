
const Post = ({ post }) => {
  return (
    <div className="border-2 border-gray-300 py-8 px-3 rounded-lg shadow bg-gray-100">
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p className="text-gray-600 mt-3">{post.body}</p>
    </div>
  );
};

export default Post;
