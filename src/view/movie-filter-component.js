import { AbstractComponent } from "../framework/view/abstract-component.js";

function createMovieFilterComponent() {
    return (
        `
        <div>
        <h2>Фильтры</h2>

            <fieldset>
                <legend>Статус:</legend>
                <label><input type="radio" name="status-filter" value="all" checked /> Все</label>
                <label><input type="radio" name="status-filter" value="watched" /> Просмотренные</label>
                <label><input type="radio" name="status-filter" value="unwatched" /> Непросмотренные</label>
            </fieldset>

            <label><input type="checkbox" id="favorite-filter" /> Показывать только избранное</label>
            </div>
            `
    );
}

export default class MovieFilterComponent extends AbstractComponent {
    get template() {
        return createMovieFilterComponent();
    }
}