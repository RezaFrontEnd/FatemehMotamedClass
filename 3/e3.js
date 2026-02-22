function shopping()
{
    let result = document.getElementById("result")
    let items = [
        {name:"nan",price:5000},
        {name:"shir",price:8000},
        {name:"panir",price:12000},
        {name:"morgh",price:15000}
    ]
    cart = []
    for(let i = 0;i<items.length;i++)
        {
           let answer = prompt(`${items[i].name} mikhari`)
           if(answer == "y")
            {
                let number = prompt(`${items[i].name} chand ta mikhay?`)
                item_cart = 
                {
                name:items[i].name,
                price:items[i].price,
                number:number,
                total:items[i].price * number
                }
                cart.push(item_cart)
            } 
            else if(answer == "end")
                {
                    break
                } 
            
            
        }
        if(cart.length>0)
            {
                let tableHtml = "<table border='1'>"
                tableHtml += "<tr><th>row</th><th>product</th><th>price</th><th>number</th><th>total</th></tr>"
                let sumTotal = 0
                for(let j=0;j<cart.length;j++)
                    {
                        tableHtml += "<tr>"
                        tableHtml += "<td>" + (j+1) + "</td>"
                        tableHtml += "<td>" + cart[j].name + "</td>"
                        tableHtml += "<td>" + cart[j].price + "</td>"
                        tableHtml += "<td>" + cart[j].number + "</td>"
                        tableHtml += "<td>" + cart[j].total + "</td>"
                        tableHtml += "</tr>"
                        sumTotal = sumTotal + cart[j].total
                        
                    }
                tableHtml += "<tr>"    
                tableHtml += "<td>Total price</td>"    
                tableHtml += "<td>" + sumTotal + "</td>" 
                tableHtml += "</tr>" 
                result.innerHTML = tableHtml  
            }
        else
            {
                result.innerHTML = "<p>kalayi vojod nadarad</p>"
            }    
          
        
}
