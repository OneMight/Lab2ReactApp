import './BasketCards.css';

export default function BasketCards({ cards, deleteFunction }) {
    return (
        <div className="Container-for-cards">
            <h1>Basket</h1>
            {(!cards || cards.length === 0) ? (
                <p>Nothing in Basket</p>
                
            ) : (
                <div className='Container-for-images'>
                    {cards.map((photo, index) => (
                        <div className="images" key={index}>
                            <img src={photo.image} className='imagewidth' alt="" />
                            <p className="title-card">{photo.title}</p>
                            <p className="price">{photo.price}</p>
                            <button className='button-in-card delete-Button' onClick={deleteFunction}>
                                Delete from basket
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}