//تمرین چاپ تعداد کاراکترهایی که فاصله ندارند
let text = "hello world"
let sum= 0
for(x in text)
    {
        if(text[x]==" ")
            {
               sum =0
            }
        else
            {
                sum += x   
            }  
             
    }
console.log(x)     
