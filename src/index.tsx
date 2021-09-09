import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './layouts/App';
import reportWebVitals from './reportWebVitals';
import client from './utils/apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
  ,
  document.getElementById('root')
);
reportWebVitals();
