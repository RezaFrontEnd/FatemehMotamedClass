function result()
{
    let a = ""
    let kandidAval = "reza"
    let kandidDovom = "ali"
    let kandidSevom = "ahmad"
    let tedadeAra = 0
    for(let x=0;x<=2;x++)
    {
       
       let kandida = prompt("be che kasi ray midahid?")
       if(kandida == kandidAval || kandida== kandidDovom || kandida == kandidSevom)
        {
            a += kandida + "\n"
            tedadeAra +=1
            let result = document.getElementById("calculate")
            result.innerText = `shoma be: ${kandida} ray dadid majmoe ara: ${tedadeAra} ast`
            if(tedadeAra==3)
                {
                    let barande = document.getElementById("barande")
                    barande.innerText = "shoma barande shodid"
                }
        }
        else if(kandida == "end")
            {
                break
            }
        else if(kandida == "")
            {
                let khali = document.getElementById("khali")
                khali.innerText = "shoma khali vared kardid"
            }    
        else
            {
                let bazande  = document.getElementById("bazande")
                bazande.innerText = "shoma bazande shodid"
            }
   

       
    }

}
