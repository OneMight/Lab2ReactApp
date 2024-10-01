import { useEffect, useState } from 'react';
import './Cards.css';

export default function Cards(props){
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
        <div className="Container-for-cards">
            <div className='Container-for-images'>
                {ArrayCards.map( photos =>(
                    
                    <div className="images" key={photos.id}>
                        <img src={photos.image} className='imagewidth' alt=""/>
                        <p className="title-card">
                            {photos.title}
                        </p>
                        <p className="price">{photos.price}</p>
                        <button className='button-in-card AddToBasket' onClick={props.setcountofproduct}>Add to basket</button>
                   
                    </div>
            ) ) }
            </div>
        </div>
    )
}