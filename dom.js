
let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', addItem);

function addItem() {
    let inputText = document.getElementById('add-input').value; 
   


    if (inputText == "") { 
        alert("Please Enter Something Before Hitting Add Item");
    } else {
        let newLi = document.createElement("li"); 
        newLi.textContent = inputText;
        document.getElementById('list').appendChild(newLi);
        document.getElementById('list').appendChild(newLi); 
        document.getElementById('add-input').value = ""; 
    }
}
