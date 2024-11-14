import React from 'react';
import CakeCard from '../components/CakeCard/CakeCard'; // Relative path
import './Home.css';

const imagePath = process.env.PUBLIC_URL + '/images/hero-background.jpg';

function Home() {
  const cakes = [
    {
        name: "Chocolate Fudge Cake",
        description: "Rich chocolate cake with fudge frosting.",
        price: 255.99,
        image: "/images/chocolate-fudge-cake.jpg", // Replace with actual image paths
    },
    {
        name: "Strawberry Vanilla Cake",
        description: "Light and airy vanilla cake with fresh strawberries.",
        price: 225.50,
        image: "/images/strawberry-vanilla-cake.jpg",
    },

    {
        name: "Red Velvet Cake",
        description: "Classic red velvet with cream cheese frosting.",
        price: 285.00,
        image: "/images/red-velvet-cake.jpg",
    },

];

  return (


    <div>

      <h1>Home Page</h1>

      <div className="home-container">
        <div className="hero-section" style={{ backgroundImage: `url(${imagePath})` }}>
                <h1>Welcome to Cakeberries</h1>
                <p>Delicious handcrafted cakes for every occasion.</p>
                {/* Add a "Shop Now" button or other call to action */}
                <button className="shop-now-button">Shop Now</button>

      </div>

      <div className="cake-list"> {/* Add a container for the cards */}
                {cakes.map((cake) => (
                    <CakeCard key={cake.name} cake={cake} />
                ))}

      </div>

    </div>
  </div>
  );
}

export default Home;