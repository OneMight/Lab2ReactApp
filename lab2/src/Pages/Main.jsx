import Header from '../Components/header/header.jsx'
import Footer from '../Components/footer/footer.jsx'
import Slider from '../Components/SliderCont/Slider.jsx';

export default function Main({count}){


    return(
        <>
        <Header count ={count}/>
        <Slider/>
        <Footer/>
        </>
    )
}