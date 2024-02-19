//Sum of Numbers in an Array

let marwan = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < marwan.length; i++) {
  sum += marwan[i];
}

console.log(sum);

///////////////////////////////////////////////////////

//Find the Maximum Number in an Array

let maxNumber = [10, 1000, 50, 2000, 90000];

let arry = maxNumber[0];

for (let i = 1; i < maxNumber.length; i++) {
  if (maxNumber[i] > arry) {
    arry = maxNumber[i];
  }
}

console.log(arry);

// let max = Math.max(...maxNumber);

// console.log(max);

//////////////////////////////////////////////////////////////////

//Linear Search

// 10| 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
// 0   1     2    3    4    5    5    7    8    9

let array = [10, 20, 30, 40, 50, 60, 60, 80, 90, 100];

function linerSearch(arr, x) {
  let a = arr.length;
  for (let i = 0; i < a; i++) {
    if (x == arr[i]) return i;
  }

  return -i;
}

console.log(linerSearch(array, 30)); // index 2

console.log(linerSearch(array, 60)); // index 5

console.log(linerSearch(array, 80)); // index 7

/////////////////////////////////////////////////////////////////////////////

//Counting Even and Odd Numberslet

let Num = [2, 5, 3, 8, 9, 4, 22, 20, 35, 45, 44, 60, 1];

let x = 0;
let y = 0;

for (let i = 0; i < Num.length; i++) {
  if (Num[i] % 2 == 0) {
    x++;
  } else {
    y++;
  }
}

console.log("This is even number" + x);
console.log("This is odd number" + y);

///////////////////////////////////////////////////////////////////////////////////////////////////

//Reverse an Array

let revName = ["marwan", "Karem", "Malak", "sayed", "Mostafa"];

console.log(revName.reverse());

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Check if an Array is Palindrome

const string = prompt("Enter a string: ");

function checkPalindrome(string) {
  const Units = string.length;

  for (let i = 0; i < Units / 2; i++) {
    if (string[i] !== string[Units - 1 - i]) {
      return "false";
    }
  }
  return "true";
}

console.log(checkPalindrome(string));

/////////////////////////////////////////////////////////////////////////////////

//  Find the Second Largest Number

const arr = [12, 35, 10, 35, 10, 34, 1];

function SecondLargest(arr) {
  let second;

  if (arr.length < 2) {
    return "Invalid Input";
  }
  arr.sort();

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] !== arr[arr.length - 1]) {
      return "Second Large Number" + arr[i];
    }
  }

  return " Not Equal ";
}

console.log(SecondLargest(arr));

//////////////////////////////////////////////////////////////////////////////////
//Merge Two Sorted Arrays

const arr1 = [10, 60, 450, 900, 2000];
const arr2 = [20, 50, 350, 700, 1000];
const merged = meargeSort(arr1, arr2);

function meargeSort(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

console.log(merged);

/////////////////////////////////////////////////////////////////
