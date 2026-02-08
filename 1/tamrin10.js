const state = {
  isLoggedIn: true,
  hasAddress: true,
  hasPayment: false
};
function CheckOutStatus(state)
{
    if(state.isLoggedIn==false)
        {
            console.log("please log in")
        }
    if(state.isLoggedIn==true)
        {
            if(state.hasAddress==false)
                {
                    console.log("add adress")
                }
        }
    if(state.hasAddress==true)
        {
            if(state.hasPayment==false)
                {
                    console.log("add payment")
                }
        }        
}
CheckOutStatus(state);