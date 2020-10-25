import React from "react";
import "./styles.scss";
import { User } from "../../types/User";
import dayjs from 'dayjs';

type Props = {
  user: User;
};
const Resultsbar = ({ user }: Props) => {
  return (
    <div className="results-container">
      <div className="image-container">
        <img src={user.avatar_url} alt="avatar" className="results-image" />
        <a href={user.html_url}>
          <button className="button-container">
            <p className="button-text">Ver perfil</p>
          </button>
        </a>
      </div>
      <div>
        <div className="activity-container">
          <span className="activity-box ">
            {" "}
            Repositórios públicos: {user.public_repos}{" "}
          </span>
          <span className="activity-box "> Seguidores: {user.followers} </span>
          <span className="activity-box "> Seguindo: {user.following} </span>
        </div>
        <div className="info-container">
          <h1>Informações</h1>
          <p className="info-box">
            <b>Empresa: </b>
            {user.company}
          </p>
          <p className="info-box">
            <b>Website/Blog: </b>
            {user.blog}
          </p>
          <p className="info-box">
            <b>Localidade: </b>
            {user.location}
          </p>
          <p className="info-box">
            <b>Membro desde: </b>
            {dayjs(user.created_at).format('DD/MM/YYYY')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resultsbar;
