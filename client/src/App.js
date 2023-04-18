import './App.css';
import Landing from './components/pages/Landing.js';
import Sliders from './components/pages/Sliders.js';
import Quests from './components/pages/Quests';
import SignIn from './components/pages/SignIn.js';
import Signup from './components/pages/Signup';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <Router>
      <div className="App">
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sliders" element={<Sliders />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </ApolloProvider>
      </div>
    </Router>
  );
}

export default App;
