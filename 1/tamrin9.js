function orserStatus(isLoggedIn,hasAdress,hasPayment)
{
    if(isLoggedIn==false)
        {
            console.log("please log in")
        }
    if(isLoggedIn==true)
        {
            if(hasAdress==false)
                {
                    console.log("add adress")
                }
        }
    if(hasAdress==true)
        {
            if(hasPayment==false)
                {
                    console.log("add payment method")
                }
        }
    if(isLoggedIn==true && hasAdress==true && hasPayment==true)
        {
            console.log("order completed")
        }            
}
orserStatus(true,true,false);