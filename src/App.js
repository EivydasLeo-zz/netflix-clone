import "./styles/main.scss";
import MovieList from "./components/MovieList";
import Banner from "./components/Banner";
import Nav from "./components/Nav";


const App = () => {

  return (
    <div className="wrapper">
        <Nav/>
        <Banner />
       <MovieList />
    </div>
  );
}

export default App;
