// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = "brown";
let favoritQuote: string = `I'm not old, I'm only ${age}`;

// Arrays
let pets: string[] = ["cat", "dog", "pig"];
let pets2: Array<string> = ["lion", "dragon", "lizard"];

// Object
let wizard: object = {
  a: "John",
};

// null and undefined
let meh: undefined = undefined;
let mah: null = null;

// tuple
let basket: [string, number];
basket = ["basketball", 5];

// enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: string = Size[2];

// Any - can be anything
let whatever: any = "nooooo way";
whatever = Size[3];

// void
let sing = (): void => {
  console.log("lalala");
};

// never - ensures a function never returns
// ensures that it is never true
let error = (): never => {
  throw Error("oops");
};

// interface - can be used with objects
// capital letter is the standard for interface
interface RobotArmy {
  count: number;
  type: string;
  magic?: string; //? means optional
}
// makes sure that the robots argument has the
// count: number, type: string, and magic: string properties
let fightRobotArmy = (robots: RobotArmy): void => {
  console.log("Fight!");
};

// type assertion
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}
let dog = {} as CatArmy;

// function
let fightRobotArmy2 = (robots: RobotArmy): void => {
  console.log("Fight!");
};

// classes
class Animal {
  private sing: string = "lalalala";
  constructor(sound: string) {
    this.sing = sound;
  }

  greet(): string {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal("rawrrr");
lion.greet();

// union - it could be this or that
let confused: string | number | boolean = "hello";
