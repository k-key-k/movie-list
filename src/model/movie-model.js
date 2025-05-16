import { movies } from "../mock/mock.js";

export default class MovieModel {
    #listmovie = movies;

    get movies() {
        return this.#listmovie;
    }
}