import React, {useState} from "react";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import "./Components/style.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description:
        'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://www.movieposter.com/posters/archive/main/108/MPW-54246',
      rating: 8.8,
       imgSrc:"https://rukminim1.flixcart.com/image/416/416/kmns7m80/poster/1/m/8/medium-inception-maxi-origins-jumbo-medium-size-painting-poster-original-imagfgb6tgmkgyz8.jpeg?q=70",
    },
    {
      title: 'The Dark Knight',
      description:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://www.movieposter.com/posters/archive/main/79/MPW-39860',
      rating: 9.0,
      imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQoGPzLo9rx7IwIXTSlcy2Q5973N4aThY_gOZ_s-xFIgPMWch"
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState(0);

  const handleTitleFilter = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRateFilter = (event) => {
    setRateFilter(event.target.value);
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <div className="app">
      <Filter
        handleTitleFilter={handleTitleFilter}
        handleRateFilter={handleRateFilter}
      />
      <MovieList movies={filteredMovies} />
      <button onClick={() => addMovie({title: 'New Movie', description: 'New description', posterURL: 'https://via.placeholder.com/150', rating: 7.5})}>Add Movie</button>
    </div>
  );
};

export default App;
