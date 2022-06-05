let menuBtn = document.querySelector('.menu');
let menu = document.querySelector('.burger_menu');
menuBtn.addEventListener('click', function(){
	// menu.classList.toggle('active');
    if(menu.classList.toggle('active')){
    document.querySelector("div.bar1").style.background = 'black';
    document.querySelector("div.bar3").style.background = 'black';
    document.querySelector("div.bar1").style.width = '34px';
    document.querySelector("div.bar1").style.height = '5px';
    document.querySelector("div.bar3").style.width = '34px';
    document.querySelector("div.bar3").style.height = '5px';}
    else{
    document.querySelector("div.bar1").style.background = '';
    document.querySelector("div.bar3").style.background = '';
    document.querySelector("div.bar1").style.width = '';
    document.querySelector("div.bar1").style.height = '';
    document.querySelector("div.bar3").style.width = '';
    document.querySelector("div.bar3").style.height = ''; 
    }
})

 function burgerMenu(icon) {
    icon.classList.toggle("change");
}
    // width: 34px;
    // height: 5px;
