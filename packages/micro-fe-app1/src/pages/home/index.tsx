import { Link } from "react-router-dom";
import CardApp1 from "../../components/Card";
import "./home.css";
function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Micro Frontend Monorepo</p>
                <div className="card-wrapper">
                    <CardApp1 />
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