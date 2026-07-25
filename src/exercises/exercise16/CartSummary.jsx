import React, { useContext } from 'react';
import CartContext from './CartContext';

const CartSummary = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price,
        0
    );

    return (
        <div>
            <h2>Cart Summary</h2>
            <p>Total Items: {cartItems.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}{' '}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CartSummary;
