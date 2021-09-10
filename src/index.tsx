import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './layouts/App';
import reportWebVitals from './reportWebVitals';
import client from './utils/apollo';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <App />
    </BrowserRouter>
  </ApolloProvider>
  ,
  document.getElementById('root')
);
reportWebVitals();
