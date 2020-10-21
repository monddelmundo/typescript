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
