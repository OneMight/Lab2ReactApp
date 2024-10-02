import Header from '../Components/header/header.jsx';
import Footer from '../Components/footer/footer.jsx';
import BasketCards from '../Components/BasketCards/BasketCards.jsx';

export default function Basket({ count, basketCards, delete: deleteCount }) {
    return (
        <>
            <Header count={count} />
            <BasketCards cards={basketCards} deleteFunction={deleteCount} />
            <Footer/>
        </>
    );
}