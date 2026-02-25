document.addEventListener('DOMContentLoaded', () => {
    let results = document.getElementById("results")
    let result = document.createElement("div")
    let result2 = document.createElement("div")
    let result3 = document.createElement("div")
    results.appendChild(result)
    results.appendChild(result2)
    results.appendChild(result3)
    document.addEventListener('input', (e) => {
        // learn e.target.classList.contains by chatgpt
        let target = e.target
        if (target.classList.contains("name")) 
        {
            let max = 10
           if(target.value.length>max)
                {
                    //e.target.value = e.target.value.slice(0,max)
                    // learn by chatgpt
                    e.target.value = e.target.value.slice(0,max)
      
                }
            if (/^[a-z!@#$%^&*()_+]+$/.test(e.target.value)) 
                {
                    result.innerHTML = "name is valid ✅"
                } 
            else 
                {
                    result.innerHTML = "name is not valid ❌"
                }    
        }

        if (target.classList.contains("last-name")) 
        {
            if (/^[a-z!@#$%^&*()_+]+$/.test(e.target.value)) {
                result2.innerHTML = "lastname is valid ✅"
            } 
            else 
            {
                result2.innerHTML = "lastname is not valid ❌"
            }
        }
        if(target.classList.contains("age"))
            {
                //learn regex number by chatgpt
                if (/^\d+$/.test(e.target.value)) 
                {
                    result3.innerHTML = "age is valid ✅"
                } 
                else 
                {
                    result3.innerHTML = "age is not valid ❌"
                }
            }
    }) 
})
