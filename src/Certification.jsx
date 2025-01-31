import { BrowserRouter, Routes, Route } from "react-router-dom";
import './custom.css';

import Layout from "./Certifications/Layout";
import FreeCodeCamp from "./Certifications/FreeCodeCamp";
import SoloLearn from "./Certifications/SoloLearn";
import TestDome from "./Certifications/TestDome";
import Udemy from "./Certifications/Udemy";

function Certification() {

    return (
        <section className="cert-con custom_bg_2 min-h-cert flex justify-center items-start pt-10" id="Certifications">
            <section className="w-4/5 h-full ">
                <BrowserRouter>
                    <Routes className="h-full">
                        <Route path="/" element={<Layout />}>
                            <Route index element={<FreeCodeCamp />} />
                            <Route path="SoloLearn" element={<SoloLearn />} />
                            <Route path="Udemy" element={<Udemy />} />
                            <Route path="Testdome" element={<TestDome />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </section>
        </section>
    )
}

export default Certification