function userGreetigs(count)
{
    for(let x=1;x<=count;x++)
    {
        if(x%2 ==0)
            {
                console.log(`hello user ${x} -VIP`)
            }
        else
            {
                console.log(`hello user ${x}`) 
            }   
        
    }
}
userGreetigs(4)
