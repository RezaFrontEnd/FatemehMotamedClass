let i=1;
const result = setInterval(function()
{
    console.log("message loged each 1 second " + i);
    i = i+1; 
    setTimeout
    (function(){clearInterval(result);},10000)
},2000);

