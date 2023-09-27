const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open'); //add new class nav-open and add it to css file
})