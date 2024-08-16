document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        body.classList.add(storedTheme); 
        changebody()
    }
});


const sidebar = document.querySelector('.sidebar');

function showSidebar(){
  sidebar.style.display = "flex";
  const nav = document.querySelector('nav');
  nav.classList.remove('navblur');
}

function hideSidebar(){
  sidebar.style.display = "none";
}


function progressBarAndCountNumber () {
    const progress = document.querySelectorAll('.progress');
    let count = 0;
    let MAX = 100;

    let run = setInterval(() => {
        count++;
        progress.forEach(element => {
            if (count <= element.dataset.progress) {
                element.parentElement.style.background = `conic-gradient(#fff ${count}%, #212428 0)`;
                element.firstElementChild.textContent = `${count}%`;
            };
            if (count == MAX) {
                clearInterval(run);
            };
        });
    }, 20);
    isNotViewed = false;
}

var isNotViewed = true;

  const section = document.getElementById('skillset');
        new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && isNotViewed) progressBarAndCountNumber();
        }).observe(section);


window.addEventListener('scroll', function() {

    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const nav = document.querySelector('nav');
    if (scrollPosition > 100) {
        if(sidebar.style.display !='flex'){
        nav.classList.add('navblur');
        }
    } else {
        nav.classList.remove('navblur');
    }
});


function changebody() {
    const videoSource = document.querySelector('#videoplayer source');
    const currentSrc = videoSource.getAttribute('src');
    const body = document.querySelector('body');

    // Define the two video sources
    const source1 = 'https://reflect.app/home/build/q-c3d7becf.webm';
    const source2 = './assets/rbwrodl.webm';

    // Toggle between the sources
    if (currentSrc === source1) {
        videoSource.setAttribute('src', source2);
        body.classList.add('dark');
        window.localStorage.setItem('theme','dark')
    } else {
        videoSource.setAttribute('src', source1);
        body.classList.remove('dark');
        window.localStorage.clear()
    }

    // Reload the video with the new source
    document.getElementById('videoplayer').load();
}



let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slider-slides');
    const totalSlides = document.querySelectorAll('.slider-slide').length;

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Initialize the slider
showSlide(slideIndex);
