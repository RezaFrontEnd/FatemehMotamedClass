function outerFunction(a,b)
{
    function innerFunction(c)
    {
        return c*c;
    }
    console.log(innerFunction(a+b));
}
outerFunction(5,10);
