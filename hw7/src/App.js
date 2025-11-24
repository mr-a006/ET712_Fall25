import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Space from "./pages/Space";
import Animals from "./pages/Animals";
import NotFound from "./pages/NotFound";

function App(){
  return(
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/space" element={<Space />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
