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
async function loadReviews()
{
    let div_reviews=document.querySelector('.reviews');
    const response = await fetch('xml/reviews.xml');
    const xmlString = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const reviews=xmlDoc.querySelectorAll('review');
    reviews.forEach(
        (review)=>{
        const review_item=document.createElement('div');
        review_item.setAttribute('class','review-item');
        const img=document.createElement('img');
        const name=document.createElement('p');
        const stars=document.createElement('p');
        const text=document.createElement('p');
        img.setAttribute("src",review.children.item(0).textContent);
        img.setAttribute('alt',"");
        name.textContent=review.children.item(1).textContent;
        stars.textContent=review.children.item(2).textContent;
        text.textContent=review.children.item(3).textContent;
        review_item.append(img,name,stars,text);
        div_reviews.append(review_item);
        }
    )
}
loadReviews()



