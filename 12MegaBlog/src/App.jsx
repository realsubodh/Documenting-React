import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { useEffect } from "react";
import { login, logout } from "./store/authSlice";
import { Header } from "./components";
import { Footer } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // applying conditional rendering
  return !loading ? (
    <div
      className="min-h-screen flex flex-wrap content-between
    bg-orange-400"
    >
      <div className="w-full block">
        <Header />
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
