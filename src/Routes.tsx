import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Repositories } from "./pages/Repositories";
import { Index } from "./pages/Index";

export function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/repositories" element={<Repositories/>}/>
            </Routes>
        </Router>
    )
}