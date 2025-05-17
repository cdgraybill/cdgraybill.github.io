import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Links from "./components/Links/Links";

function App() {
  return (
    <>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/links"> Links</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/links" element={<Links />}></Route>
      </Routes>
    </>
  );
}

export default App;
