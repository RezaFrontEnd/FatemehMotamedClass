let gerantarin = 4000000
let mahsol = [
    {name:"headphone",price:2000000},
    {name:"mouse",price:4100000}
]
for(i in mahsol)
    {
       if(mahsol[i].price>gerantarin)
        {
            console.log(`mahsol ${mahsol[i].name} gerantarin ast`)
        }
 
    }