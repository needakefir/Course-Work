async function loadReviews()
{
    let wrapper_reviews=document.querySelector('.swiper-wrapper');
    const response = await fetch('xml/reviews.xml');
    const xmlString =await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const reviews=xmlDoc.querySelectorAll('review');
    reviews.forEach(
        (review)=>{
        const wrapper_item=document.createElement('div');

        wrapper_item.setAttribute('class','swiper-slide');

        const avatar=document.createElement('div'); 

        avatar.setAttribute('class','avatar');

        const img=document.createElement('img');

        img.setAttribute("src",review.children.item(0).textContent);

        img.setAttribute('alt',"");

        const name=document.createElement('p');

        name.textContent=review.children.item(1).textContent;

        name.setAttribute('class','text name');

        const num=Number(review.children.item(2).textContent);

        const stars=document.createElement('p');

        stars.innerHTML='&starf;'.repeat(Math.trunc(num));

        if(num-Math.trunc(num)>0)
            stars.innerHTML+='&#11240';

        stars.setAttribute('class','text stars');

        const text=document.createElement('p');

        text.textContent=review.children.item(3).textContent;

        text.setAttribute('class','text review-text');

        text.setAttribute('style','height:200px;');

        const button=document.createElement('button');

        button.textContent="Показать еще";

        avatar.append(img,name,stars);

        wrapper_item.append(avatar,text,button);

        wrapper_reviews.append(wrapper_item);

        }
    )
    const buttonsReview=document.querySelectorAll('.swiper-slide button');
    buttonsReview.forEach(
    (button)=>
    button.addEventListener('click',function(){
    let text=document.querySelector('.swiper-slide.swiper-slide-active .review-text');
    if(button.textContent==="Показать еще")
    {
        text.setAttribute('style','height:auto;');
        button.textContent='Скрыть';
    }
    else
    {
        text.setAttribute('style','height:150px;');
        button.textContent='Показать еще';
    }
    })
)
}
loadReviews();
const button=document.querySelector(".formButton");
const form=document.getElementById('form');
button.addEventListener('click',function(){
    form.scrollIntoView(
        {
            behavior: "smooth", block: "center", inline: "start"
        }
    )
    comments_label.value=""
})
const standardComments=[
    "Добрый день,хочу получить консультацию по групповым тренировкам.",
    "Добрый день,хочу получить консультацию по персональным тренировкам.",
    "Добрый день,хочу получить консультацию по детским секциям."];
let buttons=document.querySelectorAll('.item-offer .button');
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
            comments_label.value= "" + standardComments[index];
        });
}
)

