function removeListItem(){
    list = document.getElementById("list")
    li = list.lastElementChild
    list.removeChild(li)
}

function addListItem(){
    const input = prompt("Item name");
    li = document.createElement("li");
    li.textContent = input;
    document.getElementById("list").appendChild(li);
    
}