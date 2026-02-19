let name = {
    nameReza:"reza",
    nameAli:"ali",
    nameMohammad:"mohammad"
}
let result = document.querySelector(".result")
for(i in name)
    {
        let input = prompt("name morede nazar khod ra vared konid")
        if(name[i] == input)
            {
                result.innerHTML = "reza paida shod"
                break
            }
        else 
        {
            result.innerHTML = "paida nashode"
            break
            
        }    
    }