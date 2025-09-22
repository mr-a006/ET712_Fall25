/*
Aqeel Hussain
Homework 3 – Objects and exception handling in JS
*/
class Movie {
  constructor(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }

  getDetails() {
    return `${this.title} (${this.year}), directed by ${this.director}`;
  }
}

class MovieCollection {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    if (movie instanceof Movie) {
      this.movies.push(movie);
    } else {
      throw new Error("Only instances of Movie can be added to the collection.");
    }
  }

  removeMovie(title) {
    const movieIndex = this.movies.findIndex(movie => movie.title === title);
    
    if (movieIndex === -1) {
      throw new Error(`Movie titled "${title}" not found in the collection.`);
    }
    
    this.movies.splice(movieIndex, 1); 
  }

  showMovies() {
    if (this.movies.length === 0) {
      throw new Error("No movies in the collection to display.");
    }
    
    console.log("Movies in Collection:");
    this.movies.forEach(movie => console.log(movie.getDetails()));
  }
}

try {

  const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
  const movie2 = new Movie("The Matrix", "Wachowskis", 1999);

  const collection = new MovieCollection();

  collection.addMovie(movie1);
  collection.addMovie(movie2);

  collection.showMovies();

  collection.removeMovie("Inception");

  collection.showMovies();

  collection.removeMovie("Interstellar");

} catch (error) {
  console.error("Error:", error.message);
}
