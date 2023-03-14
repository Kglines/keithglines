const sections = document.querySelectorAll('section')
const navListItem = document.querySelectorAll('nav ul li')
const navLink = document.querySelectorAll('nav ul li a')
const email = document.getElementById('email')
const form = document.getElementById('form')
const inputs = document.querySelectorAll('input')
const textarea = document.querySelector('textarea')
const button = document.querySelector('button')

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id')
        }
    })
    navListItem.forEach(item => {
        item.classList.remove('active');
        if (item.classList.contains(current)){
            item.classList.add('active')
        } 
    })
   
})

email.addEventListener('click', () => {
    if(form.classList.contains('hide')){
        form.classList.remove('hide')
    } else {
        form.classList.add('hide')
    }
})

button.addEventListener('click', () => {
    form.classList.add('hide')
})
