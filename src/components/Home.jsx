import { useAuth } from "../context/authContext";

function Home() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
        <h1>Welcome {user.displayName ? user.displayName : user.email}</h1>
        <button
          onClick={handleLogout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
