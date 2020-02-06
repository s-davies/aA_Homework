const titleize = function(names, callback) {
    let titleized = names.map(name => name[0].toUpperCase() + name.slice(1,name.length));
    callback(titleized);
}

const printCallback = function(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

// titleize(["Mary", "Brian", "Leo"], printCallback);
// Mx.Mary Jingleheimer Schmidt
// Mx.Brian Jingleheimer Schmidt
// Mx.Leo Jingleheimer Schmidt

function Elephant(name, heightInInches, tricks) {
    this.name = name;
    this.heightInInches = heightInInches;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
    let str = `${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`;
    console.log(str);
}

Elephant.prototype.grow = function() {
    this.heightInInches += 12;
}

Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick);
}

Elephant.prototype.play = function() {
    let str = `${this.name} is ${this.tricks[Math.floor(Math.random() * this.tricks.length)]}`;
    console.log(str);
}

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function (elephant) {
    console.log(`${elephant.name} is trotting by!`);
};

// herd.forEach( elephant => {
//     Elephant.paradeHelper(elephant);
// });

const dinerBreakfast = function() {
    let starting_order = "I'd like french toast";
    let add_order = function (food) {
        starting_order = starting_order + ` and ${food} `;
        return starting_order + `please.`;
    }
    return add_order;
}

// let order = dinerBreakfast();



