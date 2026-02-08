function login()
{
    let username = document.getElementById("id_user").value
    let password = document.getElementById("id_password").value
    let result = document.getElementById("result")
    if(username=="reza" && password== "1234")
        {
            result.innerText = "welcome"
        }
    else
        {
            result.innerText = "username or password is wrong";
        }    

}