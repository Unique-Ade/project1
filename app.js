//Delete Function
const deleteBtn = document.querySelectorAll(".delete");
const parent = document.getElementById("wrap"); //ul

//console.log(deleteBtn);
//Array.isArray Method: Checking if an item is an Array
//console.log(Array.isArray(deleteBtn));
//Array.from Method: Used to convert list of items/Nodelist to an Array
//console.log(Array.from(deleteBtn));
// e.g let cars = ["",""]
// cars.forEach()

//Looping through the delete Buttons
Array.from(deleteBtn).forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //selecting the parent of the clicked button
    let li = e.target.parentNode; //parentNode rep the parent of the item.
    //Removing the selected li from the ul
    //parent have been declared at the top
    parent.removeChild(li);
  });
});

//*Add Book Function
// Collect input value and insert it into a generated/created span element.
//<span>input value</span>
// Generate/create a span element and insert "delete" textContent into it.
//<span>delete</span>
//Generate/create an li tag and append the two spans into it.
//<li>
//  <span>input value</span>
//  <span>delete</span>
//</li>
// Append the li into the Parent ul. (appended)
// Prevent default action. *

//1. selecting the add button from the HTML
let addBtn = document.getElementById("add_btn");

//2. Add an event listener of click to the button
addBtn.addEventListener("click", function (e) {
  let bookTitleValue = document.querySelector("#add_book").value;
  e.preventDefault();

  //creating the elements - li, span
  let li = document.createElement("li");
  let title = document.createElement("span");
  let deleteBook = document.createElement("span");

  //Assigning values of our span tags
  title.textContent = bookTitleValue;
  deleteBook.textContent = "delete";

  //styling the delete button by giving it the same class as other delete btns
  deleteBook.classList.add("delete");
  // deleteBook.id.add('id name')
  //NOTE: classList and id are used for attaching class and id attributes to
  //      HTML elements from our Javascript code.
  //Appending title and deleteBook into the li tag.
  li.appendChild(title);
  li.appendChild(deleteBook);
  // <li>
  //   <span>Input value - title</span>
  //   <span>delete</span>
  // </li>

  //Appending the created li to the ul tag
  parent.appendChild(li);
  // <ul>
  //  <li>
  //     <span>bookTitle</span>
  //     <span>delete</span>
  //  </li>
  //  </ul>

  //creating the delete function
  deleteBook.addEventListener("click", function () {
    parent.removeChild(li);
  });
  
});

//search function
