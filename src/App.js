import React, { useState, useEffect } from 'react';
// import Search from "./Search";

// import API_KEY from './config';
import './App.css';
 import './index';

 const App = () => {
  const [searchResults] = useState([]); //took out setSearchResults
  const [movies, setMovies] = useState([]);
  //  const [selectedMovie, setSelectedMovie] = useState(null);
// Define a function to handle the search
const handleSearch = (searchValue) => {
  // Perform your search logic here and update searchResults state
  // For example, you can fetch data from an API and update searchResults
  // setSearchResults([...newSearchResults]);
}



  useEffect(() => {
    // Fetch a list of popular movies from the API when the component mounts
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=45f74583`)
       .then((response) => response.json())
       .then((data) => setMovies(data.results))
      //  if (data.Search) {
      //   // If the API response contains a 'Search' property, it's an array of movies
      //   setMovies(data.Search);
      // } else {
      //   console.error('Error fetching movies:', data.Error);
      //}
    //})
       .catch((error) => console.error('Error fetching movies:', error));
   }, []);

  

  return (
    <div className="App">
      <header className="App-header">
      <h1>Popular Movies</h1>   
      </header>
      {/* Include the Search component */}
      {/* <Search search={handleSearch} /> */}

      {/* Render search results */}
      <div className="search-results">
        {/* Render search results here */}
      </div>
    </div>
  );
};

export default App;






//       // {/* Render movie components, review forms, etc. */}
  





 


