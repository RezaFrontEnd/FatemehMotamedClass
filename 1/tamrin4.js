const product = {
  name: "کفش",
  price: 100000,
  isOnSale: true
};
function reza(product)
{
    if(product.isOnSale == true)
        {
            discount = (product.price*20)/100; 
            console.log(`takhfif ${discount} ast`)
        }
    result = (product.price)-discount        
    return console.log(`ghemat ba takhfif ${result} ast`);    
    
}
reza(product);