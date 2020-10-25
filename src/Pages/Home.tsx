import React from "react";
import { Link } from "react-router-dom";
import "../Styles/homestyles.scss";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h1 className="home-title">
          Desafio do capítulo 3, <br /> Bootcamp DevSuperior
        </h1>
        <p className="home-text">
          Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
          <br /> Favor observar as instruções passadas no capítulo sobre a
          elaboração
          <br /> deste projeto.
          <br />
          Este design foi adaptado a partir de Ant Design System for Figma, de
          <br />
          Mateusz Wierzbicki: <address>antforfigma@gmail.com</address>
        </p>
        <Link to="/search">
          <button className="button-container">
            <p className="button-text">Começar</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
