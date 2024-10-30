import { useEffect, useState } from 'react';
import './Cards.css';
import Popup from 'reactjs-popup';
import { useSelector, useDispatch } from 'react-redux'

export default function Cards({ addToBasket }) {
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
            // dispatch(result);
        };

        fetchCards();

       
    }, []);
    const UpdateCard = (id,newtitle,newprice, newimage) =>{
            
        setArray((prevState) =>{
            const idx = prevState.findIndex((item) => item.id === id);
            const olditem = prevState[idx];
            const newItem = {...olditem, title: newtitle, price:newprice, image: newimage};
            return[...prevState.slice(0,idx),newItem, ...prevState.slice(idx + 1)]

        })
    }
    // const HandleAddtoBasket =(id,title,price,image)=>{
    //     dispatch(addCard({id, title,price, image}))
    // }
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
            <div className='Container-for-images'>
                {arrayCards.map(photo => (
                    <div className="images" key={photo.id}>
                        <img src={photo.image} className='imagewidth' alt="" />
                        <p className="title-card">{photo.title}</p>
                        <p className="price">{photo.price}</p>
                        <button className='button-in-card AddToBasket'
                    >
                            Add to basket
                        </button>
                        <Popup trigger ={<button className='button-in-card open-redact-menu'>Redact</button>} modal nested>{
                            close=>(
                                <div className='modal-image'>
                                    <input type="button" onClick={() => close()}> 
                                   
                                    </input>
                                    <div>
                                        <p>select your image</p>
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
                                        <p>Write title of the card</p>
                                        <input type="text" className='modal-input input-title-card' onChange={HandleSetTitleCard}/>
                                    </div>
                                    <div>
                                        <p>Let's set a price</p>
                                        <input type="text" className='modal-input input-price-card' onChange={HandleSetPriceCard}/>
                                    </div>
                                    <input type="button" value='Save' className='Save-card' onClick={() => UpdateCard(photo.id, titleinput, '$'+priceinput, imageinput)}/>                         
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