// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {Potion, Component} = require('./src/potion');

class AddComponent extends Component {
    constructor(value, parent, child) {
        super(parent, child);
        this.value = value;
    }

    operation(state) {
        return state + this.value;
    }
}

class MultiComponent extends Component {
    constructor(value, parent, child) {
        super(parent, child);
        this.value = value;
    }

    operation(state) {
        return state * this.value;
    }
}

let com1 = new AddComponent(5, null, null);
let com2 = new MultiComponent(3, null, null);
let com3 = new AddComponent(1, null, null);
let pot1 = new Potion(1, [com1, com3, com2]);


let com4 = new AddComponent(6, null, null);
let com5 = new AddComponent(6, null, null);
let com6 = new MultiComponent(3, null, null);
let pot2 = new Potion(2, [com4, com5, com6]);

console.log(pot1.applyComponents());
console.log(pot2.applyComponents());