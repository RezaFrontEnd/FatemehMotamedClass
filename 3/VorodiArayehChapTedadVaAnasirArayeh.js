‌//ورودی آرایه بگیرد تعداد و عناصر آرایه چاپ بکند
function listUsers(a=[])
{
    for(let x=0;x<a.length;x++)
        {
           
            console.log(`${x}.${a[x]}`)
        }    
}
listUsers(["Reza","ali","mohammad"])
