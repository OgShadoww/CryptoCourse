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
// hero section animation
let heroLight = document.querySelector('.begin-page__info__light')
let heroPhotoLink = document.querySelector('.begin-page__photo__link')
// forwhoum section animation
let forwhom = document.querySelector('.forwhom__cards')
let forwhomCard1 = document.querySelector('#forwhom__cards__item_1')
let forwhomCard2 = document.querySelector('#forwhom__cards__item_2')
let forwhomCard3 = document.querySelector('#forwhom__cards__item_3')
let forwhomLight = document.querySelector('.forwhom__cards__light')
// course section animation
let course = document.querySelector('.course')
let courseItemOne = document.querySelector('.course__cards__item_one')
let courseItemTwo = document.querySelector('.course__cards__item_two')
let courseBear = document.querySelector('.course__cards__item__bear')

document.addEventListener('scroll', () => {
    // header scroll
    if(window.scrollY > 30) {
        header.forEach(header => {
            header.classList.add('header_schroll')
        })
    } 
    // // hero light scroll add
    // if(window.scrollY >= 10 && window.screenY < 300) {
    //     heroLight.style.transform = `translateY(-${window.scrollY / 2}px)`
    //     heroPhotoLink.style.transform = `translateY(-${window.scrollY / 8}px)`
    // }
    // // hero light scroll remove
    // if(window.scrollY > 300) {
    //     heroLight.style.transform = 'translateY(0)'
    //     heroPhotoLink.style.transform = 'translateY(0)'
    // }
    // forwhom animate add
    if(window.scrollY >= forwhom.scrollHeight - forwhom.clientHeight) {
        forwhomCard1.style.transform = `translateX(0px)`
        forwhomCard2.style.transform = `translateX(0px)`
        forwhomCard3.style.transform = `translateY(0px)`
        // forwhomLight.style.transform = `translateY(-${window.scrollY / 2}px)`
    }
    // course animate add
    if(window.scrollY >= course.scrollHeight - 300) {
        courseItemOne.style.transform = `translate(0px)`
        courseItemTwo.style.transform = `translate(0px)`
        courseBear.style.transform = `translateY(0px)`
    }
    else {
        header.forEach(header => {
            header.classList.remove('header_schroll')
        })
    }
})