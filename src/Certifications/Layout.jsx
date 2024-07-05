
import { Outlet, Link } from "react-router-dom";

function Layout () {
    return (
        <section className="container flex-col h-full">
            <div className="flex  justify-center items-center gap-x-10 cert-head">
                <div className=" p-1 h-4/5 text-white hover:border-b-2 border-white">
                    <Link to="/">FreeCodeCamp</Link>
                </div>
                <div className=" p-1 h-4/5 text-white hover:border-b-2 border-white">
                    <Link to="/Sololearn">SoloLearn</Link>
                </div>
                <div  className=" p-1 h-4/5 text-white hover:border-b-2 border-white">
                    <Link to="/Sololearn">Udemy</Link>
                </div>
                <div  className=" p-1 h-4/5 text-white hover:border-b-2 border-white">
                    <Link to="/Sololearn">TestDome</Link>
                </div>
            </div>
            
            <Outlet />
        </section>
    )
}

export default Layout