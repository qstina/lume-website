import React, { useState } from 'react';
import './ShopAll.css';
import bw1 from './assets/bw1.png'; 
import bw2 from './assets/bw2.png'; 
import bw3 from './assets/bw3.png';
import bw4 from './assets/bw4.png';
import bw5 from './assets/bw5.png';
import flora1 from './assets/flora1.png';
import flora2 from './assets/flora2.png';
import flora3 from './assets/flora3.png';
import flora4 from './assets/flora4.png';
import flora5 from './assets/flora5.png';
import leb1 from './assets/leb1.png';
import leb2 from './assets/leb2.png';
import leb3 from './assets/leb3.png';
import leb4 from './assets/leb4.png';
import leb5 from './assets/leb5.png';
import mayau1 from './assets/mayau1.png';
import mayau2 from './assets/mayau2.png';
import mayau3 from './assets/mayau3.png';
import mayau4 from './assets/mayau4.png';
import mayau5 from './assets/mayau5.png';

function ShopAll() {

  const [displaySet, setDisplaySet] = useState('bw'); // Default set to display

  const handleSelectChange = (event) => {
    setDisplaySet(event.target.value);
  };

  const productDetails = {
    bw: [
      { name: 'Yes or no', description: 'A toast to indecisive people.' },
      { name: 'Revocation', description: 'Last minute plans.' },
      { name: 'Le cœur', description: 'The heart wants what it wants.' },
      { name: 'aLpHabEt', description: 'A basic need.' },
      { name: 'The Reason', description: 'Your support system in hand.' },
    ],
    flora: [
      { name: 'Ao haru', description: 'Everyone\'s love.' },
      { name: 'Iris', description: 'A treasure at the end of the rainbow bridge.' },
      { name: 'Softspoken', description: 'For the pink lovers.' },
      { name: 'Patchwork', description: 'With flowers as pretty as you.' },
      { name: 'Colorado\'s Wildflower', description: 'Inspired by them.' },
    ],
    mlim: [
      { name: 'Stand firm', description: 'You are the main character.' },
      { name: 'Deserving', description: 'As much as everyone else does.' },
      { name: 'Humanity', description: 'Be kind.' },
      { name: 'Recharge', description: 'yolo.' },
      { name: 'Confidence', description: 'The primary key in life.' },
    ],
    neko: [
      { name: 'Catrum', description: 'Daily hissy fits from neko.' },
      { name: 'Cipicapadubidaba', description: 'Spiral of cats for you.' },
      { name: 'Summer Sunshine', description: 'Did you know cats lay in the sun to absorb pawsitive energy.' },
      { name: 'King of hearts', description: 'The stealer of our hearts.' },
      { name: 'Can\'t get enough', description: 'Have more of our main character, Neko.' },
    ],
  };

  const renderImages = () => {
    switch (displaySet) {
      case 'bw':
        return [bw1, bw2, bw3, bw4, bw5];
      case 'flora':
        return [flora1, flora2, flora3, flora4, flora5]; 
      case 'mlim':
          return [leb1, leb2, leb3, leb4, leb5];
        case 'neko':
          return [mayau1, mayau2, mayau3, mayau4, mayau5];
      default:
        return [];
    }
  };

  return (
    <div className="shop-container">
      <h1 className="shop-header bold-text">Products</h1>



      <div className="button-container" style={{width: '100%', height: '70px'}}> 
      <label htmlFor="setSelect">Collections</label>
        <select id="setSelect" value={displaySet} onChange={handleSelectChange}>
          <option value="bw">Pablo's Guernica</option>
          <option value="flora">Efflorescent</option>
          <option value="mlim">Egomania</option>
          <option value="neko">Neko</option>
          </select>
      </div>
      
      <div className="shop-content">
      {renderImages().map((image, index) => (
          <div key={index} className="product-item">
          <img src={image} alt={`product-${index}`} className="shop-image" />
          {productDetails[displaySet] && (
            <div className="product-details">
              <h3>{productDetails[displaySet][index].name}</h3>
              <p>{productDetails[displaySet][index].description}</p>
            </div>
          )}
        </div>
        ))}
      </div>
    </div>
  );
}

export default ShopAll;
