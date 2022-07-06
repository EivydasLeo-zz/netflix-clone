import './styles/main.scss';
import MovieList from './components/MovieList';
import Banner from './components/Banner';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
      </Router>
      <Banner />
      <MovieList />
    </div>
  );
};

export default App;
