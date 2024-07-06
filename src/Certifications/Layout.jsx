
import { Outlet, Link } from "react-router-dom";

function Layout () {
    return (
        <section className="container flex-col h-full ">
            <div className="flex  justify-center items-center cert-head flex-wrap gap-x-10">
                <div className=" p-1 h-4/5 text-white hover:border-b-2 border-white">
                    <Link to="/">FreeCodeCamp</Link>
                </div>
                <div className=" p-1 h-4/5 text-white hover:border-b-2 border-white">
                    <Link to="/Sololearn">SoloLearn</Link>
                </div>
                <div  className=" p-1 h-4/5 text-white hover:border-b-2 border-white">
                    <Link to="/Udemy">Udemy</Link>
                </div>
                <div  className=" p-1 h-4/5 text-white hover:border-b-2 border-white">
                    <Link to="/TestDome">TestDome</Link>
                </div>
            </div>
            
            <Outlet />
        </section>
    )
}

export default Layout