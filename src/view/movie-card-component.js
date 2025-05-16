import { AbstractComponent } from "../framework/view/abstract-component.js";

function createMovieCardComponent(movie) {
    const {title, status} = movie;
    return (
        `<div class="movie-card">
        <h3>${title}</h3>
        <p>Статус: ${status}</p>
      </div>
      `
    )
}

export default class MovieCardComponent extends AbstractComponent {
    constructor({movie}) {
        super();
        this.movie = movie;
    }

    get template() {
        return createMovieCardComponent(this.movie);
    }
}