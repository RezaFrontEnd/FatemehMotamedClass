let sen = [
    {name:"reza",age:32},
    {name:"ali",age:28},
    {name:"ahmad",age:22},
    {name:"mohamadReza",age:15},
]
for(i in sen)
    {
        if(sen[i].age>=30 && sen[i].age<=40)
            {
                console.log(`${sen[i].name} ba sene ${sen[i].age} bozorgsal ast`)
            }
        else if(sen[i].age>=20 && sen[i].age<=30)
            {
                console.log(`${sen[i].name} ba sene ${sen[i].age} javan ast`)
            } 
        else if(sen[i].age>=13 && sen[i].age<=15)
            {
                console.log(`${sen[i].name} ba sene ${sen[i].age} nojavan ast`)
            }    
               
            
    }