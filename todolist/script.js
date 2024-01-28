const inputbtn=document.querySelector(".inputbtn");
const plusicon=document.querySelector(".plusicon");
const contain=document.querySelector(".container");

plusicon.addEventListener("click",function(event) {
    if(inputbtn.value==''){
        alert("please enter task.")
        return;
    }
    const label=document.createElement('label');
    label.classList.add("todolabel")
    label.htmlFor="check"
    label.textContent=inputbtn.value;
    label.style.color="white";
    const inp=document.createElement('input');
    inp.type="checkbox"
    inp.classList.add("check");
    const todo=document.createElement("div");
    todo.classList.add("todos");
    inp.style.marginRight="5px";
    contain.appendChild(todo);
    todo.appendChild(inp);
    todo.appendChild(label);
    todo.style.marginTop="20px";
    todo.style.marginLeft="20px";
    inputbtn.value="";
    inp.addEventListener("change",function(event) {
        if(inp.checked){
            label.style.textDecoration='line-through';
    
        }
        else{
            label.style.textDecoration='none';
        }
    });
});


