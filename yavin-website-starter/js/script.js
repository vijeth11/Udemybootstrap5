function userScroll(){
    const navbar = document.querySelector('.navbar');
    const button = document.querySelector('#to-top');

    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 50){
            navbar.classList.add('navbar-sticky');
            button.classList.add('show');
        }else{
            navbar.classList.remove('navbar-sticky');
            button.classList.remove('show');
        }
    });
}

function scrolltoTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function incrementStats(){
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter =>{
        counter.innerText = 0;
        const updateCounter = ()=>{
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 200;
            if(c < target){
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 1);
            }else{
                counter.innerText = target;
            }
        }
        updateCounter();
    })
}

document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('DOMContentLoaded', incrementStats);
document.querySelector('#to-top').addEventListener('click', scrolltoTop);
