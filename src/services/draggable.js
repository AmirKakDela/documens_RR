export class Draggable {
    constructor() {}
    node;

    getNode() {
        return this.node;
    }

    setNode(className, innerHTML) {
        this.node = document.createElement('div');
        this.node.className = className + ' draggable-active';
        this.node.innerHTML = innerHTML;
        document.body.appendChild(this.node);
        return this.node;
    }

    removeNode() {
        this.node.remove();
    }
}
