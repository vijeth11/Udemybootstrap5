// replace text in header

const replaceMe = document.querySelector(".replace-me");
if(replaceMe){
    const replace = new ReplaceMe(replaceMe,{
        animation:'animated fadeIn',
        speed: 2000,
        seperator:',',
        loopCount: 'infinite',
        autoRun:true
    })
}

function userScroll(){
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll',() => {
        if(window.scrollY > 50){
            navbar.classList.add('bg-dark');
            navbar.classList.add('border-bottom');
            navbar.classList.add('border-secondary');
            navbar.classList.add('navbar-sticky');
        }else{
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('border-bottom');
            navbar.classList.remove('border-secondary');
            navbar.classList.remove('navbar-sticky');
        }
    })
}

// Video Modal

const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');
let videoSrc;

if(videoBtn){
    videoBtn.addEventListener('click',() => {
        videoSrc = videoBtn.getAttribute('data-bs-src');        
    })
}

if(videoModal){
    videoModal.addEventListener('shown.bs.modal',() => {
        video.setAttribute('src',videoSrc+"?autoplay=1;modestbranding=1;showinfo=0;");
    });

    videoModal.addEventListener('hide.bs.modal',() => {
        video.setAttribute('src',videoSrc);
    });
}

document.addEventListener('DOMContentLoaded',userScroll);