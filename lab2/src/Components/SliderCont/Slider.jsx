import './Slider.css'

import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from 'react';
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
          if(window.innerWidth >= 1920){
            slideWidth = 6;
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
       

    const [ArrayCards, setArray] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
                const response = await fetch('/Cards.json');
                const result = await response.json();
                setArray(result);
          
        };
    
        fetchCards();
    }, []);

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
                        <img src="/images/rowleft.png" alt=""/>
                    </button>
                    <button id="arrow-right">
                        <img src='/images/rowright.png' alt=""/>
                    </button>
                </div>
               
                <div class="slider-images">

                    {ArrayCards.map( photos =>(
                    
                        <div className="images" key={photos.id}>
                            <img src={photos.image} alt=""/>
                            <p className="title-card">
                                {photos.title}
                            </p>
                            <p className="price">{photos.price}</p>

                        </div>
                    ) ) }
                </div>
            </div>
        </div>
    )
}