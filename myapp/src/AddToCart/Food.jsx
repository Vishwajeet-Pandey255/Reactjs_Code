import  { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from './Context';

// eslint-disable-next-line no-unused-vars
const Food = ({ apiData, cartData, SetCartData }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = (item) => {
    dispatch({
      type: "add",
      payload: item
    });
  };

  return (
    <div>
      {apiData.map((item) => (
        <div key={item.id} id='card'>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

// Define prop types
Food.propTypes = {
  apiData: PropTypes.array.isRequired, // Assuming apiData is an array
  cartData: PropTypes.array.isRequired, // Assuming cartData is an array
  SetCartData: PropTypes.func.isRequired, // Assuming SetCartData is a function
};

export default Food;
