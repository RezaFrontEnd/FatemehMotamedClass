
function ghaza()
{
    let myBudgetInput = document.getElementById("id_myBudget")
    let myBudget = Number(myBudgetInput.value)
    let ghameّInput = document.getElementById("id_ghame")
    let ghame = Number(ghameّInput.value)
    let ghormeInput = document.getElementById("id_ghorme")
    let ghorme = Number(ghormeInput.value)
    let kababInput = document.getElementById("id_ghorme")
    let kabab = Number(kababInput.value)
    let HazineBironInput = document.getElementById("id_biron")
    let HazineBiron = Number(HazineBironInput.value)
    let hazineBashgahInput = document.getElementById("id_bashgah")
    let hazineBashgah = Number(hazineBashgahInput.value)
    let hazinehCafeInput = document.getElementById("id_cafe")
    let hazinehCafe = Number(hazinehCafeInput.value)
    let hafteAval = "hafte1"
    let hafteDovom = "hafte2"
    let hafteSevom = "hafte3"
    if(hafteAval=="hafte1")
    {
        let kharj1 = (ghame*2)+ kabab + (ghorme*4)
        if(kharj1<=myBudget)
        {
            let kharj1Result = document.getElementById("kharj1")
            kharj1Result.innerText = `kharj hafte aval ${kharj1} ast`
            myBudget -= kharj1;
            let myBudgetResult = document.getElementById("myBoudgetResult")
            myBudgetResult.innerText = `budget hafe aval shoma ${myBudget} ast`
        }
        else
            {
                  myBudgetResult = document.getElementById("myBoudgetResult")
                  myBudgetResult.innerText = `shoma boudget nadarid`
            }   
        if(hafteDovom == "hafte2")
        {
            let kharj2 = HazineBiron + hazineBashgah
            if(kharj2<=myBudget)
                {
                    kharj2Result = document.getElementById("kharj2")
                    kharj2Result.innerText = `kharj hafte dovom ${kharj2} ast`
                    myBudget -= kharj2;
                    let resultKharj2 = kharj1 + kharj2
                    resultKharj2 .innerText = `kharj hafte aval va dovom shoma ${kharj2}`
                    myBudgetResult = document.getElementById("myBoudgetResult")
                    myBudgetResult.innerText = `budget hafe aval va dovom shoma ${myBudget} ast`
                }
            else
                {
                    myBudget.innerText = `shoma ${myBudget} nadarid`
                } 
             if(hafteSevom == "hafte3")
                {
                    let kharj3 = hazinehCafe + HazineBiron + (kabab*3) + (ghame*4)
                    if(kharj3<=myBudget)
                        {
                            kharj3Result = document.getElementById("kharj3")
                            kharj3Result.innerText = `kharj hafte sevom shoma ${kharj3} ast`
                            myBudget -= kharj3;
                            let resultKharj3 = kharj1 + kharj2 + kharj3
                            resultKharj3 .innerText = `kharj hafte aval va dovom va sevom shoma ${kharj3}`
                            myBudgetResult = document.getElementById("myBoudgetResult")
                            myBudgetResult.innerText = `budget hafe aval va dovom va sevom shoma ${myBudget} ast`
                            
                        }
                    else
                        {
                            myBudget.innerText = `shoma boudget nadarid`
                        }            
                }               
        }  
    }       
}
