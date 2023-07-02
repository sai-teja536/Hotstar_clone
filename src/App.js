import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/Login.js';
import Header from './components/Header.js';
import './App.css';
import Home from './components/Home.js';
import Detail from './components/Detail.js';

function App() {
  return (
    <>
     <Router>
       <Header />
       <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
       </Switch>
     </Router>
    </>
  );
}

export default App;
