import React from "react";
import { Link } from "react-router-dom";
import CardApp1 from "../../components/Card";
import "./home.css";

import { importModule } from "../../utils/importModule ";
const CardApp2 = importModule("@tesodev/app2", "Card");
const Navbar = importModule("@tesodev/app2", "Navbar");

function Home() {
    React.useEffect(() => {
        window.addEventListener('navbarToCard', (e) => {
            console.log(e);
        });
    }, []);

    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <p>Micro Frontend Monorepo</p>
                <div className="card-wrapper">
                    <CardApp1 />
                    <CardApp2 title="Called from app1" />
                </div>

                <div className="mb12">
                    <Link to="/about">Go to App 1 - About</Link>
                </div>

                <div className="mb12">
                    <Link to="/app2">Go to App 2 - Home</Link>
                </div>
            </header>
        </div>
    );
}
export default Home;