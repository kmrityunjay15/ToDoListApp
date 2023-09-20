const inputbox = document.querySelector(".inputbox input");
const add = document.querySelector("#addbutton");
const todolist = document.querySelector(".itemlist");
const pendingTasks = document.querySelector(".pendingTasks");
const clearall = document.querySelector(".clearall");

// onkeyup event for hide and unhide Add button
inputbox.onkeyup = () => {
    let UserEnterValue = inputbox.value;
    if (UserEnterValue.trim() != 0) {//user value isn't empty
        add.style.display = "block"; //show button
        console.log("is button added");
    }
    else {
        add.style.display = "none";//hide button
        console.log("is button not added");
    }
}

var item = [];
//add task on add button click
add.onclick = () => {
    item.push(inputbox.value)
    showcase(); // showcase call for add li tag in html etc.
}

//display all the added task
function showcase() {
    let ListTag = "";
    item.forEach((element, index) => {
        ListTag += `<li>
                         <label class="box">
                            <input class="checkinput" type="checkbox">
                                <span class="checkmark"></span>${element}
                        </label>
                        <span class="icon">
                            <i class=" del uil uil-plus-circle" onclick="deleteTask(${index})"></i>
                        <span>
                    </li>`;
                });
    todolist.innerHTML = ListTag; //adding new li tag inside ul tag
    inputbox.value = ""; //once task added the input field blank
    add.style.display = "none";//button hide
    pendingTasks.textContent = item.length;
}

// Delete task function is used to remove the task from the list
function deleteTask(index) {
    item.splice(index, 1);//remove element from array
    showcase();
}
// delete all tasks function is used for delete all task from your list
clearall.onclick = () => {
    item = [];
    showcase();
}
// Clear Completed is used for which task complete delete from list.
document.querySelector('.clearcomtask').onclick = () => {
    var inputElems = document.querySelectorAll(".checkinput"); // Selected task in list
    var temp = [] // to store completed task
    for (var i = 0; i < item.length; i++) {
        if (inputElems[i].checked === true) {
            temp.push(item[i]);
        }
    }
    var j = 0;
    for (i = 0; i < item.length; i++) {
        if (item[i] === temp[j]) {
            item.splice(i, 1);//if task store in temp array than remove from item array
            j++;
            i--;
        }
    }
    showcase();
}

//Complete task
document.querySelector('.complete').onclick = () => {
    checked(true);
}
//Incomplete task
document.querySelector('.incomplete').onclick = () => {
    checked(false);
}
//Checked and unchecked task
function checked(params) {
    var inputElems = document.querySelectorAll(".checkinput"); // Select selected task in list
    for (var i = 0; i < item.length; i++) {
        if (params == true) {
            inputElems[i].checked = true;
        }
        else {
            inputElems[i].checked = false;
        }
    }
}