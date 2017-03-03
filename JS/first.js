// alert("Coming to you from first.js!");

// var one = 1;
// var two = 2;
// console.log("one =", one);
// console.log("two =", two);

// var surname = prompt("Please enter your name");
// console.log("Your name is", surname);

// var nameOK = confirm("Confirm that your name is " + surname + ".");
// console.log("Your name is", surname, ":", nameOK);

// var firstName = "Cat";
// var dayOfBirth = 12;

// firstName = "Catherine";

// firstName = "Cathy";

// var favColor = prompt("What is your favorite color?");
// console.log(favColor, "is also my favorite color!");

// var singleQuote = 'She said, "What is your favoite color?"';
// var doubleQuote = "I said, \"Get out\'a here! We have so much in common!\"";
// console.log(singleQuote);
// console.log(doubleQuote);

// 2 == "2"; //true
// 2 === 2; //true
// 10 % 3; //1
// 10 % 3 === 1; //true
// true && false; //false
// false || true; //true
// true || false; //true

// randomNum = Math.random();
// console.log(randomNum);

// if (randomNum >= 0.5) {
//     console.log("Over 0.5");
// } else {
//     console.log("Under 0.5");
// }

// Falsey values:
// 0
// undefined
// null
// ""
// false
// NaN

// ARRAY EXERCISES
// var favoriteFoods = ["bamboo", "seaweed", "mushrooms"];
// favoriteFoods[1]; //second element of favoriteFoods
// favoriteFoods[favoriteFoods.length-1] = "chocolate";
// var formerFavoriteFood = favoriteFoods.shift();
// favoriteFoods.push("pringles");
// favoriteFoods.unshift("strawberries");
// //pop from an empty array returns undefined and the array remains empty
// // [2, 3, 4, 5] -> [2, 4, 5]
// var toSplice1 = [2, 3, 4, 5];
// toSplice1.splice(1, 1);
// // ["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
// var toSplice2 = ["alpha", "gamma", "delta"];
// toSplice2.splice(1, 0, "beta");
// // [10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// var toSplice3 = [10,-10,-5,-3,2,1];
// toSplice3.splice(1, 3, 9, 8, 7, 6, 5, 4, 3);

//ARRAY METHODS EXERCISES
// var arr = [];
// arr.push("Cat");
// arr.push("Liaw");
// arr.unshift("blue");
// arr.shift();
// var arr2 = [];
// arr2.push(16);
// arr2.push("JavaScript");
// arr2.indexOf(42); //-1
// arr2.indexOf(16); //0
// var combinedArr = arr.concat(arr2);
// var arr = ["JavaScript", "Python", "Ruby", "Java"];
// var pr = arr.slice(1,3);
// var arr3 = ["Haskell", "Clojure"];
// var arr4 = arr.concat(arr3);
// var arr5 = arr.concat("Haskell", "Clojure");
// var joinedArr = arr.join(", ");
//Passing a value is when the original variable is pointing to primitive type.
//When you set another variable equal to the original variable, JS creates a 
//copy of the primitive type item (new location in memory) and assigns the second
//variable pointing to the copied item/address in memory.
//Passing by reference is when the original variable is pointing to a reference type
//such as an array. When you set another variable equal to the original variable,
//JS creates a pointer from the second variable to the original array, so when
//you alter second variable, the item (same item) at the original variable will
//also be effected.



