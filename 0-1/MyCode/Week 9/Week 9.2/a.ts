// enum Direction {
//   Up, // 0 by default
//   Down, // 1
//   Left, // 2
//   Right, // 3
// }

// enum Direction2 {
//   Up = "up",
//   Down = "down",
//   Left = "left",
//   Right = "right",
// }

// function doSomething(keyPressed: Direction2) {
//   // do something
//   if (keyPressed == Direction2.Up) {
//   }
//   //
// }

// doSomething(Direction2.Up);
// doSomething(Direction2.Down);
// console.log(Direction2.Down);
// console.log(Direction2.Up);
// //..

// Express Usecase
// const app = express();

// enum ResponseStatus {
//   Success = 200,
//   NotFound = 414,
//   Error = 500
// }

// app.get("/", (req, res) => {
//   if(!req.querry.userId) {
//     res.status(ResponseStatus.NotFound).json({})
//   }
//   // and so on...
//   res.json({})
// })

// app.get("/123", (req, res) => {
//   if(!req.querry.userId) {
//     res.status(ResponseStatus.NotFound).json({})
//   }
//   // and so on...
//   res.json({})
// })

// type Input = string | number;

// function firstEle(arr: Input[]) {
//   return arr[0];
// }

// const value = firstEle(["anuj", "tiwari"]);
// console.log(value.toUpperCase()); //Give Error

//Generics
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

interface User {
  name: string;
}

const el = getFirstElement<User>([{ name: "Anuj" }]);
const el2 = getFirstElement([100, 200]);
const el3 = getFirstElement([true, false]);
