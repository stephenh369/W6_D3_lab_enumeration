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



module.exports = Cinema;
