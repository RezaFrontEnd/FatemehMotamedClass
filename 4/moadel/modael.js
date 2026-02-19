
function result()
{
    let nomre = prompt("chand ta nomre mikhahid vared konid")
    nomre = Number(nomre)
    nomreList = []
    let sum = 0
    let miangin =0
    if(nomre == nomre)
        {
            for(let i=0;i<nomre;i++)
                {
                    
                    let nomreInput = prompt(`nomre ${i+1} ra vared konid`)
                    nomreInput = Number(nomreInput)
                    nomreList.push(nomreInput)
   
                }
            for(let x=0;x<nomreList.length;x++)
                {
                    
                    sum += nomreList[x]
                    miangin = sum/nomreList.length
                       
                    
                }
            result = document.querySelector(".result")
            result.innerText = `moadel shoma ${miangin} ast`         
        }
 
}
