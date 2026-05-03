async function loadReviews()
{
    let wrapper_reviews=document.querySelector('.swiper-wrapper');
    const response = await fetch('../xml/trainers.xml');
    const xmlString = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const reviews=xmlDoc.querySelectorAll('trainer');
    reviews.forEach(
        (review)=>{
        const wrapper_item=document.createElement('div');

        wrapper_item.setAttribute('class','swiper-slide');

        wrapper_item.setAttribute('style','background:linear-gradient(rgba(200,10,44,0) 15%,rgba(200,10,44,0.3) 85%,rgba(200,10,44,0.5) 100%),url(../'+review.children.item(0).textContent+') no-repeat;');

        const main_text=document.createElement('div'); 

        main_text.setAttribute('class','main-text-container');

        const name=document.createElement('p');

        name.textContent=review.children.item(1).textContent;

        name.setAttribute('class','name');

        const exp=document.createElement('p');

        exp.textContent=review.children.item(2).textContent;

        exp.setAttribute('class','stage');

        main_text.append(name,exp)

        const button=document.createElement('button');

        button.textContent="Выбрать";

        const line=document.createElement('div');

        line.setAttribute('class','line');

        wrapper_item.append(main_text,button,line);

        wrapper_reviews.append(wrapper_item);

        }
    )
}
loadReviews()