import { describe, test, expect } from "vitest";
import { lengthOfString } from "./string";
import { Palindrome } from "./string";
import { sqrt } from "./string";
import {arrangeLth} from "./string"
import { sumArray } from "./string";
// import { fetchUserData } from "./string";
import {fibonacci} from "./string"

// .1
describe("lengthOfString ", () => {
  test("calculateStringLength", () => {
    const inputString = "Hello";
    const expectedLength = 5;
    const result = lengthOfString(inputString);
    expect(result).toBe(expectedLength);
  });
});

// .2
test("is Palindrome", () => {
  const inputString = "goog";
  const expectedFlag = true;
  const result = Palindrome(inputString);
  expect(result).toBe(expectedFlag);
});

// .3

test('array in ascending order', () => {
  const arr = [1, 5, 2, 55, 7, 8, 4, 90, 151];
  const result = arrangeLth(arr); 
  expect(result).toEqual([1, 2, 4, 5, 7, 8, 55, 90, 151]);
  for (let i = 1; i < result.length; i++) {
    expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
  }
})

// .4
test(" sqrt number", () => {
  const inputNumber = 9;
  const expectSqrt = 3;
  const result = sqrt(inputNumber);
  expect(result).toBe(expectSqrt);
});

// .5
describe("sumOfArr ", () => {
  test("the Arr Num Is", () => {
    const arr = [2, 3, 5];
    const result = sumArray(arr);
    expect(result).toBe(10);
  });

  test("Yhe Arr is Bigaer Then 9", () => {
    const arr = [3, 6];
    const result = sumArray(arr);
    expect(result).toBeGreaterThan(7);
  });
});

// .6
// test("yaa tats the user", async () => {
//   const id = 2;
//   const result = await fetchUserData(id);
//   const expectedUserData = {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//     },
//   };
//   expect(result).toEqual(expectedUserData);
// });

// 7.
test("check  [0,1,1,2,3,5,8,13,21,34,55,89] next num 144", ()=> {
  const testArr = [0,1,1,2,3,5,8,13,21,34,55,89]
  const expectResult = 144
  const result = fibonacci(testArr)
  expect(result).toBe(expectResult)
})
test("check [0,1,1,2,3,5,8,13,21,34,55,86] next num false", ()=> {
  const testArr = [0,1,1,2,3,5,8,13,21,34,55,86]
  const expectResult = false
  const result = fibonacci(testArr)
  expect(result).toBe(expectResult)
})


