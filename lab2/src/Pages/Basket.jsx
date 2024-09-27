import Header from '../Components/header/header.jsx';
import Footer from '../Components/footer/footer.jsx';

export default function Basket(props){


    return(
        <>
        <Header count={props.count}/>
        <Footer/>
        </>
    
    )
}