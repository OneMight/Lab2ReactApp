
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
export default function Navmenu(){

    const {t} = useTranslation ();

    return(
        <>
            <nav>
                    <Link id="shop" to="/shop">
                        <p i18n="shop" >{t('navmenu.Shop')}</p>
                        <img src='/images/mark.svg' alt=""/>
                    </Link>
                    <Link id="about" to='/basket'>
                        <p i18n ="about">{t('navmenu.Basket')}</p>
                        <img src='/images/mark.svg' alt=""/>
                    </Link>
                   <Link to='/sustainability'>
                        <p i18n ="sustainability">{t('navmenu.Sustainability')}</p>
                   </Link>
                    <a id="checkusers" href="../Check All Users/checkallusers.html">
                        <p i18n="checkusers">{t('navmenu.Checkallusers')}</p>
                    </a>
            
                </nav>
        </>
       
               
    )
}