import React from "react";
import TemperatureLineChart from "../../Chart/Chart";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className="mainContainer">
            <Header title="My Cycle" />
            <div>
                <h1>Courbe de Température</h1>
                <TemperatureLineChart />
            </div>
            <Link to="/SignIn">Sign in Page</Link>
        </main>
    );
};

export default Home;
