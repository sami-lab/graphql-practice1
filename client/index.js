import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import SongList from './components/songList';
import SongDetails from './components/songDetails';
import App from './components/App';
import SongCreate from './components/songCreate';

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
});
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="song/new" component={SongCreate} />
          <Route path="song/:id" component={SongDetails} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
