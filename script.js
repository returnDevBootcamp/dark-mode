//both
// document.querySelector(".title").style.background = "red";
// document.querySelector(".title").textContent = "Hello!";
//Only ID
// document.getElementById("hello");
//only Class
// document.getElementsByClassName("title");
// var textBox = document.querySelector(".title");
// document.querySelector(".btn").addEventListener("click", function () {
//   var age = document.querySelector(".age").value;
//   if (age > 18) {
//     textBox.textContent = "You can drive 🚕";
//   } else {
//     textBox.textContent = "you cant drive 👶🏾";
//   }
// });

// document.querySelector(".btn").addEventListener("click", function () {
//   var age = document.querySelector(".age").value;

//   if (age > 18) {
//     document.querySelector(".title").textContent = "You can drive";
//   } else {
//     document.querySelector(".title").textContent = "you cant drive";
//   }
// });

// document.querySelector(".btn").addEventListener("click", function () {
//   var bill = document.querySelector(".bill").value;

//   if (bill > 50 && bill < 300) {
//     document.querySelector(
//       ".title"
//     ).textContent = `You bill is ${bill} and you tip is ${bill * 0.15}`;
//   } else if (bill > 300) {
//     document.querySelector(
//       ".title"
//     ).textContent = `You bill is ${bill} and you tip is ${bill * 0.2}`;
//   }
// });

//DOM MANIPULATION
// document.querySelector(".title").style.color = "red";

// document.querySelector(".title").style.color = "red";

// document.querySelector(".title").textContent = "Changed";

// document.querySelector(".btn").addEventListener("click", function () {
//   document.querySelector("body").style.background = "red";
// });

document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector("body").classList.toggle("dark");
  document.querySelector(".fas").classList.toggle("fa-moon");
  document.querySelector(".fas").classList.toggle("fa-sun");
});
