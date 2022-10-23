import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import DetailPage from "./pages/Detail";
import ToolTip from "./components/ToolTip";

function App() {
  const [showToolTip, setShowToolTip] = useState(false);

  const displayToolTip = {
    On(props) {
      setShowToolTip(true);
    },
    Off(props) {
      setShowToolTip(false);
    },
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/detail/:pokemon_name" element={<DetailPage />} />
        <Route
          path="/"
          element={<HomePage stateCache={""} displayTip={displayToolTip} />}
        />
      </Routes>
      <ToolTip info="This is a tool tip" cssClass={"hide-element"} />
    </div>
  );
}

export default App;
