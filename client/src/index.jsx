import React from 'react';
import ReactDOM from 'react-dom/client';
import './Header.css';
import App from './App';
import './Items.css';
import './FullProduct.css';
import { ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'


const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </React.StrictMode>,
);