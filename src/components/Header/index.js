import React from 'react';
import './style.css';
import logo from '../../assets/test_test___-removebg-preview.png';

function Header() {


  return (
    <header>
        <nav>
            <div className="wrapper">
            <div className="logo"><a href="/"><img src={logo} alt="logo" width="160px" height="80px"/></a></div>
              <input type="radio" name="slider" id="menu-btn"/>
              <input type="radio" name="slider" id="close-btn"/>
              <ul className="nav-links">
                <label for="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                <li><a href="/">portifólio</a></li>               
                <li><a href="/curriculo">currículo</a></li>
              </ul>
              <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
              
            </div>
        
          </nav>        
    </header>
  );
}

export default Header;