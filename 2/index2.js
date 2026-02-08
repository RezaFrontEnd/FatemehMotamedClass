const discount =()=>
    {
    let result = document.getElementById("id_result")
    let x = 1
        while(x<=3)
        {
            let price = prompt(`enter price`)
            price = parseFloat(price)
            
            if(price<=0)
            {
            result.innerText = 'price is invalid' 
            x++;
        
            }
            else
            {
               if(price>=100000)
                {
                    let discount_price = (price*20)/100
                    result.innerText = `your discount is ${discount_price} toman`
                    return
                }
                else
                {
                    let discount_price = (price*10)/100
                    result.innerText = `your discount is ${discount_price} toman`
                    return
                }
            }
        }
    }