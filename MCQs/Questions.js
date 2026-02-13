// 🔹 LEVEL 1 – EASY (Basics & Type Coercion)
// 1.
// console.log([] === []);        // ""

// 2.   
console.log([] + {});        // "[object Object]"

// 3.
console.log({} + []);        // 0 (or "[object Object]" in browser)

// 4.
console.log(true + true);    // 2

// 5.
console.log(false + 1);      // 1

// 6.
console.log("5" + 2);        // "52"

// 7.
console.log("5" - 2);        // 3

// 8.
console.log(null + 1);       // 1

// 9.
console.log(undefined + 1);  // NaN

// 10.
console.log(typeof null);    // "object"

// 11.
console.log(typeof undefined); // "undefined"

// 12.
console.log(0 == false);     // true

// 13.
console.log(0 === false);    // false

// 14.
console.log("" == 0);        // true

// 15.
console.log("" === 0);       // false

// 16.
console.log(Boolean([]));
console.log([] == 0);
// true

// 17.
console.log(Boolean(""));    // false

// 18.
console.log(!!"JS");         // true

// 19.
console.log(NaN == NaN);     // false

// 20.
console.log(isNaN("JS"));    // true

// 🔹 LEVEL 2 – MEDIUM (Arrays, Objects, Comparison)
// 1.
console.log([] == false);    // true

// 2.
console.log([1] == true);    // true

// 3.
console.log([2] == true);    // false

// 4.
console.log([1, 2] == "1,2"); // true

// 5.
console.log({} == {});       // false

// 6.
console.log([] == 0);      // false

// 7.
console.log(typeof []);      // "object"

// 8.
console.log(Array.isArray([])); // true

// 9.
console.log([] == ![]);      // true

// 10.
console.log("10" > 9);       // true

// 11.
console.log("31" > "4");     // false

// 12.
console.log(null == undefined); // true

// 13.
console.log(null === undefined); // false

// 14.
console.log(+"5" + 5);       // 10

// 15.
console.log(!!null);         // false

// 16.
console.log(!!undefined);    // false

// 17.
console.log(0 && 1);         // 0

// 18.
console.log(1 && 2);         // 2

// 19.
console.log(0 || 5);         // 5

// 20.
console.log("JS" && "Code"); // "Code"


// 🔹 LEVEL 3 – HARD (Tricky Coercion, Scope, Logic)
// 1.
console.log([] + 1);         // "1"

// 2.
console.log([1] + 1);        // "11"

// 3.
console.log([1, 2] + 1);      // "1,21"

// 4.
console.log(true + false);   // 1

// 5.
console.log(false - true);   // -1

// 6.
console.log([] == 0);        // true

// 7.
console.log([[]] == 0);      // true

// 8.
console.log([[[]]] == 0);    // true

// 9.
console.log([] == "");       // true

// 10.
console.log([] == ![]);      // true

// 11.
console.log("" == 0);       // true

// 12.
console.log(" " === 0);      // false

// 13.
console.log(+true);          // 1

// 14.
console.log(+false);         // 0

// 15.
console.log(parseInt("10px")); // 10

// 16.
console.log(parseInt("px10")); // NaN

// 17.
console.log(typeof typeof 1);  // "string"

// 18.
console.log(1 < 2 < 3);        // true

// 19.
console.log(3 > 2 > 1);        // false

// 20.
console.log([] + {} == {} + []); // false

// 21.
console.log([1, 2, 3].shift());

// Only these are falsy values:
// false, 0, -0, 0n, "", null, undefined, NaN

console.log("5" + "2");
console.log(+"5ujdfhng");
console.log([2, 3, 4] + 3);

console.log(Boolean([]));

let a = true
console.log(typeof a);





function f(a = 10) {
   console.log(a);

}
f()


function demo(a, b) {
   console.log(arguments);
}
demo(10, 20, 30);


foo(); // works
function foo() {
   console.log("heloo");
}

let arr = [0, 200]
delete arr[0]
console.log(arr);










