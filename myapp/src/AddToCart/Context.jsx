import PropTypes from 'prop-types';
import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
    cart: []
};

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case 'remove':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id) // Remove item by id
            };
        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
        <CartContext.Provider value={{ cart: state.cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Add prop types validation
CartProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children is a node
};
  
