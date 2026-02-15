 //اگر اسم رضا بود به تعداد حلقه اسم رضا چاپ بکن
let name = "reza"
let result = []
if(name == "reza")
    {
       for(x=0;x<=3;x++)
        {
            result[x]= name
            result.push(result[x])
            console.log(result[x])
        }
                  
    }
