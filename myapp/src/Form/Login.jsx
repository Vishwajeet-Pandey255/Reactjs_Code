import  { useState } from 'react';

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', input);
    // Add authentication logic here
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          value={input.email}
          onChange={handleChange}
          placeholder='Enter your email'
          required
        />
        <br /><br />
        
        <input
          type='password'
          name='password'
          value={input.password}
          onChange={handleChange}
          placeholder='Enter your password'
          required
        />
        <br /><br />

        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
