
function checkAnswer()
{
    const answerSayareh = "zamin";
    const answerHeyvan = "yozpalang";
    let shomarande = 0
    const selectedRadio = document.querySelector('input[name="javab"]:checked');
    const selectedRadio2 = document.querySelector('input[name="javab2"]:checked');
    if(selectedRadio)
        {
            if(selectedRadio.value === answerSayareh)
                {
                    shomarande +=10
                }  
            else
                {
                    shomarande = 0
                    
                }    
        }
    if(selectedRadio2)
        {
            if(selectedRadio2.value == answerHeyvan)
                {
                    shomarande +=10
                }
            else
                {
                    shomarande = 0
                }    
        }
let result = document.querySelector(".result")            
result.innerText = `nomre shoma ${shomarande} ast`      
}
