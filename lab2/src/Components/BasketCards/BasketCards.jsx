import './BasketCards.css';
import { useDispatch, useSelector } from 'react-redux';
import {removeCard, decrement} from '../../store/actions/cardsSlicer'
import {useTranslation} from "react-i18next";
export default function BasketCards() {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const Card = useSelector(state => state.cards.items);

    const HandleDeleteCard =(id)=>{
   
        dispatch(removeCard({id}));
        dispatch(decrement());
       
    }
    return (
        <div className="Container-for-cards">
            <h1>{t('Basket.Basket')}</h1>
            {(!Card || Card.length === 0) ? (
                <p>{t('Basket.Nothing in Basket')}</p>
                
            ) : (
                <div className='Container-for-images'>
                    {Card.map((photo, index) => (
                        <div className="images" key={index}>
                            <img src={photo.image} className='imagewidth' alt="" />
                            <p className="title-card">{photo.title}</p>
                            <p className="price">{photo.price}</p>
                            <button className='button-in-card delete-Button' onClick={()=>HandleDeleteCard(photo.id)}>
                            {t('Basket.Delete from basket')}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}