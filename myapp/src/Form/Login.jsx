import { useState } from 'react';
import { useNavigate }  from 'react-router-dom';
import './Card.css';


const Login = () => {
  const navigate = useNavigate(); // Call useNavigate as a function       
  
  const [input, setInput] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', input);
    // Add authentication logic here
    // Save form data to localStorage
    localStorage.setItem('user', JSON.stringify(input));
    navigate('/signup'); // Make sure the path is lowercase
  };

  return (
    <div className='card'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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

        <button type='submit'>Login</button>
      </form>
    </div>
  );
};
 
export default Login;




