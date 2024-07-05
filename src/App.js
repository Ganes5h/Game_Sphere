import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SnakeGame from "./components/Snake/Snake";
import TicTac from "./components/Tic_tac_toe/Tic";
import Flappy from "./components/Flappy/Flappy";
import Dice from "./components/Dice/Dice";
import Test from "./Test";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SnakeGame />}></Route>
          <Route path="/tic" element={<TicTac />}></Route>
          <Route path="/flappy" element={<Flappy />}></Route>
          <Route path="/dice" element={<Dice />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
