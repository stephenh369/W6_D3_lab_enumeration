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


module.exports = Cinema;
