import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home"
import Project from "./pages/project"
import Contact from "./pages/contact"


function AppRoutes() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
    );
}

export default AppRoutes;