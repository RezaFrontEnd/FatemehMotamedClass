
const user = {
  username: "Ali",
  age: 20,
  isActive: false,
  isPremium: true
};
function checkAccess(user)
{
    if(user.isActive==false)
        {
           console.log("کاربر فعال");
        }
    if(user.isPremium == true) 
        {
            const access = "دسترسی پریمیوم";
            console.log(`hello ${user.username} ${access}`);   
        }            
    else
        {
             console.log("دسترسی عادی")
        }
        
}
function welcomeMessage(user)
{
    checkAccess(user);
    
}
welcomeMessage(user);





