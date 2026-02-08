function calculateTotal(price)
{
    function applyTax()
    {
       
        const maliat = (price*10)/100
        calculateTotal = price + maliat;
        result = console.log(`gheimat ba maliat barba as ba ${calculateTotal}`); 
        return result;   
    }
    applyTax();
}
calculateTotal(100000);