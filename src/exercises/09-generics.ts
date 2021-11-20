/*
    ===== Código de TypeScript =====
*/
function whatTypeAmI<T>(arg: T) {
  return arg;
}

let iAmString = whatTypeAmI('Hello world');
let iAmNumber = whatTypeAmI(100);
let iAmArray = whatTypeAmI([1, 2, 3, 4, 5]);
let iAmExplicitType = whatTypeAmI<number>(100);
