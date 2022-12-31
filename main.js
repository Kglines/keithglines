const sections = document.querySelectorAll('section')
const navListItem = document.querySelectorAll('nav ul li')
const navLink = document.querySelectorAll('nav ul li a')

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


