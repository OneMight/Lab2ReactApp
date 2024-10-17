import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Basket from './Pages/Basket.jsx';
import Shop from './Pages/ShopCards.jsx';
import { useState} from 'react';
import Main from './Pages/Main.jsx';
import Regform from './Pages/Regform.jsx'
import Logform from './Pages/LoginingForm.jsx'
export default function App() {
    const [productCount, setProductCount] = useState(0);
    const [addedCards, setAddedCards] = useState([]);

 

    const setCountOfProduct = () => {
        setProductCount((prevState) => prevState + 1);
 
    };

    const deleteCountOfProduct =() =>{
      setProductCount((prevState) => prevState - 1);
    
    }

   const onHandleDeleteproduct = (id) =>{
        const NewCards = addedCards.filter(( Card,index) =>{
            return index !==id
        })
        setAddedCards(NewCards);
    
        deleteCountOfProduct();
    }
      

    const onHandleAddItem = (id, image, title, price) => {
        const newItem = {id, image, title, price };
        setAddedCards((prevState) => [...prevState, newItem]);
        setCountOfProduct();
       
    };

  

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/shop' element={<Shop count={productCount} addToBasket={onHandleAddItem} />} />
                <Route path='/' element={<Main count={productCount} />} />
                <Route path='/Basket' element={<Basket count={productCount} basketCards={addedCards} delete={onHandleDeleteproduct} />} />
                <Route path='/Registration' element={<Regform/>}/>
                <Route path='/Logining' element={<Logform/>}/>
            </Routes>
        </BrowserRouter>
    );
}