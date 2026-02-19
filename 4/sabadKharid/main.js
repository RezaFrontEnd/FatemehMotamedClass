//query selector
const product_cartـquery = document.querySelector(".product-card")
const product_title_query = product_cartـquery.querySelector("h3")
const p_query = product_cartـquery.querySelector(".price")
const quantity_query = product_cartـquery.querySelector(".quantity") 
const minus_query = quantity_query.querySelector(".minus")
const plus_query = quantity_query.querySelector(".plus")
const add_button_query = product_cartـquery.querySelector(".add-btn") 
const cart_query = document.querySelector(".cart")
const cart_item_query = cart_query.querySelector(".cart-item")
const name_query = cart_item_query.querySelector(".headphone-name")
const price_query = cart_item_query.querySelector(".headphone-price")
const cart_count_query = cart_query.querySelector(".cart-count")
const headphone_total_price = cart_query.querySelector(".total")
const headphone_tedad_query = cart_item_query.querySelector(".headphone-tedad")
//تعریف متغیرها
let shomarande = 1
const mojodi = 30
//اطلاعات سبد خرید 
let headphone = "هدفون حرفه‌ای"
let headphone_price = "1250000"
let headphone_price_tabdil = Number(headphone_price)
product_title_query.innerHTML = headphone
p_query.innerHTML = headphone_price
const span = quantity_query.querySelector("span")
span.innerHTML = shomarande
//localStorage
const savedName = localStorage.getItem("headphoneName");
const savedPrice = localStorage.getItem("headphonePrice");
const savedQuantity = localStorage.getItem("headphoneQuatity");
//بررسی موجود  بودن لوکال استوریج
if(savedName && savedPrice && savedQuantity) 
{
    name_query.innerHTML = savedName;
    price_query.innerHTML = savedPrice;
    headphone_tedad_query.innerHTML = savedQuantity + " عدد";
    cart_count_query.innerHTML = savedQuantity;
    //حذف عکس تکراری
    existImages()
    //مجموع هزینه ها
    majmoaHazinehLocal()
}


plus_query.onclick = function(event)
{
    event.preventDefault()
    if(shomarande<mojodi)
        {
            shomarande +=1
            span.innerHTML = shomarande    
        }


}
minus_query.onclick = function(event)
{
    event.preventDefault()
    if(shomarande>1)
        {
            shomarande -=1
            span.innerHTML = shomarande
        }
}
add_button_query.onclick = function(event)
{
    event.preventDefault()
    localStorage.setItem("headphoneName",headphone)
    localStorage.setItem("headphonePrice",headphone_price_tabdil)
    localStorage.setItem("headphoneQuatity",shomarande)      
    name_query.innerHTML = headphone
    price_query.innerHTML = headphone_price
    headphone_tedad_query.innerHTML = shomarande + "عدد"
    cart_count_query.innerHTML = shomarande
    existImages()
    majmoaHazineh()
 
}


function existImages()
{
    const existImage = cart_item_query.querySelector("img");
        //حذف عکس تکراری
    if(existImage) 
    {
        existImage.remove()
    }
    //ایجاد تگ تصویر
    const imgCreate = document.createElement("img");
    imgCreate.src = "images/product.jpg";
    imgCreate.width = 200;
    cart_item_query.appendChild(imgCreate);
}
function majmoaHazineh()
{
    let total = Number(headphone_price) * Number(shomarande);
    headphone_total_price.innerHTML = "مجموع مبلغ " + total + " تومان";
}
function majmoaHazinehLocal()
{
    let total = Number(headphone_price_tabdil) * Number(savedQuantity);
    headphone_total_price.innerHTML = "مجموع مبلغ " + total + " تومان";
}