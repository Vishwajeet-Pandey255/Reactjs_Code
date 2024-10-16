import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Food from './Food';
import './Style.css'

const Home1 = ({ cartData, SetCartData }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch('http://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.recipes);
      });
  }, []);

  return (
    <div>
      <Food apiData={apiData} cartData={cartData} SetCartData={SetCartData} />
    </div>
  );
};

// Define prop types
Home1.propTypes = {
  cartData: PropTypes.array.isRequired, // Adjust type as necessary
  SetCartData: PropTypes.func.isRequired, // Assuming it's a function
};

export default Home1;
