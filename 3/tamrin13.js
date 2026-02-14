let text = "abbccc";
let sum = 0
let sum2 =0
let sum3 =0
for(x in text)
    {
        if(text[x]=="a")
            {
                sum += 1
            }
        if(text[x]=="b")
            {
                sum2 += 1
            }
        if(text[x]=="c")
            {
                sum3 += 1
            }            
                     
                       
    }
console.log(`sum a ${sum} ast`)    
console.log(`sum b ${sum2} ast`)   
console.log(`sum c ${sum3} ast`)   