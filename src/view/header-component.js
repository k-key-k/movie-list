import { AbstractComponent } from "../framework/view/abstract-component.js";

function createHeaderComponent() {
    return (
        `
        <div>
        <h1>Коллекция Фильмов</h1>

        <section>
            <p>Используйте эту коллекцию для отслеживания фильмов, которые вы посмотрели или хотите посмотреть. Отмечайте фильмы как просмотренные и фильтруйте по статусу.</p>
        </section>
        </div>
        `
    );
}

export default class HeaderComponent extends AbstractComponent {
    get template() {
        return createHeaderComponent();
    }
}