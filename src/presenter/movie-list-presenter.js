import MovieCardComponent from "../view/movie-card-component.js";
import { render } from "../framework/render.js";

export default class MovieListPresenter {
    #listContainer = null;
    #movieModel = null;
    #listMovies = [];

    constructor({listContainer, movieModel}) {
        this.#listContainer = listContainer;
        this.#listMovies = movieModel;
    }

    init() {
        this.#listMovies = [...this.#listMovies.movies];
        this.#renderMovieList();
    }

    #renderMovieList() {
            
  }
}