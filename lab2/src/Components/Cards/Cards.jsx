import { useEffect, useState } from 'react';
import './Cards.css';

export default function Cards({ addToBasket }) {
    const [arrayCards, setArray] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            const response = await fetch('/Cards.json');
            const result = await response.json();
            setArray(result);
        };

        fetchCards();
    }, []);

    return (
        <div className="Container-for-cards">
            <div className='Container-for-images'>
                {arrayCards.map(photo => (
                    <div className="images" key={photo.id}>
                        <img src={photo.image} className='imagewidth' alt="" />
                        <p className="title-card">{photo.title}</p>
                        <p className="price">{photo.price}</p>
                        <button className='button-in-card AddToBasket'
                            onClick={() => addToBasket(photo.id,photo.image, photo.title, photo.price)}>
                            Add to basket
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}