import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './AddToCart/Context.jsx';
// import Context from './ReactHooks/UseContext/Context.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
      <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
