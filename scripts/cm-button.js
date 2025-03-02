document.getElementById("btn-1")
.addEventListener("click", function(event){
    event.preventDefault();
    const now = new Date();
    const timeOnly = now.toLocaleTimeString('en-US');

    document.getElementById("btn-1").setAttribute("disabled", "true");
    const btn1 = getInnerTextByID("task-number");
    const sum = btn1-1;
    const navNumber = getInnerTextByID("nav-number");
    const add = navNumber + 1;

    if(sum>=0){
        alert("Board Updated Sucessfully")

        const containner = document.getElementById("history-containner");
        const p = document.createElement("p");
        p.classList.add("p-3", "bg-[#F4F7FF]", "rounded-xl");
        p.innerText = ` 
        You have completed the Fix Mobile Button issue at ${timeOnly};
        `
        containner.appendChild(p);

        if(sum=== 0){
            alert("congrates!!!you have completed all the task")
        }
    }
    
    setInnerTextByIDandValue("task-number",sum );
    setInnerTextByIDandValue("nav-number",add );
})

// button-2

document.getElementById("btn-2")
.addEventListener("click", function(event){
    event.preventDefault();
    const now = new Date();
    const timeOnly = now.toLocaleTimeString('en-US');

    document.getElementById("btn-2").setAttribute("disabled", "true");

    const btn1 = getInnerTextByID("task-number");
    const sum = btn1-1;
    const navNumber = getInnerTextByID("nav-number");
    const add = navNumber + 1;

    if(sum>=0){
        alert("Board Updated Sucessfully")

        const containner = document.getElementById("history-containner");
        const p = document.createElement("p");
        p.classList.add("p-3", "bg-[#F4F7FF]", "rounded-xl");
        p.innerText = ` 
        You have completed the Add Dark Mode at ${timeOnly};
        `
        containner.appendChild(p);

        if(sum=== 0){
            alert("congrates!!!you have completed all the task")
        }
    }
    
    setInnerTextByIDandValue("task-number",sum );
    setInnerTextByIDandValue("nav-number",add );
})

// button-3

document.getElementById("btn-3")
.addEventListener("click", function(event){
    event.preventDefault();
    const now = new Date();
    const timeOnly = now.toLocaleTimeString('en-US');

    document.getElementById("btn-3").setAttribute("disabled", "true");

    const btn1 = getInnerTextByID("task-number");
    const sum = btn1-1;
    const navNumber = getInnerTextByID("nav-number");
    const add = navNumber + 1;

    if(sum>=0){
        alert("Board Updated Sucessfully")

        const containner = document.getElementById("history-containner");
        const p = document.createElement("p");
        p.classList.add("p-3", "bg-[#F4F7FF]", "rounded-xl");
        p.innerText = ` 
        You have completed the Optimize Home page at ${timeOnly};
        `
        containner.appendChild(p);

        if(sum=== 0){
            alert("congrates!!!you have completed all the task")
        }
    }
    
    setInnerTextByIDandValue("task-number",sum );
    setInnerTextByIDandValue("nav-number",add );
})

// button-4

document.getElementById("btn-4")
.addEventListener("click", function(event){
    event.preventDefault();
    const now = new Date();
    const timeOnly = now.toLocaleTimeString('en-US');

    document.getElementById("btn-4").setAttribute("disabled", "true");

    const btn1 = getInnerTextByID("task-number");
    const sum = btn1-1;
    const navNumber = getInnerTextByID("nav-number");
    const add = navNumber + 1;

    if(sum>=0){
        alert("Board Updated Sucessfully")

        const containner = document.getElementById("history-containner");
        const p = document.createElement("p");
        p.classList.add("p-3", "bg-[#F4F7FF]", "rounded-xl");
        p.innerText = ` 
        You have completed the Add new emoji 🤲 at ${timeOnly};
        `
        containner.appendChild(p);

        if(sum=== 0){
            alert("congrates!!!you have completed all the task")
        }
    }
    
    setInnerTextByIDandValue("task-number",sum );
    setInnerTextByIDandValue("nav-number",add );
})

// button-5

document.getElementById("btn-5")
.addEventListener("click", function(event){
    event.preventDefault();
    const now = new Date();
    const timeOnly = now.toLocaleTimeString('en-US');

    document.getElementById("btn-5").setAttribute("disabled", "true");

    const btn1 = getInnerTextByID("task-number");
    const sum = btn1-1;
    const navNumber = getInnerTextByID("nav-number");
    const add = navNumber + 1;

    if(sum>=0){
        alert("Board Updated Sucessfully")

        const containner = document.getElementById("history-containner");
        const p = document.createElement("p");
        p.classList.add("p-3", "bg-[#F4F7FF]", "rounded-xl");
        p.innerText = ` 
        You have completed the Integrate OpenAI API at ${timeOnly};
        `
        containner.appendChild(p);

        if(sum=== 0){
            alert("congrates!!!you have completed all the task")
        }
    }
    
    setInnerTextByIDandValue("task-number",sum );
    setInnerTextByIDandValue("nav-number",add );
})

// button-6

document.getElementById("btn-6")
.addEventListener("click", function(event){
    event.preventDefault();
    const now = new Date();
    const timeOnly = now.toLocaleTimeString('en-US');

    document.getElementById("btn-6").setAttribute("disabled", "true");

    const btn1 = getInnerTextByID("task-number");
    const sum = btn1-1;
    const navNumber = getInnerTextByID("nav-number");
    const add = navNumber + 1;

    if(sum>=0){
        alert("Board Updated Sucessfully")

        const containner = document.getElementById("history-containner");
        const p = document.createElement("p");
        p.classList.add("p-3", "bg-[#F4F7FF]", "rounded-xl");
        p.innerText = ` 
        You have completed the Improve Job searching at ${timeOnly};
        `
        containner.appendChild(p);

        if(sum=== 0){
            alert("congrates!!!you have completed all the task")
        }
    }
    
    setInnerTextByIDandValue("task-number",sum );
    setInnerTextByIDandValue("nav-number",add );
})



