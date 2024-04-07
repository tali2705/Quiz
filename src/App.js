// import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
// import About from "./components/About";
import Questions from "./components/Questions";


function App() {


  return (
    <>
      {/* <Router>
        <ul>
          <li><Link to="/">Main page</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/start">Start the quiz!</Link></li>
        </ul>
        <Routes>
          <Route path="/"  />
          <Route path="/about" element={<About />} />
          <Route path="/start" element={<Questions />} />
        </Routes>
      </Router> */}
      {/* <div>This is quiz with 15 questions.</div> */}
      <Questions />
    </>
  );
}

export default App;
