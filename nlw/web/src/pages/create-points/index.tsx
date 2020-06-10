import React from "react";
import logo from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecolect" />

        <Link to="/">
          <FiArrowLeft />
          Back to Home Page
        </Link>
      </header>

      <form>
        <h1>Collection Point Register</h1>

        <fieldset>
          <legend>
            <h2>Your Info</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Name of the Company</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="name">E-mail</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className="field">
              <label htmlFor="phone-number">Phone Number</label>
              <input type="text" name="phone-number" id="phone-number" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Address</h2>
            <span>Select the address in the map</span>
          </legend>

          <div className="field-group">
            <div className="field">
              <label htmlFor="state">State</label>
              <select name="state" id="state">
                <option value="0"> Select a State </option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">City</label>
              <select name="city" id="city">
                <option value="0"> Select a City </option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Collection Items</h2>
            <span>Select one or more items below</span>
          </legend>

          <ul className="items-grid">
            <li>
              <img src="" alt="" />
            </li>
            <li>
              <img src="" alt="" />
            </li>
            <li>
              <img src="" alt="" />
            </li>
            <li>
              <img src="" alt="" />
            </li>
            <li>
              <img src="" alt="" />
            </li>
            <li>
              <img src="" alt="" />
            </li>
          </ul>
        </fieldset>

        <button type="submit">Register Collection Spot</button>
      </form>
    </div>
  );
};

export default CreatePoint;
