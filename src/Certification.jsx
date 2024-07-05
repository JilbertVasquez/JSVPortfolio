import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './custom.css';

import Layout from "./Certifications/Layout";
import FreeCodeCamp from "./Certifications/FreeCodeCamp";
import SoloLearn from "./Certifications/SoloLearn";

function Certification () {
    
    return (
        <section className="cert-con custom_bg_2 h-4/5 flex justify-center items-center">
            <section className="w-4/5 bg-white h-full">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<FreeCodeCamp />} />
                            <Route path="SoloLearn" element={<SoloLearn />} />
                            <Route path="SoloLearn" element={<SoloLearn />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </section>
        </section>
    )
}

export default Certification