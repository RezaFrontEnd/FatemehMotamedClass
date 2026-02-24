    
function result()
{
let id = prompt("id ra vared konid")   
id = Number(id)  
let name = [
    {id:1,name:"ali"},
    {id:2,name:"hassan"},
    {id:3,name:"ghanbar"}
]
let nomre = [
            {id:1,nomre:17},
            {id:2,nomre:18},
            {id:3,nomre:19}
        ]  
let container = document.getElementById("result")            
for(i of name)
    {
        
        if(i.id == id)
            {
                for(x of nomre)
                    {
                        
                        if(x.id == id)
                            {
                                
                                let result = document.createElement("div")
                                let result2 = document.createElement("div")
                                result = container.appendChild(result)
                                result2 = container.appendChild(result2)
                                result.innerText = `id  ${i.id} motaalegh be ${i.name} ast`
                                result2.innerText = `id  ${i.id} nomre ${x.nomre} darad`
                                break
                            }

                       
                    }
                   
                     
            }
            
    }
}