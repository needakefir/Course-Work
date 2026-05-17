let FIO_trainer=null;
async function loadTrainers()
{
    const wrapper_trainers=document.querySelector('.swiper-wrapper');
    const response = await fetch('../xml/trainers.xml');
    const xmlString = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const trainers=xmlDoc.querySelectorAll('trainer');
    trainers.forEach(
        (trainer)=>{
        const wrapper_item=document.createElement('div');

        wrapper_item.setAttribute('class','swiper-slide');

        wrapper_item.setAttribute('style','background:linear-gradient(rgba(200,10,44,0) 15%,rgba(200,10,44,0.3) 85%,rgba(200,10,44,0.5) 100%),url(../'+ trainer.children.item(0).textContent+ ') no-repeat;');

        const main_text=document.createElement('div'); 

        main_text.setAttribute('class','main-text-container text');

        const name=document.createElement('p');

        name.textContent=trainer.children.item(1).textContent;

        name.setAttribute('class','name text');

        const exp=document.createElement('p');

        exp.textContent=trainer.children.item(3).textContent + ' опыта';

        exp.setAttribute('class','stage');

        main_text.append(name,exp);

        const button=document.createElement('button');

        button.setAttribute('class','text');

        button.textContent="Выбрать";

        const dialog=document.querySelector('dialog');

        button.addEventListener('click',function(){
            FIO_trainer=trainer.children.item(2).textContent;
            dialog.classList.add('animation');
            dialog.showModal();
        });

        const line=document.createElement('div');

        line.setAttribute('class','line');

        wrapper_item.append(main_text,button,line);

        wrapper_trainers.append(wrapper_item);

        }
    )
}
loadTrainers();
const buttonDialog=document.querySelector('dialog button');
buttonDialog?.addEventListener('click',function(){
    window.location.href='../index.html?trainer='+FIO_trainer;
})

