const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav_links = document.querySelector('.left-side');

    burger.addEventListener('click', () => {
        console.log('HELLO')
        nav_links.classList.toggle('nav-active')
    })
}

navSlide();