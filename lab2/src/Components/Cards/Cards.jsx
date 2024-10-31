import { useEffect, useState } from 'react';
import './Cards.css';
import Popup from 'reactjs-popup';
import {  useDispatch } from 'react-redux'
import { useTranslation} from 'react-i18next';
import { addCard,increment,updateCard,setallitems } from '../../store/actions/cardsSlicer';

export default function Cards() {
    const {t} = useTranslation();
    const [arrayCards, setArray] = useState([]);
    const [titleinput, settitle] = useState('');
    const [priceinput, setprice] = useState('');
    const [imageinput, setimage] = useState('');
    const [getinput, setinput] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchCards = async () => {
            const response = await fetch('/Cards.json');
            const result = await response.json();
            setArray(result);
            dispatch(setallitems(result))
            setFilteredCards(result)
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
    const HandlegetInput = (e) =>{
        setinput(e.target.value)
        if(e.target.value===''){
            setFilteredCards(arrayCards)
        }
        else{
            const SearchCards = arrayCards.filter(item => item.title.toLowerCase().includes(getinput.toLowerCase()))
            setFilteredCards(SearchCards)
        }
   
    }

    const SortItemsById = () =>{
        const sorted = [...arrayCards].sort((a, b) => a.id - b.id);
        setFilteredCards(sorted);
        
    }
  

    return (
        <div className="Container-for-cards">
            <div className='search-filter'>

                <input type="text" placeholder={t('Shop.Input')} onChange={HandlegetInput}/>
                <button className='Search-button' onClick={()=>SortItemsById()}>{t('Shop.Filter')}</button>
            </div>
            <div className='Container-for-images'>
                {filteredCards.map(photo => (
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