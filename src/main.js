import HeaderComponent from "./view/header-component.js";
import MovieFormComponent from "./view/movie-form-component.js";
import MovieFilterComponent from "./view/movie-filter-component.js";
import { render, RenderPosition } from "./framework/render.js";
import MovieModel from "./model/movie-model.js";
import MovieListPresenter from "./presenter/movie-list-presenter.js";

const appContainer = document.querySelector('.container');
const formContainer = document.querySelector('.movie-form');
const filterContainer = document.querySelector('.movie-filter');
const moviesListContainer = document.querySelector('.movie-list');

const movieModel = new MovieModel();
const movieListPresenter = new MovieListPresenter({
    listContainer: moviesListContainer,
    movieModel,
});

render(new HeaderComponent(), appContainer, RenderPosition.AFTERBEGIN);
render(new MovieFormComponent(), formContainer);
render(new MovieFilterComponent(), filterContainer);

movieListPresenter.init();