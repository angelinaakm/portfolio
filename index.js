const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
const redbutton = document.querySelector('.redirect-button')

navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open'); //add new class nav-open and add it to css file
})

navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

redbutton.addEventListener('click', ()=>{
    location.href = "portfolio-item.html"
})