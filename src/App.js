import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Collections from "./components/Collections";
import Product from "./components/Product";
import Register from "./components/Register";
import Login from "./components/Login";
import Bag from "./components/Bag";
import Checkout from "./components/Checkout";
import AboutThisProject from "./components/AboutThisProject";
import Receipt from "./components/Receipt";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import OutOfScope from "./components/OutOfScope";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection/:slug" element={<Collections />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/about-this-project" element={<AboutThisProject />} />
        <Route path="/out-of-scope" element={<OutOfScope />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
