
import { Link } from "react-router-dom";

export default function Navmenu(){

   
    return(
        <>
            <nav>
                    <Link id="shop" to="/shop">
                        <p i18n="shop" >Shop</p>
                        <img src='/images/mark.svg' alt=""/>
                    </Link>
                    <Link id="about" to='/basket'>
                        <p i18n ="about">Basket</p>
                        <img src='/images/mark.svg' alt=""/>
                    </Link>
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