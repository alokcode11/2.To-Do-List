// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask() {
//   if (inputBox.value === "") {
//     alert("You must write something");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);
//     let span = document.createElement("span");
//     span.innerHTML = "x";
//     li.appendChild(span);
//   }
//   inputBox.value = "";
//   saveData();
// }
// listContainer.addEventListener(
//   "click",
//   function (e) {
//     if (e.target.tagName === "LI") {
//       e.target.listContainer.toggle("checked");
//       saveData();
//     } else if (e.target.value === "span") {
//       e.target.parentElement.remove();
//       saveData();
//     }
//   },
//   false
// ); // event bubbling happend here element capturing // bubble up from the target elemet to root element so // that the value of the event capturing become true

// function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
// }
// function showTask() {
//   localStorage.setItem("data", listContainer.innerHTML);
//   listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();



const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;  // Corrected the spelling here
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";  // Unicode for '×'
    li.appendChild(span);
  }
  inputBox.value = "";  // Clear input after adding task
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");  // Toggle the checked class correctly
      saveData();
    } else if (e.target.tagName === "span") {  // Fix condition to check for "SPAN"
      e.target.parentElement.remove();  // Remove the task
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);  // Save the list to localStorage
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");  // Retrieve and display stored tasks
}

showTask();  // Show tasks when the page is loaded

