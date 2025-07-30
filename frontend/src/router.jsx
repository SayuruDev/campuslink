import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Table from "./pages/Table";
import Navbar from "./components/Navbar";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/table" element={<Table />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;