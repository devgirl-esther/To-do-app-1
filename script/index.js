window.addEventListener('load',() => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    const current_date = document.getElementById("date");
    const search_input = document.querySelector("#data-search")

    //no page refresh
    form.addEventListener("submit", (e) => {
        e.preventDefault();
//add task
        const task = input.value.trim();
//Date
    const current_date = new Date();
    let new_date = document.createElement("p");
    new_date.innerText = current_date;
    new_date.classList.add("date1");

//alert
        if(!task){
            alert("Please fill out the task.");
            task = input.value="";
            return
        }
//add task
let date = new Date().toLocaleDateString("en-GB",{weekday: "long",day:"2-digit",month:"long",year:"numeric"})
        const task_el = document.createElement("div");
        task_el.classList.add("task");
//add content
        const task_content_el = document.createElement("div")
        task_content_el.classList.add("content");
        

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly","readonly");

        task_content_el.appendChild(task_input_el);
        

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");



        let time = new Date().toLocaleString("en-US",{hour:"numeric",minute:"numeric"})
        let dateTim = document.getElementsByClassName("content")
        let ele = document.createElement("p")
        
        task_content_el.appendChild(ele)
        ele.innerText = `${date} ${time}`

        
//edit button
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";
 //delete button       
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);
        list_el.appendChild(task_el);

        input.value="";
 
        task_edit_el.addEventListener("click", () => {
            if (task_edit_el.innerText.toLowerCase()== "edit"){
                task_input_el.removeAttribute("readonly");
                task_edit_el.focus();
                task_edit_el.innerText = "Save";
            }else{
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly","readonly");
            }

        });
        task_delete_el.addEventListener("click",(e) => {
            list_el.removeChild(task_el)
        })

    })

    document.getElementById('search').addEventListener('keyup', function(event){
        const allTaskWrapper = Array.from(document.querySelectorAll(".task"))
        const allTasks = Array.from(document.querySelectorAll(".text"))
        const searchWord = event.target.value
        

        if(allTasks.length > 0){
            
            for (let i = 0; i < allTasks.length; i++) {
                const lowerCase = allTasks[i].value.toLowerCase()
                console.log(allTasks[i].value, searchWord)
                if (allTasks[i].value.includes(searchWord)) {
                    //console.log(allTasks[i].value, searchWord)
                    allTaskWrapper[i].style.display = 'flex'
                }else{
                    allTaskWrapper[i].style.display = 'none' 
                }
                
            }
        }

    })
    

});
