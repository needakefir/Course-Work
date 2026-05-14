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

const services = document.querySelectorAll('.offer');
services?.forEach(element => {
observer.observe(element);
});
const main = document.querySelectorAll('.left .text');
main?.forEach(element => {
observer.observe(element);
});

const prices = document.querySelectorAll('.item-card');
prices?.forEach(element => {
observer.observe(element);
});
const about= document.querySelectorAll('.advantage-item,.main-text');
about?.forEach(element => {
observer.observe(element);
});