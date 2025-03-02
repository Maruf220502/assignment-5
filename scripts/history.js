document.getElementById("history-btn")
.addEventListener("click", function(event){
    event.preventDefault();
    const containner = document.getElementById("history-containner");
    containner.innerHTML = ' ';
})