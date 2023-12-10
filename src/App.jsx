import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Catalog from "./pages/Catalog";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/catalog" Component={Catalog} />
      <Route path="/login" Component={LoginPage} />
    </Routes>
  );
}

export default App;
