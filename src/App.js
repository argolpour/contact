import './App.css';
import {BrowserRouter as Router ,Route ,Switch} from 'react-router-dom';
import Header from './components/UI/Header';
import Home from './pages/Home/Home';
import ContactState from './context/ContactState';
import CreateContact from './pages/CteateContact.js/CreateContact';
function App() {
  return (
  <Router>
    <ContactState>
    <Header/>
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/create" exact>
        <CreateContact/>
      </Route>
    </Switch>
    </ContactState>
  </Router>
  );
}

export default App;
