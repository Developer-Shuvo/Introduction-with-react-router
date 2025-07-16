import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const Users = useLoaderData();

  return (
    <div className="border-2 rounded mt-10 bg-yellow-400 p-6">
      <h1 className="text-2xl font-bold underline mb-4">Users</h1>
      <p className="mb-2">User : {Users.length}</p>
      <div>
        {
            Users.map(user => <User key={user.id} user={user}></User>)
        }
      </div>
    
    </div>
  );
};

export default Users;
