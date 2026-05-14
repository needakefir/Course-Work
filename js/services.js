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
);
const options = {
root: null, 
rootMargin: '0px', 
threshold: 0.1 
};

const handleIntersect = (entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('square-animation');
observer.unobserve(entry.target); 
}
});
};

const observer = new IntersectionObserver(handleIntersect, options);

const elements = document.querySelectorAll('.offer');
elements.forEach(element => {
observer.observe(element);
});