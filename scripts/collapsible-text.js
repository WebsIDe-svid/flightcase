function closeChild() {
    this.classList.toggle('open', false);
}

function closeAllChildren() {
    let collapsables = this.parentNode.children;

    for (let collapsable of collapsables) {
        closeChild.call(collapsable);
    }
}

function openChild() {
    closeAllChildren.call(this);
    this.classList.toggle('open', true);
}

function toggleChild() {
    if (this.classList.contains('open')) {
        closeChild.call(this);
    }
    else {
        openChild.call(this);
    }
}
