let text = "banana apple";
let sum = 0
for(let x=0;x<text.length;x++)
    {
        if(text[x].includes("a"))
            {
               sum += text[x].length  
            }
          
    }
console.log(sum)   
  