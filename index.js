import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store/store';
import  {ChakraProvider} from '@chakra-ui/react'
import { Provider } from 'react-redux'; 
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
      <App />
      </ChakraProvider>
      </Provider>    
  </React.StrictMode>
);


