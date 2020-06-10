import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker } from "react-leaflet";
import api from "../../services/api";

import "./styles.css";

// If we create a state for an array or an object,
// we need to inform the type of the variable manually.

interface Item {
    id: number;
    title: string;
    image_url: string;
}

const CreatePoint = () => {
    const [items, setItems] = useState<Item[]>([]);


  useEffect(() => {
    api.get("items").then((response) => {
      setItems(response.data);
    });
  }, []);

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

          <Map center={[40.6850663, -111.8926186]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[40.6850663, -111.8926186]} />
          </Map>

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
            {items.map((item) => (
              <li key={item.id}>
                <img src={item.image_url} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </fieldset>

        <button type="submit">Register Collection Spot</button>
      </form>
    </div>
  );
};

export default CreatePoint;
