import { Routes, Route } from "react-router-dom";

import "./App.css";

// pages
import Homepage from "./pages/home-page/Homepage";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/shop" Component={ShopPage} />
      </Routes>
    </div>
  );
}

export default App;
