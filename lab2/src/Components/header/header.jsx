import './header.css';
import logo from '../../images/logo.png';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import App from '../../App';
import Navmenu from '../Navmenu/navmenu.jsx';

export default function Header(){

    return(
        <>
       <header>
            <a href="index.html">
              <div id="logo" />
            </a>
            <div className="nav_menu">
             <Navmenu/>
            </div>
            <select name="" id="languageSelect">
              <option value="en" id="translateEN" select="">
                en
              </option>
              <option value="ru" id="translateRU">
                ru
              </option>
            </select>
            <div className="toogle-switch">
              <label className="switch">
                <input type="checkbox" id="check" />
                <span className="slider round" />
              </label>
            </div>
            <div className="header-right">
              <p className="username" />
              <button id="Sign-up">
                <span className="signup">
                Sign Up
                </span>
              </button>
              <button id="Log-in">
                <span className="login">
                  Log in
                </span>
              </button>
              <button id="logout">
                <span className="logout">
                  Log out
                </span>
              </button>
              <div>
                <img className="search-photo" src="../images/search.svg" alt="" />
              </div>
              <div className="basket">
                <div>
                  <img className="shoping" src="../images/shoping.svg" alt="" />
                </div>
                <p>0</p>
                <p></p>
              </div>
            </div>
            <input type="checkbox" id="menu_toogle" />
            <label className="btn" htmlFor="menu_toogle">
              <span />
            </label>
            <div className="burger-menu">
              <p className="username" />
              <button id="burgerlogout">
                <span className="logout">
                  Log out
                </span>
              </button>
              <div className="log">
                <button id="burgerLog">
                  <span className="login">
                    Log in
                  </span>
                </button>
                <button id="burgerSign">
                  <span className="signup">
                    Sign up
                  </span>
                </button>
              </div>
              <a href="../Shop/shopall.html" className="shop">
                Shop
              </a>
              <a href="../Read article/ReadArticle.html" className="about">
                About
              </a>
              <a href="../Questions/Questions.html" className="sustainability">
                Sustainability
              </a>
              <div className="theme"></div>
            </div>
          </header>
        </>
    )
  
}


