//Here is your key: 1494c80c
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard'

const API_URL= 'http://www.omdbapi.com?apikey=1494c80c';


const movie1= 
  {
    "Title": "The Making of 'Working Title'",
    "Year": "1992",
    "imdbID": "tt2288099",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc3MjI1NzQ0NF5BMl5BanBnXkFtZTcwODg1MDI1Nw@@._V1_SX300.jpg"
}


const App= () => {

  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) =>{
    const response = await fetch (`${API_URL}&s={title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  const [searchTerm, setSearchTerm]= useState('');

  useEffect(()=> {
    searchMovies('spiderman');
  },[]);
  return (
    <div className="app">
      <h1>
        Movie Land
      </h1>
      <div className='search'>

        <input placeholder='Search For Movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
        
        />
        
        <img src={SearchIcon} onClick={() => searchMovies(searchTerm)}
        />
        
      </div>

      {movies?.length > 0
          ? (
            <div className='container'>
              {movies.map((movie) =>(
                <MovieCard movie={movie} />
              ))}

              
            </div>
      
          ) : (
            <div className='empty'>

              <h2> No Moives Found</h2>
              
            </div>
          )
      }




    </div>
  );

 


}

export default App;
