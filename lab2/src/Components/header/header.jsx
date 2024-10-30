import './header.css';
import CustomizedBadges from '../MaterialUI/MailIcon/MailIcon.jsx'
import SwitchTheme from '../MaterialUI/SwitchTheme/SwitchTheme.jsx'
import Navmenu from '../Navmenu/navmenu.jsx';

import { Link } from 'react-router-dom';
import Button from '../MaterialUI/Button/button.jsx'
import Popup from 'reactjs-popup';
import {useSelector} from 'react-redux'
import {useTranslation} from "react-i18next";
export default function Header(){
  const {t,i18n} = useTranslation ();
  const changelanguage = (language) => {

    i18n.changeLanguage(language);
  };
  const countofproduct = useSelector(state=> state.cards.count)
    return(
        <>
       <header>   
            <Link to='/'>
              <img id='logo' src="/images/logo.png" alt="" />
            </Link>
            <div className="nav_menu">
             <Navmenu/>
            </div>
            <select name="" id="" onChange={(e) => changelanguage(e.target.value)} defaultValue={i18n.language}>
              <option value="en">en</option>
              <option value="ru">ru</option>
            </select>
            <SwitchTheme/>
            <div className="header-right">
              <p className="username" />
              <Link to='/Registration'>
                <Button color='#FCF8F3' text={t('Signup')}/>
              </Link>
              <Link to="/Logining">
              <Button color='#FCF8F3' text={t("Login")}/>
              </Link>
              <button id="logout">
                <span className="logout">
                  {t("Logout")}
                </span>
              </button>
              <div>
                <img className="search-photo" src='/images/search.svg' alt="" />
              </div>
              <div className="basket">
                <Popup trigger={
                  <button className='profile-open-button'>
                  <CustomizedBadges count = {countofproduct}/>
                </button>
                } position={'bottom center'}>
                  <div className='Profile-container'>
                    <p>{t("countofproducts")} {countofproduct}</p>
                    <Link to='/basket'>
                    <button className='Lets-basket buttons-modal'>{t("Gotobasket")}</button>
                    </Link>
                    <Popup trigger={<button className='buttons-modal Exit-button'>{t("Exit")}</button>} modal nested>{
                        close=>(
                          <div className='Modal-exit'>
                            <p>{t("AreYousure")}</p>
                            <button className='Confirm' onClick={()=> close()}>{t("Yes")}</button>
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


