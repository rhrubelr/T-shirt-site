import React from 'react';
import './Tshirt.css';
const Tshirt = ({tshirt,handleAddToCart}) => {
    const {picture, _id, price, name} = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h3>T-Shirt name: {name}</h3>
            <h4>price: ${price}</h4>
            <h4>Id: {_id}</h4>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;