import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import logo from "./assets/pokemon_logo.png";
// import { HomePage, AboutPage, DetailPage } from "./pages";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import DetailPage from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <img className="logo-main" src={logo} alt="logo" />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/detail/:pokemon_name" element={<DetailPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
