import './header.css';
import CustomizedBadges from '../MaterialUI/MailIcon/MailIcon.jsx'
import SwitchTheme from '../MaterialUI/SwitchTheme/SwitchTheme.jsx'
import Navmenu from '../Navmenu/navmenu.jsx';
import SelectLanguge from '../MaterialUI/SelectLanguage/SelectLanguage.jsx'
import { Link } from 'react-router-dom';
import Button from '../MaterialUI/Button/button.jsx'
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
            <SelectLanguge/>
            <SwitchTheme/>
            <div className="header-right">
              <p className="username" />
              <Link to='/Registration'>
                <Button color='#FCF8F3' text='Sign up'/>
              </Link>
              <Link to="/Logining">
              <Button color='#FCF8F3' text='Log in'/>
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
                  <CustomizedBadges count = {count}/>
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


