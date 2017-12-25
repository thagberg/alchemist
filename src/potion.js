class Potion {
    constructor(id, components) {
        this.id = id;
        this.components = components;
        this.product = null;
    }

    applyComponents() {
        for (let i = 0; i < this.components.length; i++) {
            this.product = this.components[i].operation(this.product);
        }
        return this.product;
    }
}

class Component {
    constructor(parent, child) {
        this.parent = parent;
        this.child = child;
    }

    operation(state) {
        throw "Must implmement operation method";
    }
}

module.exports = {Potion, Component};