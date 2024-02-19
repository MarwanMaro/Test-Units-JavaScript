// let myElement = document.createElement("div");
// let myText = document.createTextNode("product one");
// let  myComment = document.createComment("This Is Div");

// myElement.className= "Product";

// //Append Commet TO Element
// myElement.appendChild(myComment);
// myElement.appendChild(myText);

// document.body.appendChild(myElement);

// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");

// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Description");

// //Add Heading Text
// myHeading.appendChild(myHeadingText);

// //Add Heading to Main Elmenet
// myMainElement.appendChild(myHeading);

// //Add Paragraph Text
// myParagraph.appendChild(myParagraphText);

// //Add Paragraph to Main Elmenet
// myMainElement.appendChild(myParagraph);

// myMainElement.className = "product";

// document.body.appendChild(myMainElement);

// let myElement = document.querySelector("div");
// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.childNodes);

// let myBtn = document.getElementById("btn");

// myBtn.onclick = function(){
//     console.log('Marwan');
// }

// window.onscroll = function(){
//     console.log("Scroll");
// }

// let price = 100;

// let discount = false;
// let discountAmount = 30;
// let country ="EGYPT";

// if(discount === true){
//     price -= discountAmount;
// }else if (country === "EGYPT") {
//     price -=40;
// }

// console.log(price);

// for(let i = 1;i<=10; i++){
//     console.log(i);
// }

// let myFriends=["marwan","malak","Karem","Sayed","Esraa","Mostafa"];

// for(let i = 0; i < myFriends.length; i++){
//     console.log(myFriends[i])
// }

// let products = ["keyboard","Mouse","Pen","Pad","monitor"];
// let colors =  ["Red","Black","Green"];
// let models = [2023,2024];

// for(let i =0; i< products.length; i++){
//     console.log("#".repeat(5));
//     console.log(`#${products[i]}`);
//     console.log("#".repeat(5));
//     for(let j = 0; j < colors.length; j++){
//         console.log(`-${colors[j]}`);
//      for(let k = 0; k < models.length ; k++){
//         console.log(`-${models[k]}`)

//      }
//     }
// }

// let products = ["keyboard","Mouse","Monitor","samasung","iphone"];
// let colors = ["Black","Red","Blue"];
// let showCount = 5;

// document.write(`<h1>Show ${showCount} products</h1>`);

// for (let i = 0 ; i < showCount; i++) {
//     document.write(`<div>`);
//     document.write(`<h3>[${i+1}]${products[i]}</h3>`);

//     for(let j = 0; j< showCount; j++){
//         document.write(`<p>${colors[j]}</p>`)
//     }
//     document.write(`<p>${colors.join(" | ")}</p>`)
//     document.write(`</div>`);
// }

// let products = ["keyboard","Mouse","Monitor","samasung","iphone"];

// let index = 0;

// while(index < products.length){
//     console.log(products[index]);
//     index += 1;
// }

// function sayHello() {
//     console.log('Hello Marwan');
// }

// sayHello();

// function Years(start, end){
//     for (let i = start; i <= end; i++){
//         console.log(i);
//     }
// }

// Years(1994,2024)

// function calc(...numbers){
//     let result = 0;
//     for(let i = 0 ; i < numbers.length; i++){
//         result += numbers[i];
//     }
//     return result;
// }

// console.log(calc(10,20,30,40,50,60));

// function showInfo(us = "Un", ag = "Un", rt = 0,show = "Yes", ...sk) {

//     document.write(`<div>`);
//     document.write(`<h2>Welcom, ${us}</h2>`);
//     document.write(`<p>Age:  ${ag}</p>`);
//     document.write(`<p>Hour Rate:  $${rt}</p>`);
//     document.write(`</div>`);

//     if(show === "Yes"){
//         console.log("Show Skils");
//     }else{
//         console.log("Dont Show Skils");
//     }
// }
// showInfo("Marwan", 29,50);

// document.getElementById("show").onclick = function () {
//     console.log("show");
// }

// setTimeout(function (){
//     console.log("Marooooooooooooooooooooooooooooooooooooooo");
// },2000)

// function sayMessage(fName,lName){

//     let message = "Hello";

//     //Nested Function
//     function concatMsg(){
//         function getFullName(){
//             return `${fName} ${lName}`;

//         }
//         return `${message} ${getFullName()}`;
//     }
//     return concatMsg();
// }

// console.log(sayMessage("Osama", "Mohamed"));

// var a = 5;
// let b = 7;

// function showText(){
//     var a = 10;
//     let b = 20;
//     console.log(`From local${a}`);
//     console.log(`From local${b}`);
// }

// console.log(`From Global${a}`);
// console.log(`From Global${b}`);

// showText();

// let Books = {title,description,amount}

// ${i + 1}. Title:

// function showAvailableBooks(showAvailableBooks){
//     for (let i = 0; i < library.length; i++) {
//         if (book.amount > book.outside) {
//             // console.log(`${book.title}`);
//             // showAvailableBooks(library);
//           }
//     }
// };

// console.log(`${book.title}`);

// const library = [
//   {
//     title: "The Great Gatsby",
//     description: "A novel by F. Scott Fitzgerald",
//     amount: 10,
//     outside: 9,
//   },
//   {
//     title: "Harry booter",
//     description: "A novel by F. Scott Fitzgerald",
//     amount: 8,
//     outside: 8,
//   },
//   {
//     title: "Cinderla",
//     description: "A novel by F. Scott Fitzgerald",
//     amount: 11,
//     outside: 8,
//   },
//   {
//     title: "Meiky",
//     description: "A novel by F. Scott Fitzgerald",
//     amount: 14,
//     outside: 14,
//   },
//   {
//     title: "Hercles",
//     description: "A novel by F. Scott Fitzgerald",
//     amount: 5,
//     outside: 5,
//   },
//   {
//     title: "superman",
//     description: "A novel by F. Scott Fitzgerald",
//     amount: 6,
//     outside: 5,
//   },
//   {
//     title: "Batman",
//     description: "A novel by F. Scott Fitzgerald",
//     amount: 4,
//     outside: 2,
//   },
//   {
//     title: "Thor",
//     description: "A novel by F. Scott Fitzgerald",
//     amount: 3,
//     outside: 1,
//   },
//   {
//     title: "spiderman",
//     description: "A novel by F. Scott Fitzgerald",
//     amount: 7,
//     outside: 7,
//   },
//   {
//     title: "caption America",
//     description: "A novel by F. Scott Fitzgerald",
//     amount: 10,
//     outside: 5,
//   },
// ];

// function admin() {
//   console.log("All Book");
//   for (let i = 0; i < library.length; i++) {
//     let book = library[i];
//     console.log(
//       `${i + 1}. Title: ${book.title}, Description: ${
//         book.description
//       }, outside: ${book.outside}, Available: ${book.amount - book.outside}`
//     );
//   }
// }

// function user() {
//   console.log("available only");
//   for (let i = 0; i < library.length; i++) {
//     if (library[i].amount > library[i].outside) {
//       PrintBook(library[i]);
//     }
//   }
// }

// function PrintBook(x) {
//   console.log(x.title);
// }

// admin();
// user();

// //    let myMainElement = document.createElement("div");
// //    myMainElement.className = "List";
// let BookList = document.getElementById("bookList");
// let errorMessage = document.getElementById("error");

// function searchBooks() {
//   BookList.innerHTML = "";
//   errorMessage.innerHTML = "";

//   const searchInputValue = document
//     .getElementById("searchInput")
//     .value.toLowerCase();

//   const result = library.filter((book) =>
//     book.title.toLowerCase().includes(searchInputValue)
//   );

//   if (result.length > 0) {
//     for (let i = 0; i < result.length; i++) {
//       let bookItemLi = document.createElement("li");
//       bookItemLi.innerHTML = result[i].title;
//       BookList.appendChild(bookItemLi);
//     }
//   } else {
//     errorMessage.innerHTML = "No matching books found.";
//   }
// }

// searchBooks();
// for(let i = 0; i<library.length; i++){

//     let myList =  document.createElement("li");

//     myList.innerHTML = library[i].title;
//     myLibarary.appendChild(myList);

// }

// console.log(myMainElement);

// myMainElement.appendChild(myLibarary);

// document.body.appendChild(myMainElement);

// let myNums = [1,10,11,4,5,7,22,44,50];

// let evenNumbers = myNums.filter(function(el){
//     return el % 2 ===0;
// })

// console.log(evenNumbers);

//Map

// let myNums = [1,2,3,4,5,6];
//  let newNums = [];

//  for(let i = 0; i< myNums.length; i++){
//     newNums.push(myNums[i] + myNums[i]);
//  }

//  console.log(newNums);

// let swappingCases = "marwan ESSAM";

// let sw = swappingCases.split("").map(function(ele){
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// }).join("");

// console.log(sw);

// let invertedNumbers = [1,5,-10,-20,-30,44,55,-100];

// let inv = invertedNumbers.map(function(ele){
//     return -ele;
// })
// console.log(inv);

// let  ignoreNumbers = "Marwan6576574576457465Essam";

// let ign = ignoreNumbers.split("").map(function(ele){
//     return isNaN(parseInt(ele)) ? ele: "";
// }).join("");

// console.log(ign);

// let numbers1 = [44,150,6,9,10];

// let inNumbers = numbers1.map(function(ele){
//     return ele * 2;
// });

// console.log(inNumbers);

// let friends = ["Ahmed", "Mohamed","Mohsen","Maha","Ramy","Karem","Sayed","Essra"];

// let filterFriends = friends.map(function(ele){
//     return ele.startsWith("M");
// })

// console.log(filterFriends);

// let Numbers = [11,10,3,6,7,9,8,2,20,25,40];

// let EvenNumbers = Numbers.filter(function(ele){
//     return ele % 2 === 0 ;
// });

// console.log(EvenNumbers);

///////////////////////////////////////////////////

// const fruits = ["Banana" , "Orange", "Apple","Mango"];

// document.getElementById("demo").innerHTML = "Original Arry:<br>" + fruits;
// fruits.splice(0,1);
// document.getElementById("demo2").innerHTML = fruits;
// let removed = fruits.splice(2,2, "Lemon", "Kiwi");
// document.getElementById("demo2").innerHTML = "New Array:<br>" + fruits;
// document.getElementById("demo3").innerHTML = "Removed Items:<br>" + removed;

// const myGirls = ["Nada","Maha"];
// const myBoy = ["Marwan","Mohamed","Mostaf"];
// const arry3 = ["lara","Yousef","Ramdan","Bassant","Mena"];
// const arr4 = ["ESSAM"]

// const All = myGirls.concat(myBoy,arry3,arr4);

// const  myArr = [[10,20],[30,40],[50,60]];

// const newArr = myArr.flat();

////////////////////////////////////////////////////////////////////////////////////////////////

// let M = 10;
// let Marwan = "";

// for( i = 1; i <= M ; i++){
//   for( j = 0 ; j < i ; j++){
//     Marwan += "*";
//   }
//   Marwan += "\n";
// }

// console.log(Marwan);

// let M = 10;
// let Marwan = "";

// for( i = 0; i <= M ; i++){
//   for( j = 0 ; j - i ; j++){
//     Marwan += "*";
//   }
//   Marwan += "\n";
// }

// console.log(Marwan);

///////////////////////////////////////////////////////////////////////////////////////////////////////















