import mark from '../../images/mark.svg'
import { Link } from "react-router-dom";

export default function Navmenu(){

   
    return(
        <>
            <nav>
                    <Link id="shop" to="/shop">
                        <p i18n="shop" >Shop</p>
                        <img src={mark} alt=""/>
                    </Link>
                    <a id="about" href="../Read article/ReadArticle.html">
                        <p i18n ="about">About</p>
                        <img src={mark} alt=""/>
                    </a>
                    <a id="sustainability" href="../Questions/Questions.html">
                        <p i18n ="sustainability">Sustainability</p>
                    </a>
                    <a id="checkusers" href="../Check All Users/checkallusers.html">
                        <p i18n="checkusers">Check all users</p>
                    </a>
            
                </nav>
        </>
       
               
    )
}