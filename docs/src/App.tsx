import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Music from "./components/Music/Music";

function App() {
  return (
    <>
      <nav>
        <Link to="/"> Home</Link> | 
        <Link to="/music"> Music</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/music" element={<Music />}></Route>
      </Routes>
    </>
  );
}

export default App;
