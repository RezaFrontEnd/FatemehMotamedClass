const name = "reza"
const age = 18
const kodeMeli = "0016636694"
const email = "reza.ahmadi350@gmail.com"
const shomareTelephone = ""
if(age<18)
    {
        console.log("shoma nemitonid sabtenam konid")
        
    }
else
    {
        console.log("shoma mitavanid sabtenam konid")
        if(kodeMeli == "0016636694")
            {
                console.log("kode meli sabt shod")
                if(email == "reza.ahmadi350@gmail.com")
                {
                    console.log("email sabt shod")
                    if(shomareTelephone == "09370256305")
                    {
                        console.log("shomare telephone sabt shod")
                        console.log("sabtename shoma ba movaghiat anjam shod")
                    }
                    else
                    {
                        console.log("shomare telephone sabt nashod dobare vared konid")
                        console.log("sabtename shoma ba movaghiat anjam nashod")
                    } 
                } 
                else
                {
                    console.log("email sahih nist dobare vared konid")
                } 
                 
            }
        
        else
            {
                console.log("kode meli ra dorost vared nakardid dobare vared konid")
            }                 
    }