const response = {
  status: 200,
  data: {
    username: "reza",
    isActive: true
  }
};
function reza(response)
{
    if(response.status==200 && response.data.isActive == true)
        {
            console.log("this is ok");
        }
       
}
reza(response);