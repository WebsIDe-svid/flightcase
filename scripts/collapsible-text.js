function changeExpander(new_content) {
    let expander = this.querySelector('.expander');
    expander.innerText = new_content;
}

function closeChild() {
    this.classList.toggle('open', false);
    changeExpander.call(this, '+');
}

function closeAllChildren() {
    let collapsibles = this.parentNode.querySelectorAll('.collapsible');

    for (let collapsible of collapsibles) {
        closeChild.call(collapsible);
    }
}

function openChild() {
    closeAllChildren.call(this);
    this.classList.toggle('open', true);
    changeExpander.call(this, '⎯');
}

function toggleChild() {
    if (this.classList.contains('open')) {
        closeChild.call(this);
    }
    else {
        openChild.call(this);
    }
}
