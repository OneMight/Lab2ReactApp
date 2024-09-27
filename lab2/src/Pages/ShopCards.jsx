import Header from '../Components/header/header.jsx';
import Footer from '../Components/footer/footer.jsx';
import Cards from '../Components/Cards/Cards.jsx';

export default function ShopCards({count,setcountofproduct}){
    return(
        <>
            <Header count = {count}/>
            <Cards setcountofproduct={setcountofproduct}/>
            <Footer/>
        </>
    )
}