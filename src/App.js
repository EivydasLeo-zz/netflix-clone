import MovieItem from "./components/MovieItem";
import requests from "./apis/requests";
import "./styles/main.scss";

const App = () => {

  return (
    <div className="ui container">
            <MovieItem title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <MovieItem title="Trending now" fetchUrl={requests.fetchTrending}/>
            <MovieItem title="Top rated" fetchUrl={requests.fetchTopRated}/>
            <MovieItem title="Action movies" fetchUrl={requests.fetchActionMovies}/>
            <MovieItem title="Comedy movies" fetchUrl={requests.fetchComedyMovies}/>
            <MovieItem title="Horror movies" fetchUrl={requests.fetchHorrorMovies}/>
            <MovieItem title="Romance movies" fetchUrl={requests.fetchRomanceMovies}/>
            <MovieItem title="Documentary movies" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
