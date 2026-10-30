
import React from "react";

import "./App.css";


function Menu() {

  return (

    <nav className="menu-navegacion">

      {/* Cambia "Mi Marca" por el nombre de tu proyecto */}

      <h2 className="logo">Ikigai Motors

      </h2>

      <ul>

        <li>Inicio</li>

        <li>Sobre Ikigai</li>

        <li>Servicios Tuning</li>

        <li>Contacto</li>

      </ul>

    </nav>

  );

}


export default Menu;