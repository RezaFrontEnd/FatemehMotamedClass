function result()
{
    let container = document.getElementById("result")
    let vazn = prompt("vazn khod ra vared konid")
    vazn = Number(vazn) 
    let ghad = prompt("ghad khod be metr ra vared konid")
    ghad = Number(ghad)
    let result = vazn/(ghad*ghad)
    let rounded = result.toFixed(2)
    container.innerText = `bmi shoma ${rounded} ast`
    if(rounded<18.5)
        {
            let reuslt2 = document.createElement("div")
            container.appendChild(reuslt2)
            reuslt2.innerText = "shoma kambod vazn darid"
        }
    else if(rounded>=18.5 && rounded<25)
        {
            let reuslt3 = document.createElement("div")
            container.appendChild(reuslt3)
            reuslt3.innerText = "vazn shoma baine normal va motaadel ast"
        }   
    else if(rounded>=25 && rounded<30)
        {
            let reuslt4 = document.createElement("div")
            container.appendChild(reuslt4)
            reuslt4.innerText = "shoma ezafe vazn darid"
        }   
    else if(rounded>=30 && rounded<35)
        {
            let reuslt5 = document.createElement("div")
            container.appendChild(reuslt5)
            reuslt5.innerText = "chaghi daraje 1"
        }
    else if(rounded>=35 && rounded<40)
        {
            let reuslt6 = document.createElement("div")
            container.appendChild(reuslt6)
            reuslt6.innerText = "chaghi daraje 2"
        }   
    else if(rounded>=25 && rounded<41)
        {
            let reuslt7 = document.createElement("div")
            container.appendChild(reuslt7)
            reuslt7.innerText = "chaghi shadid"
        }           
}