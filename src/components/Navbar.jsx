import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <div className="bg-emerald-300 py-5">
      <div className="max-w-5xl mx-auto flex justify-between">
        <Link to="/" className="text-4xl font-projectMainFont">
          My Money
        </Link>
        <nav className="flex items-center gap-4">
          {!user && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
          {user && (
            <h1>
              <span className=" font-projectMainFont2 text-4xl">hello,</span>{" "}
              {user.displayName}
            </h1>
          )}
          {user && (
            <button
              onClick={logout}
              className="bg-gradient-to-r px-3 py-1 rounded from-green-400 to-blue-500 hover:from-green-500 hover:to-green-500"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
