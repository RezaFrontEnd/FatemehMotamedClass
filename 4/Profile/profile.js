function result()
{
    let name = prompt("name khod ra vare konid")
    let lastName = prompt("name khandevadegi khod ra vare konid")
    let mobile = prompt("mobile khod ra vare konid")
    let shanasnameh = prompt("shomare shenasnameh khod ra vare konid")
    let shomareSabet = prompt("shomare sabete khod ra vare konid")
    result = []
    result.push(name,lastName,mobile,shanasnameh,shomareSabet)
    let resultQuery = document.querySelector(".result")
    for(let i=0;i<result.length;i++)
        {
            resultQuery.innerHTML = `name is ${name}
            lastname is ${lastName} mobile is ${mobile}
            shenasnameh is ${shanasnameh}
            shomare sabet is ${shomareSabet}
            `
        }
}