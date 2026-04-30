const button=document.querySelector(".formButton");
const form=document.getElementById('form');
button.addEventListener('click',function(){
    form.scrollIntoView(
        {
            behavior: "smooth", block: "center", inline: "start"
        }
    )
})
const standardComments=[
    "Добрый день,хочу получить консультацию по групповым тренировкам.",
    "Добрый день,хочу получить консультацию по персональным тренировкам.",
    "Добрый день,хочу получить консультацию по детским секциям."];
let buttons=document.querySelectorAll('.item-offer button');
const comments_label=document.getElementById('comments')
comments_label.value=""
buttons.forEach(
    (item,index)=>{
        item.addEventListener('click',function(){
            form.scrollIntoView(
                {behavior: "smooth",
                 block: "center", 
                 inline: "start"}
                );
            comments_label.value+=standardComments[index];
        });
    }
)

