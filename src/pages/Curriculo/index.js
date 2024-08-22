import React from "react";
import "./style.css";
import Header from "../../components/Header";
import curriculo from '../../assets/Currículo .png';

function Curriculo() {

  return (    
      <div>
        <div><Header/></div> 
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="curriculo">
            <img src={curriculo}/>
            
        </div>  
        <br/>
        <br/><br/>

     
      </div>

  );
}

export default Curriculo;