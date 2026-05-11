let buttons=document.querySelectorAll('.item-offer .button');
buttons.forEach(
    (item)=>{
        item.addEventListener('click',function(){
            form.scrollIntoView(
                {behavior: "smooth",
                 block: "center", 
                 inline: "start"}
                );
        });
}
)