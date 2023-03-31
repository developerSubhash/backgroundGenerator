const inputFirstEl = document.getElementById("input-first");
const inputSecondEl = document.getElementById("input-second");
const h3El = document.querySelector("h3");
const bodyEl = document.querySelector("body");
const button = document.querySelector(".btn");

bodyEl.style.background = `linear-gradient(to right, ${inputFirstEl.value},${inputSecondEl.value})`;

h3El.textContent = `linear-gradient(to right, ${inputFirstEl.value},${inputSecondEl.value})`;

const backgroundColorChanger = function () {
  bodyEl.style.background = `linear-gradient(to right, ${inputFirstEl.value},${inputSecondEl.value}`;
  h3El.textContent = `${bodyEl.style.background}`;
};

inputFirstEl.addEventListener("input", backgroundColorChanger);
inputSecondEl.addEventListener("input", backgroundColorChanger);

const randomNumberGenerator = function () {
  const rgbNumber1 = [];

  for (let i = 0; i < 6; i++) {
    if (!rgbNumber1 || rgbNumber1 === rgbNumber1) {
      rgbNumber1.push(Math.trunc(Math.random() * 255 + 1));
    }
  }

  bodyEl.style.background = `linear-gradient(to right, rgb(${rgbNumber1[0]},${rgbNumber1[1]},${rgbNumber1[2]}),rgb(${rgbNumber1[3]},${rgbNumber1[4]},${rgbNumber1[5]})`;
  h3El.textContent = `${bodyEl.style.background}`;
};

button.addEventListener("click", randomNumberGenerator);

/*
function testing() {
  console.log("testing 1 2 3");
}

window.testing();

let userValid = "The player would move ";
console.log(userValid ? "access grandted" : "access denied");

const game = function (directions) {
  switch (directions) {
    case "forward":
      userValid = userValid + "forward";
      break;
    case "backward":
      userValid = userValid + "backward";
      break;
    case "left":
      userValid = userValid + "left";
      break;
    case "right":
      userValid = userValid + "right";
      break;
    default:
      userValid = userValid + "stand still";
  }
  return userValid;
};

console.log(game("dsds"));

function experiencePoints() {
  if (winBattle()) {
    return 10;
  } else {
    return 10;
  }
}

const winBattle = false;

const experience = winBattle ? 10 : 1;

console.log(experience);

const player = {
  playerName: "Sally",
  experienceGained: 100,
  wizardLevel: false,
};

console.log(player);

const {
  playerName: mainHero,
  experienceGained: levelRequiered,
  wizardLevel: wizardMastery,
} = player;
console.log(mainHero, levelRequiered, wizardMastery);

const sum = (a, b) => a + b;
console.log(sum(44, 10));

const whereAmI = (username, location) =>
  username && location ? "I am not lost" : "I am totally lost";

console.log(whereAmI("", "delhi"));

const first = function () {
  const greet = "Hello";
  const second = function () {
    console.log(greet);
  };

  return second;
};

const newFunction = first();
newFunction();

const currying = (a) => (b) => a * b;

const multiply8 = currying(8);

console.log(multiply8(5));
console.log(multiply8(2));
console.log(multiply8(3));
console.log(multiply8(4));

const addTo = (x) => (y) => x + y;
var addToTen = addTo(10);
console.log(addToTen(3));

const addtion = function (...numbers) {
  return numbers.reduce((start, current) => start + current, numbers[0]);
};

console.log(
  addtion(-40, -5, 5, 6, 2, 3, 2, 9, 59, 5, 99, 1, 69, 96, 7, 91, 6, 9)
);

*/

/*
const addTo = (x) => (y) => x + y;
var addToTen = addTo(10);
addToTen(3);

const secondAddTo = function (x) {
  const multipliedBy = 10;
  const y = function (y) {
    return multipliedBy * (x + y);
  };
  return y;
};

const thirdAddTo = secondAddTo(10);
console.log(thirdAddTo(2));
console.log(thirdAddTo(5));
console.log(thirdAddTo(30));
console.log(thirdAddTo(40));
console.log(thirdAddTo(50));
console.log(thirdAddTo(60));
console.log(thirdAddTo(70));
console.log(thirdAddTo(80));
console.log(thirdAddTo(90));

const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
console.log(curriedSum(30)(1));

const anotherSum = function (a, b) {
  return a + b;
};

const curriedAnotherSum = function (a) {
  const b = function (b) {
    return a + b;
  };

  return b;
};

console.log(curriedAnotherSum(10)(10));

const salaried = "SALARIED";
const selfEmployed = "SELF-EMPLOYED";

const calculateTaxRate = function (category) {
  let rate;
  switch (category) {
    case salaried:
      rate = 0.23;
      break;

    case selfEmployed:
      rate = 0.35;
      break;

    default:
      rate = 0.15;
  }

  // if (category === salaried) {
  //   rate = 0.23;
  // } else if (category === selfEmployed) {
  //   rate = 0.35;
  // } else {
  //   rate = 0.15;
  // }

  const calculattion = function (income) {
    return income - income * rate;
  };

  return calculattion;
};

const grossSelfEmpolyedIncome = calculateTaxRate(selfEmployed);
console.log(grossSelfEmpolyedIncome(100));
console.log(grossSelfEmpolyedIncome(1005000));
console.log(grossSelfEmpolyedIncome(50000));
console.log(grossSelfEmpolyedIncome(25000));
console.log(grossSelfEmpolyedIncome(35000000));

const sum2 = (a, b) => a + b;
const curriedSum2 = (a) => (b) => a + b;
const add5 = curriedSum(5);
console.log(add5(12));

const arry = [1, 2, 10, 16];
const multipliedByTwo = arry.map((el) => el * 2);
console.log(arry);
console.log(multipliedByTwo);

const numbersArr = [4, 6, 616, 6, 6, 69, 3, 154, 15, 15, 48, 46, 59, 9];
const aboveTen = numbersArr.filter((el) => el >= 10);
console.log(numbersArr);
console.log(aboveTen);

/*
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

const anotherModified = array.map((el) => el);

anotherModified.forEach((el) => {
  el.items.forEach((el, index, arry) => {
    arry[index] = el + "!";
  });
});

console.log(anotherModified[0].items);
console.log(anotherModified[1].items);
console.log(anotherModified[2].items);

// .forEach((el) => {
//   for (let i = 0; i < el.items.length; i++) {
//     console.log(el.items[i] + "!");
//     // el.items[i] = el.items[i] + "!";
//   }
// });

// console.log(anotherModified);
// console.log(array);

// const convertItem = array.map((el) => {
//   el.items.forEach((el) => {
//     return el + "!";
//   });
// });

// const convertItem = array.map((el) => {
//   return el;
// for (let i = 0; i < el.items.length; i++) {
//   console.log(i);
//   // console.log((el.items[i] = el.items[i] + "!"));
//   el.items[i] = el.items[i] + "!";
// }
// console.log(el.items);
// return el.items;
// });

// console.log(convertItem);

/*
const usernames = [];
array.forEach((el) => usernames.push(el.username + "!"));
console.log(usernames);

const mapUsernames = array.map((el) => el.username + "?");
console.log(mapUsernames);

const teamRed = array.filter((el) => {
  if (el.team === "red") {
    return el.username;
  }
});

console.log(teamRed);

const totalScore = array.reduce((previousValue, currentValue) => {
  console.log("this is the previous value", previousValue);
  console.log("this is the current value", currentValue.score);
  return previousValue + currentValue.score;
}, 0);

console.log(totalScore);

const num = [1, 2, 3, 4];
const reduce = num.reduce((prev, inti) => {
  console.log("this is the previous value", prev);
  console.log("this is the intial value", inti);
  return prev + inti;
});
console.log(reduce);

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  // alert(num);
  return num * 2;
});
*/

// const numberOne = 1;
// const numberTwo = 1;
// console.log(numberOne === numberTwo);

// const objOne = { value: 10 };
// const objTwo = { value: 10 };

// console.log(objOne === objTwo);

// const testing = function () {
//   console.log(this === window);
// };

// testing();

// const obj = {
//   description: "Subhash",
//   age: 26,

//   greeting() {
//     console.log(
//       `Hello my name is ${this.description} and I'm ${this.age} years old!`
//     );
//   },
// };

// obj.greeting();

/*
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  introduce() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
  }
}

const firstStudent = new Person("Subhash", "Chhetri");
const exchangeStudent = new Person("Ashok", "Bhatia");
const winnerStudent = new Person("Ashok", "Sharma");
const correctionalStudent = new Person("Meena", "Chudorary");

console.log(firstStudent);
console.log(exchangeStudent);
console.log(winnerStudent);
console.log(correctionalStudent);

firstStudent.introduce();
winnerStudent.introduce();
correctionalStudent.introduce();

class Student {
  constructor(lastName, course) {
    console.log("this is inside student class", this);
    this.lastName = lastName;
    this.course = course;
  }

  description() {
    console.log(
      `This is student last's name is ${this.lastName} and he is in ${this.course} course.`
    );
  }
}

class MonitorStudent extends Student {
  constructor(lastName, course, reffered) {
    super(lastName, course);
    this.reffered = reffered;
  }

  assignTask() {
    console.log(
      `All students with ${this.lastName} of should be in ${this.course}`
    );
  }
}

// const anotherStudent = new Student("Sharma", "Computer Science");
const anotherMonitor = new MonitorStudent(
  "Sharma",
  "Computer Science",
  "Principal"
);

console.log(anotherMonitor);

anotherMonitor.assignTask();

const ar = [1];

// console.log(""1" ===" ar[0]);

const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5 };
object1.a = 4;

console.log("object1", object1);
console.log("object2", object2);
console.log("object3", object3);
console.log("object4", object4);
// console.log("object1", object1)

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  power() {
    console.log(
      `Hello everyone I'm a ${this.name}, which is ${this.type} type and of ${this.color} color`
    );
  }
}

const mamal1 = new Mamal("cow", "mamal", "white");
mamal1.power();

const exponenetial = function (a, b) {
  console.log(a ** b);
};

exponenetial(3, 3);

const specialObj = {
  username1: "Kyle",
  username2: "Sister",
  username3: "Brother",
  username4: "Uncle",
};

// Object.values(specialObj).forEach((value) => console.log(value));

console.log(
  Object.entries(specialObj).forEach((value, index, arry) => {
    value[0] = index;
    // console.log(value[0] === index);
  })
);

Object.entries(specialObj)[0][0] = 0;
console.log(specialObj);

try {
  bob + "hi";
} catch (error) {
  console.log(error);
  console.log("You messed up");
}

*/

const fruitArry = ["apples", "grapes", "kiwi", "some other kind of fruit"];

// for (fruit of fruitArry) {
//   console.log(fruit);
// }

// for (str of "subhash") console.log(str);

const numbers = [19, -1, 0, 3, 100, 99, 2, 99, 45, 12, 101, -4, 69, 177];

const biggestNumberInArray = function (arr) {
  if (arr.length) {
    let biggest;
    // arr.forEach((el) => {
    //   if (typeof el === "number") {
    //     biggest = el;
    //     console.log(biggest);
    //     return;
    //   }
    // });

    const modified = arr.filter((el) => {
      if (typeof el === "number") return el;
    });

    biggest = modified[0];

    modified.forEach((element) => {
      // biggest = element;
      if (element > biggest) {
        biggest = element;
      }
    });

    return biggest;
  } else {
    return 0;
  }
};

// console.log(biggestNumberInArray([]));

// const hig = numbers.reduce(
//   (acc, current, index, arry) =>

//   {

//   }

// )};

// const anotherarr = ["a", 3, 4, 2];

// const hig = anotherarr.reduce((acc, curr) => {
//   console.log(acc);
//   console.log(curr);
//   if (typeof acc === "number") {
//     return curr < acc ? (acc = curr) : acc;
//   }
// });

// console.log(hig);

const specialArr = ["a", 14, 5, 3, 6, 9];

// console.log(big);

const biggestArryElement = function (array) {
  if (array.length) {
    let big;

    for (el of array) {
      if (typeof el != "number") continue;

      if (!big) {
        big = el;
      }

      if (el > big) {
        big = el;
      }
    }

    return big;
  } else {
    return 0;
  }
};

const em = [];
console.log(biggestArryElement(["d", 45, 65, 5, 3, 6, 9, "j", 56, 3]));

const gender = {
  male: 25,
  income: "unlimited",
  cars: {
    bmw: 18,
    mercedes: 22,
  },
};
console.log(gender?.cars?.lamborghini || "Does't have Lamborghini");

const flat = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((a, b) => a.concat(b), []);

// console.log(flat);

/*
console.log("1");
setTimeout(() => {
  console.log("set time get's executed");
}, 0);

for (let i = 0; i < 1000; i++) {
  console.log("something are better like this", `${i * 52}`);
}

console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");
console.log("11");
console.log("12");
console.log("13");
console.log("14");
console.log("15");
console.log("16");
console.log("17");
console.log("18");
console.log("19");
console.log("20");
console.log("21");
*/

const name = {
  firstName: "something unique",
  sibling: {
    gender: "male",
    brothers: {},
  },
};

console.log("something new and intersting is happening all the time");

const something = ";";

const newdine = {
  ne: "soeh",
};

const justify = {
  justify.for :" na,e"
}
