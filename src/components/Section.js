export default class Section {
    constructor({ items, renderer }, selector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._selector = selector;
    }

    addItem(item) {
        this._selector.prepend(item)
    }

    renderItem() {
        this._renderedItems.forEach(el => {
            this._renderer(el)
        })
    }
}