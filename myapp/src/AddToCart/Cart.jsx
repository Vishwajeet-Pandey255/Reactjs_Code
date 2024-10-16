import { useContext } from 'react';
import { CartContext } from './Context';
import './Style.css';


const Cart = () => {
  const { cart, dispatch } = useContext(CartContext); // Access cart and dispatch
  
  const handleRemove = (id) => {
    // Dispatch an action to remove the item by id
    dispatch({ type: 'remove', payload: { id } });
  };

  return (
    <div id='card'>
      <h2>Cart Items</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className='cart-item'>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <button onClick={() => handleRemove(item.id)}>Remove</button> {/* Remove button */}
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;
