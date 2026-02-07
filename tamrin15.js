let myBudget = 10000000
const ghame = 120000
const ghorme = 150000
const kabab = 500000 
const HazineBiron = 1000000 
const hazineBashgah = 1000000 
const hazinehCafe = 500000 
const hafteAval = "hafte1"
const hafteDovom = "hafte2"
const hafteSevom = "hafte3"
const hafteCharom = "hafte 4"
const haftevaredShodeAval = "hafte1"
const haftevaredShodeDovom = "hafte2"
const haftevaredShodesevom = "hafte3"
console.log(`budget kole shoma ${myBudget} ast`)
if(haftevaredShodeAval=="hafte1")
    {
        const kharj1 = (ghame*2)+ kabab + (ghorme*4);
        if(kharj1<=myBudget)
        {
            console.log(`kharj hafte aval ${kharj1} ast`)
            myBudget -= kharj1;
            console.log(`budge hafte aval shoma ${myBudget} ast`)
        }
        else
            {
                console.log("shoma enghar budge nadarid")
            }   
        if(haftevaredShodeDovom == hafteDovom)
        {
            const kharj2 = HazineBiron + hazineBashgah
            if(kharj2<=myBudget)
                {
                    console.log(`kharj hafte dovom ${kharj2} ast`)
                    myBudget -= kharj2;
                    let result = kharj1 + kharj2
                    console.log(`kharje hafte aval va dovom shoma ${result} ast`) 
                    console.log(`budge hafte dovom shoma ${myBudget} ast`)  
                }
            else
                {
                    console.log("shoma enghar budge nadarid")
                } 
             if(haftevaredShodesevom == "hafte3")
                {
                    const kharj3 = hazinehCafe + HazineBiron + (kabab*3) + (ghame*4)
                    if(kharj3<=myBudget)
                        {
                            console.log(`kharj hafte dovom ${kharj3} ast`)
                            myBudget -= kharj3;
                            result = kharj1 + kharj2 + kharj3
                            console.log(`kharje hafte aval va dovom va sevom shoma ${result} ast`)   
                            console.log(`budge hafte sevom shoma ${myBudget} ast`)
                        }
                    else
                        {
                            console.log("shoma enghar budge nadarid")
                        }            
                }               
        }  
    }


