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
// forwhoum section animation
let forwhom = document.querySelector('.forwhom__cards')
let forwhomCard1 = document.querySelector('#forwhom__cards__item_1')
let forwhomCard2 = document.querySelector('#forwhom__cards__item_2')
let forwhomCard3 = document.querySelector('#forwhom__cards__item_3')
// course section animation
let course = document.querySelector('.course')
let courseItemOne = document.querySelector('.course__cards__item_one')
let courseItemTwo = document.querySelector('.course__cards__item_two')
let courseBear = document.querySelector('.course__cards__item__bear')

document.addEventListener('scroll', () => {
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
        courseBear.style.transform = `translateY(-20px)`
    }
    else {
        header.forEach(header => {
            header.classList.remove('header_schroll')
        })
    }
})

// accordion

let accordionItemHeader = document.querySelectorAll('.accordion__item__header').forEach(el => {
    let parent = el.parentElement
    let content = el.nextElementSibling
    let plus = el.querySelector('.accordion__item__header__open__icon')

    el.addEventListener('click', () => {
        content.classList.toggle('active')
        parent.classList.toggle('active')
        plus.classList.toggle('active')
    })
})

// scroll to begin
let toBegin = document.querySelector('.footer__top__up')
toBegin.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})