import "./styles/main.scss";
import MovieList from "./components/MovieList";
import Banner from "./components/Banner";


const App = () => {

  return (
    <div className="wrapper">
        <Banner />
       <MovieList />
    </div>
  );
}

export default App;
