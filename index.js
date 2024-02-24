const inputBox = document.getElementById("input-box");
//const inputBox2 = document.getElementById("input-box2");

const listContainer = document.getElementById("list-container");
//const listContainer2 = document.getElementById("list-container2");
document.addEventListener('keydown' , function(e){
    if(e.key === 'Enter'){
        addTask();
    }
})
function addTask(){
    if(inputBox.value === ''){
        alert("Que Paso Hombre , Escribe algo.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    
    }
    inputBox.value = '';
    saveData();

}

// function addTask2(){
//     if(inputBox2.value === ''){
//         alert("Que Paso Hombre , Escribe algo.");
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer2.appendChild(li);
        
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
    
//     }
//     inputBox2.value = '';
//     saveData();

// }

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false);

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
    //localStorage.setItem("data2" , listContainer2.innerHTML);

}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
    //listContainer2.innerHTML = localStorage.getItem("data2");
}
showData();