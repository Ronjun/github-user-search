import React, { useState } from "react";
import Resultsbar from "../components/Resultsbar";
import { makeRequest } from "../utils/request";
import '../Styles/searchstyles.scss';
import { User } from "../types/User";
import ImageLoader from "../assets/Loaders/imageLoader";
import InfoLoader from '../assets/Loaders/infoLoader';

const Search = () => {

  const [user, setUser] = useState<User>();
  const [login, setLogin] = useState('');
  const [loading, setLoading] = useState(false);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLogin(value);
  }
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    setLoading(true);
    makeRequest({ url: `${'/'}${login}`})
    .then(response => setUser(response.data))
    .finally(() => {setLoading(false)});
  }
  return (

    
    <div>
      <div className="searchbar-container">
          <div className="searchbar-items">
            <h1 className="searchbar-title">
              Encontre um perfil Github
            </h1>
            <input type="text" placeholder="Usuário Github" value={login} onChange={changeHandler}/>
            <button onClick= {clickHandler} className="button-container">
              <p className="button-text"> Encontrar </p>
            </button>
          </div>
          {loading === true ?  <div className="results-container"><ImageLoader/> <InfoLoader/> </div> 
          : user !== undefined?  <Resultsbar user={user}/> : <p></p> }
      </div>

    </div>
  );
};

export default Search;
