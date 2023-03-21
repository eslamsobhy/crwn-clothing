import { Routes, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/Homepage";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/hats" Component={HatsPage} />
      </Routes>
    </div>
  );
}

export default App;
