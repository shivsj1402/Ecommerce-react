import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom' ;
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import {store, persistor} from './redux/store';
import { ApolloProvider }from 'react-apollo';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-boost'
import {typeDefs, resolvers} from './graphql/resolvers'

const httplink = createHttpLink({
  uri: 'https://crwn-clothing.com'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link:httplink,
  cache,
  typeDefs,
  resolvers
});

client.writeData({
  data:{
    cartHidden: true,
    cartItems: [],
    itemCount: 0
  }
})

// client.query({
//   query: gql`
//   {
//     collection (id :"cjwuuj5bz000i0719rrtw5gqk"){
//     title
//     items{
//       name
//     }
//   }
//   }
//   `
// }).then(res=> console.log(res))

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
          <App />
          </PersistGate>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

