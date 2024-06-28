import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NoteDetails from './NoteDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="contents">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/Create">
              <Create/>
            </Route>
            <Route path="/notes/:id">
              <NoteDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
