// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = "brown";
var favoritQuote = "I'm not old, I'm only " + age;
// Arrays
var pets = ["cat", "dog", "pig"];
var pets2 = ["lion", "dragon", "lizard"];
// Object
var wizard = {
    a: "John"
};
// null and undefined
var meh = undefined;
var mah = null;
// tuple
var basket;
basket = ["basketball", 5];
// enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
// Any - can be anything
var whatever = "nooooo way";
whatever = Size[3];
// void
var sing = function () {
    console.log("lalala");
};
// never - ensures a function never returns
// ensures that it is never true
var error = function () {
    throw Error("oops");
};
// makes sure that the robots argument has the
// count: number, type: string, and magic: string properties
var fightRobotArmy = function (robots) {
    console.log("Fight!");
};
var dog = {};
// function
var fightRobotArmy2 = function (robots) {
    console.log("Fight!");
};
// classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "lalalala";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("rawrrr");
lion.greet();
// union - it could be this or that
var confused = "hello";
