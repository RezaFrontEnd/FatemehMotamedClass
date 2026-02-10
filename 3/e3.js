function shopping()
{
    let i = 0
    let items = ["nan","shir","panir","morgh"]
    cart = []
    while(i<items.length)
        {
           let answer = prompt(`${items[i]} mikhari`)
           if(answer == "y")
            {
                let number = prompt(`${items[i]} chand ta mikhay?`)
                let item = items[i]
                console.log(`item is ${item}`)
                cart[item] = number
                console.log(`cart item is ${cart[item]}`)
            } 
            else if(answer == "end")
                {
                    break
                } 
            i++
            
        } 
        let r = []
        for(let key in cart)
             {
               r.push = `${key} : ${cart[key]}\n`
            }
        let result = document.getElementById('result')
        result.innerText = `natije:\n${r}`    
        
}
