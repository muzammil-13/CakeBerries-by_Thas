import React from 'react';
import './CakeCard.css'; // Import the CSS file


function CakeCard({ cake }) {
    return (
        <div className="cake-card">
            <img src={cake.image} alt={cake.name} />
            <h3>{cake.name}</h3>
            <p>{cake.description}</p>
            <p>Price: ₹{cake.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default CakeCard;


