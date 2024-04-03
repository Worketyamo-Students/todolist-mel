// let moon = document.getElementById("moon");
// moon.addEventListener("onclick",background());

// function background(){
//     let bg = document.getElementById("bg");
//     bg.style.backgroundImage = "url('./assets/img/bg2.jpg')";
// }
let isClicked = false
function bg(){
    let moon=document.getElementById("bg");
    moon.style.transition="1.5s"
    moon.style.backgroundImage="url('./assets/img/bg2.jpg')";
}



var input = document.getElementById("input");
var image = document.getElementById("img");

input.addEventListener("input",function(){
    var text = input.value;
    (text.length > 5) ?image.src="./assets/img/Group 4.svg" :image.src="./assets/img/Oval Copy.png"
})
function AddTodo(todo){
 const tex =  ` <div class="flex items-center justify-between w-full h-[4rem] px-[20px] bg-white">
    <div class="flex">
        <ion-icon name="radio-button-off-outline" class="text-2xl mr-5 opacity-35"></ion-icon>
        <p class="opacity-60">${todo}</p>
    </div>
    <ion-icon name="close-outline" class="text-3xl font-extralight"></ion-icon>
</div>`
    const position = 'afterbegin';
  task.insertAdjacentHTML(position,tex);
    // AddTodo(todo)
   
}

document.addEventListener('keyup', (e)=>{
    if (e.keyCode == 13){
        const todo = input.value;
       if(todo.length <= 5)return;
       AddTodo(todo);
       input.value = " ";
    }
})
