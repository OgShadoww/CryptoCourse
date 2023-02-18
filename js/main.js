// burger menu

let burgerMenuOpen = document.querySelector('.burger-menu__open')
let burgerMenuContent = document.querySelector('.burger-menu__content')
let burgerMenuClose = document.querySelector('.burger-menu__close')

burgerMenuOpen.addEventListener('click', () => {
    burgerMenuContent.classList.add('active')
    document.body.style.overflow = 'hidden'
})
burgerMenuClose.addEventListener('click', () => {
    burgerMenuContent.classList.remove('active')
    document.body.style.overflow = 'auto'
})

// header with schroling

let header = document.querySelectorAll('.header')
let heroLight = document.querySelector('.begin-page__info__light')
let heroPhotoLink = document.querySelector('.begin-page__photo__link')

document.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        header.forEach(header => {
            header.classList.add('header_schroll')
        })
    }
    if(window.scrollY >= 10 && window.screenY < 300) {
        heroLight.style.transform = `translateY(-${window.scrollY / 2}px)`
        heroPhotoLink.style.transform = `translateY(-${window.scrollY / 6}px)`
    }
    else {
        header.forEach(header => {
            header.classList.remove('header_schroll')
            heroLight.style.transform = `translateY(0)`
            heroPhotoLink.style.transform = `translateY(0)`
        })
    }
})