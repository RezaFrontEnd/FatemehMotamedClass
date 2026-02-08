const RightAnswer = 25;
const enterAnswer = 24;
if(enterAnswer>=0 && enterAnswer<=10)
{
    console.log("add shoma dar baze 0 ta 10 gharar nadarad");
}
else if(enterAnswer>10 && enterAnswer<15)
{
    console.log("adad shoma dar baze 11 ta 20 nist");
}
else if(enterAnswer>15 && enterAnswer<20)
    {
        console.log("adad shoma dar baze 16 ta 19 nist");
    }
else if(enterAnswer>20 && enterAnswer<25)
    {
        console.log("adad shoma dar baze 20 ta 24 nist");
    }
else if(enterAnswer>25)
{
    console.log("adad shoma bozorgtar az adad ma ast");
}   
else if(enterAnswer==RightAnswer)
    {
        console.log("dorost hads zadid");
    }
  