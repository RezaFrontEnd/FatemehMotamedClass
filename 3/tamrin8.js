//
let comment = "he llo123 this is my comment hello this is my comment hello this is my comment hello this is my comment hello this is my comment"
if(comment.length<5)
    {
        console.log("کامنت خیلی کوتاه است")
    }
else if(comment.length>100)
    {
        console.log("کامنت خیلی طولانی است")
    }
for(let i=0;i<comment.length;i++)
    {
       if(comment[i]>="0" && comment[i]<="9")
        {
            console.log("کامنت نباید شامل عدد باشد")
            break
        }
    }

