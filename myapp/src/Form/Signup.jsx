import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Card.css'


const Signup = () => {
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const [signupStatus, setSignupStatus] = useState(""); // Added for feedback
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store user data in localStorage
    const userData = { 
      name: input.name, 
      email: input.email, 
      password: input.password 
    };
    localStorage.setItem("user", JSON.stringify(userData));

    console.log('Signup submitted:', userData);
    setSignupStatus("Signup successful! You can now log in.");
    
    // Redirect to a login page or home
    navigate('/login'); // Change this as needed
  };

  return (
    <div className='card'>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
        <input
          type='text'
          name='name'
          value={input.name}
          onChange={handleChange}
          placeholder='Enter your name'
          required
        />
        </div>
        <br /><br />

<div className='form-group'>
        <input
          type='email'
          name='email'
          value={input.email}
          onChange={handleChange}
          placeholder='Enter your email'
          required
        />
        </div>
        <br /><br />

        <div className='form-group'>
        <input
          type='password'
          name='password'
          value={input.password}
          onChange={handleChange}
          placeholder='Enter your password'
          required
        />
        </div>
        <br /><br />

        <button type='submit'>Signup</button>
      </form>

      {signupStatus && <p>{signupStatus}</p>} {/* Display status messages */}
    </div>
  );
};

export default Signup;





