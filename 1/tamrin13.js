const user = {
  username: "Reza",
  isLoggedIn: true,
  isBanned: true,
  role: "user" // می‌تونه "admin" یا "user" باشه
};
function checkban(user)
{
    if(user.isBanned==true)
        {
            return("banned")
        }
    else
        {
            return("ok")
        }    
}
function checkRole(user)
{
    if(user.role=="admin")
        {
            return("admin access")
        }
    else
        {
            return("user access")
        }   

}
function getFinalStatus(user)
{
   result = console.log(checkban(user))
   if(user.isBanned==result)
    {
        return result
    }
    else
    {
        if(user.isLoggedIn==false)
            {
                console.log("please login")
            }
        if(user.isLoggedIn==true)
            {
                console.log(checkRole(user))
            }    
    }
   
}
getFinalStatus(user);