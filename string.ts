// .1
export const lengthOfString = (str: string): number => {
  return str.length;
};

// .2
export const Palindrome = (str: string): boolean => {
  let flag: boolean = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      flag = false;
    }
  }
  return flag;
};

// .3
export function arrangeLth(arr :number[]): number[]{
  return arr.slice().sort((a,b) => a - b)
}

// .4
export const sqrt = (number: number): number => {
  if (number < 0) {
    throw Error;
  }
  return Math.sqrt(number);
};

// .5
export const sumArray = (arr: number[]): number => {
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// .6

// export const fetchUserData = async (id: number) => {
//   try {
//     const user = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     console.log(user);
    
//     return user;
//   } catch (error) {
//     return error
//   }
// };

// console.log(fetchUserData(2));



// .7

export const fibonacci = (arr: number[]) => {
  if (arr.length < 2) return false;
  if (arr[0] != 0 || arr[1] != 1) return false;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] != (arr[i - 1] + arr[i - 2])) return false;
  }
  return (arr[arr.length - 1] + arr[arr.length - 2]);
};
console.log(fibonacci([0,1,1,2,3,5,8,13,21,34,55,89]));


  
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Nehoraiyaphe/testing.git
git push -u origin main