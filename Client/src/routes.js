import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/nav_bar";
import ContainerPage from "./pages/container";
import ImagePage from "./pages/image";
import CleanupPage from "./pages/cleanup";

const AppRoutes = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ContainerPage />} />
                    <Route path="/containers" element={<ContainerPage />} />
                    <Route path="/images" element={<ImagePage />} />
                    <Route path="/cleanup" element={<CleanupPage />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default AppRoutes;
