import { useState } from 'react';

const Signup = () => {
  const [input, setInput] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted:', input);
    // Add signup logic here
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={input.name}
          onChange={handleChange}
          placeholder='Enter your name'
          required
        />
        <br /><br />

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

        <button type='submit'>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
