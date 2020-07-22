const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titleList = function() {
  const result = this.films.map((film) => {
    return film.title;
  });
  return result;
};

Cinema.prototype.findFilmByTitle = function(title) {
  const foundFilm = this.films.find((film) => {
    if (film.title === title) {
      return film;
    } 
  });
  return foundFilm;
};

Cinema.prototype.filterFilmsByGenre = function(genre) {
  const foundFilms = this.films.filter((film) => {
    return film.genre === genre 
  });
  return foundFilms;
};

Cinema.prototype.filterFilmsByYear = function(year) {
  const foundFilms = this.films.filter((film) => {
    return film.year === year
  });
  return foundFilms;
};

Cinema.prototype.filmOver = function(minutes) {
  const result = this.films.every((films) => {
    if (films.length >= minutes) {
      return true;
    }
  });
  return result;
};

Cinema.prototype.totalRunningTime = function() {
  const result = this.films.reduce((acc, film) => {
    return acc + film.length;
  }, 0);
  return result;
};

Cinema.


module.exports = Cinema;
