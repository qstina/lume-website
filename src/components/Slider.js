import React from 'react';
import './Home.css'; // Import your Slider-specific CSS file
import collection1 from './assets/collection (1).png';
import collection2 from './assets/collection (2).png';
import collection3 from './assets/collection (3).png';
import collection4 from './assets/collection (4).png';


const Slider = () => {
  const products = [
    {
      id: 1,
      name: "Egomania",
      brand: "Lume's Signature",
      imageUrl: collection2,
    },
    {
      id: 2,
      name: "Efflorescent",
      brand: "Floral",
      imageUrl: collection3,
    },
    {
      id: 3,
      name: "Pablo's Guernica",
      brand: "Black&White",
      imageUrl: collection4,
    },
    {
      id: 4,
      name: "Neko",
      brand: "Cat!",
      imageUrl: collection1,
    },
  ];

  return (
    <div className="slider-container">
      <h3 className="slider-heading">Featured Products</h3>
      <div className="slider">
        {products.map((product) => (
          <div key={product.id} className="slider-item">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-details">
              <h5 className="brand">{product.brand}</h5>
              <p className="name">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="see-more-button" onClick={() => window.location.href = '/shop-all'}>
        See More
      </button>
    </div>
  );
};

export default Slider;
