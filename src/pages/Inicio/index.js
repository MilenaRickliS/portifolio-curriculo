import React from "react";
import "./style.css";
import Header from "../../components/Header";
import eu from '../../assets/eu.png';

function Inicio() {

  return (    
      <div>
        <div><Header/></div> 
        <br/>
        <br/>
        <br/>
        <div className="inicio">
            <div>
                <h1>Milena Rickli</h1>
                <h1>Silvério Kriger</h1>
                <h4>----- Eng. de Software</h4>
                <p className="subtitulo">Olá! Eu estou realizando o curso de Engenharia de Software na faculdade Campo Real, e aqui apresento o meu currículo e projetos já realizados</p>
                <div className="button-inicio">
                    <a href="/" className="sayHello">Say Hello <i class="bi bi-envelope-at-fill"></i> </a>
                    <a href="/projetos" className="link-projetos">My Works <i class="bi bi-arrow-up-right"></i></a>
                </div>
            </div>
            <div>
                <img src={eu} alt="Milena RS"/>
            </div>    
        </div>   

     
      </div>

  );
}

export default Inicio;