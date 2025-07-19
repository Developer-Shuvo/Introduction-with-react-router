import { Link, useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body}= post;
    return (
        <div className="border-2 border-black rounded-lg p-6"> 
        <h1 className="text-2xl font-semibold mb-4 border-2 border-black bg-lime-400 rounded ">Id : {id}</h1>
            <h3 className="text-lg font-bold">About Post Details:</h3>
            <p className="mt-2 text-green-800 font-semibold underline ">
                Title : {title}
            </p>
            <p className="mt-4">{body}</p>
           <Link to="/Posts"> <button className="border px-4 mt-6 hover:text-white hover:bg-black text-center bg-white">Back</button></Link>

           
           
            
        </div>
    );
};

export default PostDetails;