import './Slider.css'
import ArrowLeft from '../../images/rowleft.png'
import ArrowRight from '../../images/rowright.png'
import { BrowserRouter} from 'react-router-dom';
import imag1 from '../../images/imag1.png';
import imag2 from '../../images/imag2.png';
import imag3 from '../../images/imag3.png';
import imag4 from '../../images/imag4.png';
import imag5 from '../../images/imag5.png';
import imag6 from '../../images/imag6.png';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
export default function Slider(){

    useEffect(() =>{
        let slider = document.querySelector(".slider-images");
        let arrowleft = document.getElementById("arrow-left");
        let arrowright = document.getElementById("arrow-right");
        let slideWidth;
        let i = 0;
        function updateCountOfItems() {
          if (window.innerWidth <= 1200) {
            slideWidth = 8;
          }
          else {
            slideWidth = 7;
          }
          if(window.innerWidth <= 768){
            slideWidth = 9;
          }
          if(window.innerWidth <=320){
            slideWidth = 10;
          }
          
        }
        window.addEventListener('resize', updateCountOfItems);
    arrowright.addEventListener('click',function(){
    
        if(i < slideWidth - 1){
          i++
        }
        else{
          i = 0
        }
        slider.style.transform = `translateX(-${i*328}px)`;
    }
    
    )
    arrowleft.addEventListener('click',function(){
    
      if(i > 0){
        i--;
      }
      else{
        i = slideWidth -1;
      }
      slider.style.transform = `translateX(-${i*328}px)`;
    }
    )
    
        updateCountOfItems();
    })
       

    return(
        
        <div class="container-cards box unauthotized">
        <div class="text-and-button box">
                <div>
                    <p i18n="ourBestSellers" class="title-contaner i18n "> Our Best Sellers</p>
                    <p i18n="deliverASmile" class="text-title i18n ">
                        Deliver a smile to yourself or someone special
                        with one of our sustainable favorites.
                    </p>
                </div>
                
                <Link to='/shop' id="shop-all">
                    <span i18n="shopAllProducts" class="i18n shopAllProducts">Shop all products</span> 
                    <img src="../images/row.svg" alt=""/>
                </Link>
               
                
            </div>
        <div class="container-slider">
                <div class="Arrows ">
                    <button id="arrow-left">
                        <img src={ArrowLeft} alt=""/>
                    </button>
                    <button id="arrow-right">
                        <img src={ArrowRight} alt=""/>
                    </button>
                </div>
               
                <div class="slider-images">
                    <div class="images">
                        <img src={imag1} alt=""/>
                        <p i18n="assortedCardSet" class="title-card i18n ">Assorted Card Set</p>
                        <p i18n="dogs" class="name-card i18n ">Dogs</p>
                        <p  class="price">$ 14.00</p>
                    </div>
                    <div class="images">
                        <img src={imag2} alt=""/>
                        <p i18n="notebookSetOf3" class="title-card i18n ">Notebook Set of 3</p>
                        <p i18n="northAmericanBirds" class="name-card i18n ">North American Birds</p>
                        <p  class="price">$ 14.00</p>
                    </div>
                    <div class="images">
                        <img src={imag3} alt=""/>
                        <p i18n="notebookSetOf3" class="title-card i18n ">Notebook Set of 3</p>
                        <p i18n="newYorkLondonParis" class="name-card i18n ">New York, London, Paris</p>
                        <p  class="price">$ 13.00</p>
                    </div>
                    <div class="images">
                        <img src={imag4} alt=""/>
                        <p i18n="assortedCardSet" class="title-card i18n  ">Assorted Card Set</p>
                        <p i18n="grandCanyonYosemiteArches1" class="name-card i18n ">Grand Canyon, Yosemite, Arches National Park</p>
                        <p class="price ">$ 13.00</p>
                    </div>
                    <div class="images">
                        <img src={imag5} alt=""/>
                        <p i18n="assortedCardSet" class="title-card i18n ">Assorted Card Set</p>
                        <p i18n="grandCanyonYosemiteArches2" class="name-card i18n ">Unicorns</p>
                        <p class="price">$ 14.00</p>
                    </div>
                    <div class="images">
                        <img src={imag6} alt=""/>
                        <p i18n="assortedCardSet" class="title-card i18n ">Assorted Card Set</p>
                        <p i18n="grandCanyonYosemiteArches3" class="name-card i18n ">Christian Sympathy & Encouragement Cards</p>
                        <p class="price">$ 14.00</p>
                    </div>
                    <div class="images">
                        <img src={imag1} alt=""/>
                        <p i18n="assortedCardSet" class="title-card i18n ">Assorted Card Set</p>
                        <p i18n="grandCanyonYosemiteArches4" class="name-card i18n ">Ocean Life</p>
                        <p class="price">$ 14.00</p>
                    </div>
                    <div class="images">
                        <img src={imag2} alt=""/>
                        <p i18n="assortedCardSet" class="title-card i18n ">Assorted Card Set</p>
                        <p i18n="grandCanyonYosemiteArches5" class="name-card i18n ">Sunflowers</p>
                        <p class="price">$ 14.00</p>
                    </div>
                    <div class="images">
                        <img src={imag3} alt=""/>
                        <p i18n="assortedCardSet" class="title-card i18n ">Assorted Card Set</p>
                        <p i18n="grandCanyonYosemiteArches6" class="name-card i18n ">Cats</p>
                        <p class="price">$ 14.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}