export class Draggable {
    constructor() {}

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

    onDrag(e) {
        // const paddingRight = parseInt(window.getComputedStyle(this.node).paddingRight);
        // const height = parseInt(window.getComputedStyle(this.node).height);
        this.node.style.top = e.y + this.node.offsetHeight + 'px';
        this.node.style.left = e.x - this.node.offsetWidth / 2 + 'px';
    }

    onDragStart(e, dragItem) {
        e.dataTransfer.setData('dragItem', JSON.stringify(dragItem));
        e.dataTransfer.setDragImage(e.target, window.outerWidth, window.outerHeight);
        const dragParent = e.currentTarget.parentNode.parentNode.parentNode;
        this.toggleDropZones(dragParent.classList, 'none');
        this.setNode(dragParent.className, dragParent.innerHTML);
        dragParent.classList.add('draggable');
    }

    onDragEnd(e) {
        const dragParent = e.currentTarget.parentNode.parentNode.parentNode;
        dragParent.classList.remove('draggable');
        this.removeNode();
        this.toggleDropZones(dragParent.classList);
    }

    onDragOver(e) {
        if (!e.target.classList.contains('draggable')) e.target.classList.add('droppable');
    }

    onDragLeave(e) {
        e.target.classList.remove('droppable');
    }

    toggleDropZones(parentClassName, pointerEvents = 'auto') {
        let stringClassName = '';
        parentClassName.forEach((item) => (stringClassName += '.' + item));
        document.querySelectorAll(stringClassName).forEach((parent) => {
            parent.childNodes.forEach((child) => {
                if (!child.classList.contains('document__actions')) {
                    child.style.pointerEvents = pointerEvents;
                }
            });
        });
    }
}
