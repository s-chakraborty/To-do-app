const input = document.getElementById("inputTask");
const list = document.getElementById("list");

function addTask(){
    if(input.value === ""){
        alert("enter something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let but = document.createElement("span");
        but.innerHTML = "\u00d7";
        li.appendChild(but);
    }
    input.value = "";
}

list.addEventListener('click',function(e){
   if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);