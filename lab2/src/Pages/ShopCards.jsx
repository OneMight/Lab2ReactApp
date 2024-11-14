import Header from '../Components/header/header.jsx';
import Footer from '../Components/footer/footer.jsx';
import Cards from '../Components/Cards/Cards.jsx';

export default function ShopCards({ count, addToBasket }) {
    return (
        <>
            <Header count={count} />
            <Cards addToBasket={addToBasket} />
            <Footer />
        </>
    );
}