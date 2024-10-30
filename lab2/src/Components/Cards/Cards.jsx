import { useEffect, useState } from 'react';
import './Cards.css';
import Popup from 'reactjs-popup';
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation} from 'react-i18next';
import { addCard,increment,updateCard,setallitems } from '../../store/actions/cardsSlicer';
import Input from '../MaterialUI/Inputs/input'
import Button from '../MaterialUI/Button/button'
export default function Cards() {
    const {t} = useTranslation();
    const [arrayCards, setArray] = useState([]);
    const [titleinput, settitle] = useState('');
    const [priceinput, setprice] = useState('');
    const [imageinput, setimage] = useState('');
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchCards = async () => {
            const response = await fetch('/Cards.json');
            const result = await response.json();
            setArray(result);
            dispatch(setallitems(result))
        };

        fetchCards();
     
    }, []);
    const HandeUpdateCard = (id) => {
        dispatch(updateCard({ id, updatedData: { title: titleinput, image:imageinput, price:priceinput} }));
    };
    const HandleAddtoBasket =(id,title,price,image)=>{
        dispatch(addCard({id, title,price, image}));
        dispatch(increment());
    }
    const HandleSetTitleCard =(e) =>{
        settitle(e.target.value);
    }
    const HandleSetPriceCard =(e) =>{
        setprice(e.target.value);
    }
    const HandeSetImageCard = (e) =>{
        setimage(e.target.value);
    }
    
    return (
        <div className="Container-for-cards">
            <Input param={"input something..."}></Input>
            <Button text={"Search"} color={"#FCF8F3"}></Button>
            <div className='Container-for-images'>
                {arrayCards.map(photo => (
                    <div className="images" key={photo.id}>
                        <img src={photo.image} className='imagewidth' alt="" />
                        <p className="title-card">{photo.title}</p>
                        <p className="price">{photo.price}</p>
                        <button className='button-in-card AddToBasket'
                           onClick={()=>HandleAddtoBasket(photo.id, photo.title,photo.price,photo.image)} >
                            {t('Shop.Add to basket')}
                        </button>
                        <Popup trigger ={<button className='button-in-card open-redact-menu'>{t('Shop.Redact')}</button>} modal nested>{
                            close=>(
                                <div className='modal-image'>
                                    <input type="button" onClick={() => close()}> 
                                   
                                    </input>
                                    <div>
                                        <p>{t('Shop.select your image')}</p>
                                      <select id="selectimage" onChange={HandeSetImageCard}>
                                        <option value="/images/imag1.png">1</option>
                                        <option value="/images/imag2.png">2</option>
                                        <option value="/images/imag3.png">3</option>
                                        <option value="/images/imag4.png">4</option>
                                        <option value="/images/imag5.png">5</option>
                                        <option value="/images/imag6.png">6</option>
                                      </select>
                                    </div>
                                    <div>
                                        <p>{t('Shop.Write title of the card')}</p>
                                        <input type="text" className='modal-input input-title-card' onChange={HandleSetTitleCard}/>
                                    </div>
                                    <div>
                                        <p>{t('Shop.Lets set a price')}</p>
                                        <input type="text" className='modal-input input-price-card' onChange={HandleSetPriceCard}/>
                                    </div>
                                    <input type="button" value='Save' className='Save-card' onClick={() => HandeUpdateCard(photo.id)}/>                         
                                </div>
                            )
                        }
                        </Popup>
                    </div>
                ))}
            </div>
        </div>
    );
}