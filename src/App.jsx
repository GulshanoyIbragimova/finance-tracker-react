import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./signup/Signup";
import Home from "./home/Home";
import Login from "./login/Login";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import { Protected, ProtectedOne } from "./components/Protected";

function App() {
  const { onAuthChange, user } = useAuthContext();

  return (
    <div className="App font-projectMainFont">
      {onAuthChange && (
        <Router>
          <Navbar />
          <div className="max-w-5xl mx-auto py-10 px-4">
            <Routes>
              <Route
                path="/"
                element={
                  <Protected isSignedIn={user}>
                    <Home />
                  </Protected>
                }
              />
              <Route
                path="/login"
                element={
                  <ProtectedOne isSignedIn={user}>
                    <Login />
                  </ProtectedOne>
                }
              />
              <Route
                path="/signup"
                element={
                  <ProtectedOne isSignedIn={user}>
                    <Signup />
                  </ProtectedOne>
                }
              />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
