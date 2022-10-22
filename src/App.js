import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import DetailPage from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/detail/:pokemon_name" element={<DetailPage />} />
        <Route path="/" element={<HomePage stateCache={""} />} />
      </Routes>
    </div>
  );
}

export default App;
