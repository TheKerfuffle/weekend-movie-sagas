import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>

        <div className="nav">
          <ul>
            <li><Link className="link" to="/add-movie">Add Movie</Link></li>
          </ul>
        </div>

        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details" >
          <Details />
        </Route>

        {/* Add Movie page */}
        <Route path="/add-movie" >
          <AddMovie />
        </Route>

      </Router>
    </div>
  );
}


export default App;
