
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Rewrite from './Pages/RewriteCards.jsx';
import Shop from './Pages/ShopCards.jsx';
import { useState } from 'react';
import Main from './Pages/Main.jsx';
let i = 0;
export default function App(){

  const [productCount, setproductCount] = useState(0);
    
  function setcountofproduct(){
    i++
      setproductCount(i);
  }
  function deletecountofproduct(){
      
      setproductCount(i--);
  }


  return(
    <>


    <BrowserRouter>
      <Routes>
        <Route path='/shop' element={<Shop count ={productCount} setcountofproduct={setcountofproduct}/>}/>
        <Route path='/' element={<Main count ={productCount}/>}/>
       <Route path='/Rewrite' element={<Rewrite count = {productCount}/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

