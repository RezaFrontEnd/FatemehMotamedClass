const container = document.createElement("ol")
let todo_list = localStorage.getItem("todo-items")
todo_list = todo_list ===null ?[]:JSON.parse(todo_list)
for(let item of todo_list)
    {
        createRow(item)
    }
document.querySelector(".result-card").appendChild(container) 
document.querySelector('form').onsubmit =(event) => {
    event.preventDefault();
    const value = document.querySelector("form input").value
    if(value.trim()=== "")
        {
            alert("value can not empty")
            return
        }
    const id = (Math.random()+1).toString(16).substring(7)
    const data = {id,value}  
    console.log(data)
    createRow(data)
    todo_list.push(data)
    addStorage()   
}
function createRow(data)
{
    const row = document.createElement("li")
    const title = document.createElement("h3")
    const dtbn = document.createElement("button")
    dtbn.innerHTML = "delete"
    dtbn.onclick= () =>
            {
                if(confirm("Delete this row?"))
                    {
                    row.remove();
                    todo_list = todo_list.filter(item => item.id !== data.id)
                    addStorage() 
                    }
            }
    title.onclick = () =>
        {
            const Newvalue = prompt("enter new value")
            title.innerHTML = Newvalue
            data.value = Newvalue
            addStorage()
        }        
    row.appendChild(title)
    container.appendChild(row)
    row.appendChild(dtbn)
    title.innerHTML = data.value        
}


function addStorage()
{
    localStorage.setItem("todo-items",JSON.stringify(todo_list))
}