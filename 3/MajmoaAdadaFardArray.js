//مجموع اعداد فرد آرایه
let numbers = [1, 2, 3, 4, 5, 6, 7];
let sum = 0
for(x in numbers)
    {
        if(numbers[x]%2 ==1)
            {
                sum += numbers[x]
        
            }   
    }
console.log(sum)  
      
    
