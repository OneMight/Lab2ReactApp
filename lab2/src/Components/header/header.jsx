import './header.css';
import CustomizedBadges from '../MailIcon/MailIcon.jsx'

import Navmenu from '../Navmenu/navmenu.jsx';

import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

export default function Header({count}){
  
    return(
        <>
       <header>
            <Link to='/'>
              
              <img id='logo' src="/images/logo.png" alt="" />
            </Link>
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
              <Link to='/Registration'>
                <button id="Sign-up">
                  <span className="signup">
                  Sign Up
                  </span>
                </button>
              </Link>
              <Link to="/Logining">
                  <button id="Log-in">
                    <span className="login">
                    Log in
                    </span>
                
                  </button>
              </Link>
              <button id="logout">
                <span className="logout">
                  Log out
                </span>
              </button>
              <div>
                <img className="search-photo" src='/images/search.svg' alt="" />
              </div>
              <div className="basket">
                <Popup trigger={
                  <button className='profile-open-button'>
                  <CustomizedBadges count ={count}/>
                </button>
                } position={'bottom center'}>
                  <div className='Profile-container'>
                    <p>Количество покупок {count}</p>
                    <Link to='/basket'>
                    <button className='Lets-basket buttons-modal'>Перейти в корзину</button>
                    </Link>
                    <Popup trigger={<button className='buttons-modal Exit-button'>Выйти</button>} modal nested>{
                        close=>(
                          <div className='Modal-exit'>
                            <p>Вы точно хотите выйти?</p>
                            <button className='Confirm' onClick={()=> close()}>Да</button>
                          </div>
                        ) 
                      }
                    </Popup>
                  </div>
                </Popup>   
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


