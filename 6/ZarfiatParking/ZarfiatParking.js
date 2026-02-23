function zarfiat()
{
let zarfiat_parking = [
    {tabaghe1:1,zarfiat:49},
    {tabaghe2:2,zarfiat:50},
    {tabaghe3:3,zarfiat:20}
]
let tabaghe = prompt("tabaghe chandom park mikonid?")
tabaghe = Number(tabaghe)
for(i of zarfiat_parking)
    {
        
        if(tabaghe == i.tabaghe1 || tabaghe == i.tabaghe2 ||tabaghe == i.tabaghe3)
            {
                let tabagheInput= document.getElementById("result")
                tabagheInput.innerText = `shoma tabaghe ${tabaghe} entekhab kardid`
                let park = prompt("aya park mikonid?")
                if(park== "y")
                {
                    result2 = document.getElementById("result2")
                    result2.innerText = "bale park mikonam"
                    let tedad = prompt("chand ta mashin hastid?")
                    tedad = Number(tedad)
                    result3 = document.getElementById("result3")
                    result3.innerText = `${tedad} mashin hastim`
                    if(tedad<i.zarfiat)
                        {
                             
                             tedad = (i.zarfiat)-tedad 
                             result4 = document.getElementById("result4")
                             result4.innerText = `zarfiat baghimande tabaghe ${tabaghe} ${tedad} ast` 
                             break 
                        }
                    else if(tedad>i.zarfiat)
                        {
                             result4 = document.getElementById("result4")
                             result4.innerText = `zarfiat nadarim` 
                             break 
                        }  
                    
                       
                }
                else
                {
                    result2 = document.getElementById("result2")
                    result2.innerText = "khair park nemikonam"
                    
                }        
         
        }
        else if(tabaghe == "end")
        {
            break
        }       
       
        
    }
}