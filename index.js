const inputBox = document.getElementById("input-box");
const inputBox2 = document.getElementById("input-box2");

const listContainer = document.getElementById("list-container");
const listContainer2 = document.getElementById("list-container2");
//import sound from 


function playCheckSound() {
    const audio = new Audio('images/pen-click.mp3')
    audio.play()
}

function playCheckSound2() {
    const audio2 = new Audio('images/ping.mp3')
    audio2.play()
}


document.addEventListener('keydown' , function(e){
    if(e.key === 'Enter'){
        addTask();
        addTask2();
        playCheckSound2();
    }
});



function addTask(){
    playCheckSound2();

    if(inputBox.value === ''){
        alert("Que Paso Hombre , Escribe algo.");
    }
    else{
        let li1 = document.createElement("li");
        li1.innerHTML = inputBox.value;
        listContainer.appendChild(li1);
        
        let span1 = document.createElement("span");
        span1.innerHTML = "\u00d7";
        li1.appendChild(span1);
    
    }
    inputBox.value = '';
    saveData();

}

function addTask2(){
    if(inputBox2.value === ''){
        alert("Que Paso Hombre , Escribe algo.");
    }
    else{
        let li2 = document.createElement("li");
        li2.innerHTML = inputBox2.value;
        listContainer2.appendChild(li2);
        
        let span2 = document.createElement("span");
        span2.innerHTML = "\u00d7";
        li2.appendChild(span2);
    
    }
    inputBox2.value = '';
    saveData2();

}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        playCheckSound();
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false);


listContainer2.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        
        playCheckSound();
        saveData2();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData2();

    }
},false);





function saveData(){
    
    localStorage.setItem("data" , listContainer.innerHTML);
        
    

}

function saveData2(){
    
    localStorage.setItem("data2" , listContainer2.innerHTML);

}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function showData2(){
    listContainer2.innerHTML = localStorage.getItem("data2");
}
showData();
showData2();



//---------------------------TIMER for DAILY Tasks------------------------

function toggleOffChecked() {
    const listItems = listContainer2.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].classList.contains("checked")) {
            listItems[i].classList.remove("checked");
        }
    }
    saveData2();
}

// Calculate time until 6 AM
const now = new Date();
const millisTill6 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 50, 0, 0) - now;
if (millisTill6 < 0) {
    millisTill6 += 86400000; // It's already past 6 AM, schedule for next day
}

// Trigger the function at 6 AM daily
setTimeout(function() {
    toggleOffChecked();
    setInterval(toggleOffChecked, 24 * 60 * 60 * 1000); // Repeat every 24 hours
}, millisTill6);

//----------------------------
