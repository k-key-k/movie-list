import { AbstractComponent } from "../framework/view/abstract-component.js";

function createMovieFormComponent() {
    return (
        `
        <div>
        <h2>Добавить Фильм</h2>
            <form id="movie-form">
                <label for="movie-title">Название фильма:</label>
                <input type="text" id="movie-title" placeholder="Например, Начало" required />
                
                <div class="watched-toggle">
                    <label for="movie-status">Отметить как просмотренный:</label>
                    <label class="switch">
                        <input type="checkbox" id="movie-status">
                        <span class="slider"></span>
                    </label>
                </div>

                <button type="submit">Добавить Фильм</button>
            </form>
            </div>
            `
    );
}

export default class MovieFormComponent extends AbstractComponent {
    get template() {
        return createMovieFormComponent();
    }
}