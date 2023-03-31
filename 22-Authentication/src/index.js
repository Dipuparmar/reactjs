import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { AUthContextProvider } from './store/auth-context';

ReactDOM.render(

  <AUthContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AUthContextProvider>,
  document.getElementById('root')
);
