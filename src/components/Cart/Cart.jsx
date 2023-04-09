import React from 'react';
import './Cart.css';
const Cart = ({cart,handleRemoveFromCart}) => {
    let messege;
    if(cart.length === 0){
        messege= <p className={cart.length > 0 ? 'cyan' : 'red' }>Please add some products</p>
    }
    else{
        messege= <div>
            <h3>You are selected some items</h3>
        </div>
    }
    return (
        <div className='cart-summury-container'>
            <h3>Order Summury:{cart.length}</h3>

            {messege}
            {
                cart.length === 2 ? 'this is tow items' : 'thi is not tow items'
            }
            {
                cart.length === 3 && <p className='cyan'>this is three items</p> 
            }
            {
                cart.length === 4 ||  <p className='pink'>there are no four items</p>
            }
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                >{tshirt.name} <button
                 onClick={()=> handleRemoveFromCart(tshirt._id)}>Remove</button>
                 </p>)
            }
        </div>
    );
};

export default Cart;

// conditional rendering 
// 1. use if or if else to set a variable that will contain an Element, components;
// 2. ternary operator : conditon ? 'for ture' : 'for false'
// 3. logical && : (if the condition is true then the next things will be displayed)
// 4. logical ||: (if the condition is false then the next things will be displayed)


// conditional css: 
// 1.use ternary 
// 2.ternary inside template string