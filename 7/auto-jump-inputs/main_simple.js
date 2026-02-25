document.addEventListener("DOMContentLoaded",()=>
{
    const max_length = 4
    const container = document.querySelector(".container")
    container.addEventListener('keypress',(event)=>{
        let target = event.target
        if(target.tagName==="INPUT")
            {  
                if(target.value.length>=max_length)
                    {
                        event.preventDefault()
                    }
            }
    container.addEventListener("keyup",(event)=>{
        if(target.tagName==="INPUT")
            {
                if(event.key !== "Backspace" && target.value.length===max_length)
                    {
                        const current = parseInt(target.getAttribute('data-order'))
                        const next = container.querySelector(`input[data-order="${current+1}"]`)
                        if(next)
                            {
                                next.focus()
                            }
                    }
            }
    })
    container.addEventListener("keydown",(event)=>{
        if(target.tagName==="INPUT" && event.key === "Backspace")
            {
                if(target.value.length === 0)
                    {
                        const current = parseInt(target.getAttribute('data-order'))
                        const prev = container.querySelector(`input[data-order="${current-1}"]`)
                        if(prev)
                        {
                            prev.focus()
                        }     
                    }   
                       
                    
            }
    })      

    
    


    })
})
