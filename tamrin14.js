let mojodi = 10000000
const hadeghalMojodi = 10000
const shomareVaredShode = 5022291311394280
const shomareMoshtari = 5022291311394280
const sahebeHesab = "masomeh haghani"
const EnterMoneyKartBeKart = 3000000
const shenaseGhabzVaredShode = 654546455646
const shenaseGhabz = 654546455646
const enterMoneyGhabz = 100000
if(EnterMoneyKartBeKart< hadeghalMojodi || EnterMoneyKartBeKart>mojodi)
    {
        console.log("mojodi nadarid")
    }
else if(EnterMoneyKartBeKart>hadeghalMojodi && EnterMoneyKartBeKart<=mojodi)
    {
        if(shomareVaredShode == shomareMoshtari)
            {
                console.log(`in kart moalegh be ${sahebeHesab} ast`)
                console.log(`shoma mablaghe ${EnterMoneyKartBeKart} toman kart be kart kardid`)
                mojodi -= EnterMoneyKartBeKart;    
            }
        else
            {
                console.log("shomare kart ra eshtebah vared kardid")
            }      
    console.log(`mojodi jadid shoma baad kart be kart ${mojodi} ast`)

        if(shenaseGhabzVaredShode == shenaseGhabz)
            {
                mojodi -= enterMoneyGhabz;
                console.log(`mablaghe ghabz be meghadare ${enterMoneyGhabz} pardakht kardid`)
            }   
        else
            {
                console.log("shanese ghabz ra eshtebah vared kardid")
            }     
    console.log(`mojodi jadid shoma ${mojodi} ast`)                  
    }   

