let burger_menu=document.querySelector('.links')
let burger=document.querySelector('.burger span')
document.querySelector('.burger').addEventListener('click', function(){
  burger.classList.toggle("active");
  burger_menu.classList.toggle("animate");
})