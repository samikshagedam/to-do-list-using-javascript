const inputBox = document.getElementById('input-box');
const btn = document.getElementById('btn');
const listcontainer = document.getElementById('list-container');

showList();

btn.addEventListener("click",()=>{
    if(inputBox.value === ""){
        alert("Write a task to add in a list");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
})

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showList(){
    listcontainer.innerHTML = localStorage.getItem("data");
}