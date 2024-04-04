import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import App from "../App";
import About from "./About";
import Questions from "./Questions";

const Menu = () => {
    return (
        <>
            <Router>
                <ul>
                    <li><Link to="/">Main page</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/start">Start the quiz!</Link></li>
                </ul>
                <Routes>
                    <Route path="/" />
                    <Route path="/about" element={<About />} />
                    <Route path="/start" element={<Questions />} />
                </Routes>
            </Router>
        </>
    );
}
export default Menu;