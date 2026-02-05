function GetMessageByRole(a)
{
    if(a=="admin")
    {
       console.log("دسترسی کامل")
    }
    else if(a=="user")
    {
        console.log("دسترسی محدود")
    }
    else
        {
            console.log("دسترسی نامشخص")
        }
}
GetMessageByRole("hichi")