import React from "react";
import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="navBarBrand">
        <h2>THEY</h2>
      </div>
      <div className="navBarMenu">
        <ul className="navBarItems">
          <li className="navBarItem">
            <Link to={"/"} className="navBarLink">
              Home
            </Link>
          </li>
          <li className="navBarItem">
          <Link to={`/productos/todos`} className="navBarLink">
              Productos
            </Link>
          </li>
          <li className="navBarItem">
          <Link to={`/novedades/`}  className="navBarLink">
              Novedades
              </Link>
          </li>
          <li className="navBarItem">
          <Link to={`/contacto/`} className="navBarLink">
              Contacto
              </Link>
          </li>
          <CartWidget />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
