const User = ({ user }) => {
  const { name, id, email } = user;
  return (
<div className="border-2  border-blue-600 rounded-3xl bg-lime-400 mt-4 p-6 sm:p-10 md:p-16">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
    <div className="col-span-1 md:col-span-3 space-y-2">
      <h2 className="text-xl font-semibold text-gray-800">Name: {name}</h2>
      <h2 className="text-lg font-medium text-gray-700">ID: {id}</h2>
      <h2 className="text-lg font-medium text-gray-700">Email: {email}</h2>
    </div>
  </div>
</div>

  );
};

export default User;
