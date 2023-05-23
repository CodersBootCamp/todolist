const inputbox = document.querySelector(".inputbox input");
const add = document.querySelector("#addbtn");
const todolist = document.querySelector(".todolist");
const pendingTasks = document.querySelector(".pendingTasks");
const clearall = document.querySelector(".clrall");

// Hiding and Unhiding add Button While Typing
inputbox.onkeyup = () => {
  let UserEnterValue = inputbox.value;
  if (UserEnterValue.trim() != 0) {
    add.style.display = "block"; 
  }
  else {
    add.style.display = "none";
  }
}

// Adding Items In The List
var item = [];
add.onclick = () => {
  item.push(inputbox.value)
  alert("Task Added Successfully")
  displayList(); 
}

// displayList Function Display All The Task
function displayList() {
  let ListTag = "";
  item.forEach((element, index) => {
    ListTag += `<li>
                        <div>
                         <label class="box">
                            <input class="checkinput" type="checkbox">
                            <span class="checkmark"></span>${element}
                        </label>
                        <span class="del">
                            <i class="fa fa-trash-o" aria-hidden="true" onclick="deleteTask(${index})"></i>
                        <span>
                        <div>
                </li>`;
  });
  todolist.innerHTML = ListTag; 
  inputbox.value = ""; 
  add.style.display = "none";
  // Total Pending Task
  pendingTasks.textContent = item.length;
}

// Delete Task Function To Delete Task From List
function deleteTask(index) {
  var checkDelete = confirm("Do you want to delete the task")
  if (checkDelete) {
    item.splice(index, 1);
    displayList();
  } else {
    return false
  }
}

// Delete All Tasks From The List
clearall.onclick = () => {
  var checkDelete = confirm("Do you want to clear all task")
  if (checkDelete) {
    item = []; 
    displayList();
  } else {
    return false
  }
}

// Delete All Clear Completed Task From The List
document.querySelector('.clrcomptask').onclick = () => {
  var checkDelete = confirm("Do you want to clear all completed task")
  if (checkDelete) {
    var inputElems = document.querySelectorAll(".checkinput"); 
    var temp = [] 
    for (var i = 0; i < item.length; i++) {
      if (inputElems[i].checked === true) {
        temp.push(item[i]);
      }
    }
    var j = 0;
    for (i = 0; i < item.length; i++) {
      if (item[i] === temp[j]) {
        item.splice(i, 1);
        j++;
        i--;
      }
    }
    displayList();
  } else {
    return false
  }

}

// onclick Function To Check All Task As Complete Task
document.querySelector('.complete').onclick = () => {
  checked(true);
}

// onclick Function To Check All Task As UnComplete Task
document.querySelector('.uncomplete').onclick = () => {
  checked(false);
}

//Checked Function To Check All Task
function checked(params) {
  var inputElems = document.querySelectorAll(".checkinput");
  for (var i = 0; i < item.length; i++) {
    if (params == true) {
      inputElems[i].checked = true;
    }
    else {
      inputElems[i].checked = false;
    }
  }
}