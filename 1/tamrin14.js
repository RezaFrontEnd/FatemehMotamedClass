function ghabz()
{
    let mojodi = 10000000
    const hadeghalMojodi = 10000
    let shomareInput = document.getElementById("shomareKart")
    let shomareKart = Number(shomareInput.value)
    let shomareKartVared = 6219861888626263
    let ShenaseGhabzInput = document.getElementById("ShenaseGhabz")
    let shenaseGhabz = Number(ShenaseGhabzInput.value)
    let ShenaseGhabzSabet = 654546455646
    let sahebeHesab = "masomeh haghani"
    let EnterMoneyKartBeKart = document.getElementById("moneyKartBeKart")
    let EnterMoney = Number(EnterMoneyKartBeKart.value)
    let enterMoneyGhabzInput = document.getElementById("money_ghabz")
    let enterMoneyGhabz = Number(enterMoneyGhabzInput.value)
    if(EnterMoney< hadeghalMojodi || EnterMoney>mojodi)
        {
            let noMojodi = document.getElementById("no_mojodi")
            noMojodi.innerText = 'mojodi nadarid'
        }
    else if(EnterMoney>hadeghalMojodi && EnterMoney<=mojodi)
        {
            if(shomareKart == shomareKartVared)
                {
                    let sahebeHesabResult = document.getElementById("sahebe_hesab")
                    sahebeHesabResult.innerText =  `in kart moalegh be ${sahebeHesab} ast`
                    let EnterMoneyResult = document.getElementById("mablaghe_kart_be_kart")
                    EnterMoneyResult.innerText = `shoma mablaghe ${EnterMoney} toman kart be kart kardid`
                    mojodi -= EnterMoney;    
                }
            else
                {
                    let shomareKartEshtebah = document.getElementById("shomare_kart_eshtebah")
                    shomareKartEshtebah.innerText = "shomare kart ra eshtebah vared kardid"
                   
                } 
        mojodiJadidShomaBaadKartBeKart = document.getElementById("mojodi_jadid_shoma_baad_kart_be_kart") 
        mojodiJadidShomaBaadKartBeKart.innerText =  `mojodi jadid shoma baad kart be kart ${mojodi} ast`           
            if(shenaseGhabz == ShenaseGhabzSabet)
                {
                    mojodi -= enterMoneyGhabz;
                    let mablaghGhabz = document.getElementById("mablaghe_ghabz")
                    mablaghGhabz.innerText = `mablaghe ghabz be meghadare ${EnterMoney} pardakht kardid` 
                }   
            else
                {
                    shenaseGhabzEshtebah = document.getElementById("shenase_ghabz_eshtebah")
                    shenaseGhabzEshtebah.innerText = "shanese ghabz ra eshtebah vared kardid"
                } 
        let mojodiJadidShoma = document.getElementById("mojodi_jadid_shoma")            
        mojodiJadidShoma.innerText = `mojodi jadid shoma ${mojodi} ast`                
        }   


}