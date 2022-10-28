const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function()
{
    document.body.classList.toggle('color1');
    document.body.classList.toggle('color2');

    const className = document.body.className;
    if(className == 'color1')
    {this.textContent = "dark";}
    else
    {this.textContent= "light";}
});





