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
//Check if a book title is available
//steps:
//1.Iterate through our list of books
//2.Action to perform when there is a match/no match in the search.
//3.collect the input search value and compare with book titles.
//4.Attach an event to the searchbox

//selecting the input of search from the HTML
let searchBox = document.getElementById("searchBooks");

searchBox.addEventListener("keyup", function (e) {
  let searchTerm = e.target.value.toLowerCase();

  //selecting the titles
  let books = parent.getElementsByTagName("li");
  Array.from(books).forEach((book) => {
  let title = book.firstElementChild.textContent;

    //comparing the search term and the titles
    //when -1 is returned, it means the search term does not exist.
    // != -1 means the search term do exist in the title.
    if (title.toLowerCase().indexOf(searchTerm) != -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
