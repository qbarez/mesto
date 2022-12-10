export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(item) {
        this._container.prepend(item)
    }

    renderItem() {
        this._renderedItems.forEach(el => {
            this._renderer(el)
        })
    }
}