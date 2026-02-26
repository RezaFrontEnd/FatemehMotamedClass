
document.addEventListener('DOMContentLoaded',()=>
{
    let ramz = [
    {name:"dafeAval",ramz:11},
    {name:"dafedovom",ramz:77},
    {name:"dafesevom",ramz:66},
    ] 
    isValid1 = false
    isValid2 = false
    isValid3 = false
    let container = document.getElementById("results")
    ramzeEshtebah = document.createElement("div")
    gavSandogh = document.createElement("div")
    container.appendChild(ramzeEshtebah)
    container.appendChild(gavSandogh)
    document.addEventListener('input',(e)=>
    {
        if(e.target.classList.contains("ramz1"))
            {
                for(x of ramz)
                    {
                        if(x.name === "dafeAval" && x.ramz === Number(e.target.value))
                            {
                                isValid1 = true
                                break
  
                            }   
                    }
                if(isValid1 == false)
                    {
                        ramzeEshtebah.innerText = 'ramz 1 eshtebah'
                    } 
                else
                    {
                        ramzeEshtebah.innerText = ""
                    }     
                  
            }
        if(e.target.classList.contains("ramz2"))
            {
                for(x of ramz)
                    {
                        if(x.name === "dafedovom" && x.ramz === Number(e.target.value))
                            {
                                isValid2 = true
                                break
                            }
                         
                    }
                 if(isValid2 == false)
                    {
                        ramzeEshtebah.innerText = 'ramz 2 eshtebah'
                    } 
                else
                    {
                        ramzeEshtebah.innerText = ""
                    }         
                    
            } 
        if(e.target.classList.contains("ramz3"))
            {
                for(x of ramz)
                    {
                        if(x.name === "dafesevom" && x.ramz === Number(e.target.value))
                            {
                                isValid3 = true
                            }
                        
                    }
                if(isValid1 == false)
                    {
                        ramzeEshtebah.innerText = 'ramz 3 eshtebah'
                    } 
                else
                    {
                        ramzeEshtebah.innerText = ""
                    }         
            }
        if(isValid1 == true && isValid2==true && isValid3==true)
            {
                gavSandogh.innerText = "gavsandogh baz shod"
            }           
   
    }
    
    )
}

)



// for(x of ramz)
//     {
//        if(x.name == "dafeAval" && x.ramz == 11)
//         {
//             console.log(`dafe aval ramz ${x.ramz} paida shod`)
//             isValid1 = true
            
//         }
//         if(x.name == "dafedovom" && x.ramz == 77)
//             {
//                 console.log(`dafe dovom ramz ${x.ramz} paida shod`)
//                 isValid2 = true
//             }
//         if(x.name == "dafesevom" && x.ramz == 66)
//             {
//                 console.log(`dafe sevom ramz ${x.ramz} paida shod`)
//                 isValid3 = true
                
//             }   
//     }
// if(isValid1 && isValid2 && isValid3)
//     {
//         console.log("gavsandogh baz shod")
//     } 
// else
//     {
//         console.log("ramz eshtebah ast")
//     }      