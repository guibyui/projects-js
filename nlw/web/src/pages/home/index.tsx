import React from "react";
import logo from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecolect" />
        </header>

        <main>
          <h1>Your Marketplace of Waste Collection.</h1>
          <p>We help people to find collection places in a efficient way.</p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Register Your Collection Spot</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
