let index = 1
show(index)
let timer
startAuto()
function autoSlide()
{
    change(1)
}
function startAuto()
{
    if(timer)
        {
            clearTimeout(timer)
        }
    timer = setTimeout(autoSlide,2000);
}
function show(n)
{
    slides = document.getElementsByClassName("slide")
    dots = document.getElementsByClassName("dot") 
    if(n>slides.length)
        {
            index = 1
        }
    if(n<1)
    {
            index = slides.length
    }
        

    for(let i=0;i<slides.length;i++)
        {
            slides[i].style.display = "none"
        }
      for(let i=0;i<dots.length;i++)
        {
           dots[i].className = dots[i].className.replace(" active", "")
        }    
    slides[index-1].style.display = "block"
    dots[index-1].className += " active"
}
function change(n)
{
    show(index += n)
    startAuto()
}