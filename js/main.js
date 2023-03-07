document.body.style.overflow = 'hidden'
document.body.onload = () => {
    document.body.style.overflow = 'auto'
    let preloader = document.querySelector('.preloader')

    if(!preloader.classList.contains('done')) {
        preloader.classList.add('done')
    }
}
// burger menu
let burgerMenuOpen = document.querySelector('.burger-menu__open')
let burgerMenuContent = document.querySelector('.burger-menu__content')
let burgerMenuClose = document.querySelector('.burger-menu__close')
let burgerMenuContentItem = document.querySelectorAll('.menu__content__body__item')

burgerMenuOpen.addEventListener('click', () => {
    burgerMenuContent.classList.add('active')
    document.body.style.overflow = 'hidden'
})
burgerMenuClose.addEventListener('click', () => {
    burgerMenuContent.classList.remove('active')
    document.body.style.overflow = 'auto'
})
burgerMenuContentItem.forEach(el => {
    el.addEventListener('click', () => {
        burgerMenuContent.classList.remove('active')
        document.body.style.overflow = 'auto'
    })
})
// scroll to begin
let toBegin = document.querySelector('.button__up')
toBegin.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
let courseEthereum = document.querySelector('.course__cards__item__ethereum')

document.addEventListener('scroll', () => {
    // button to scroll begin
    if(window.scrollY > 100) {
        toBegin.classList.add('active')
    }
    else {
        toBegin.classList.remove('active')
    }
    // forwhom animate add
    if(window.scrollY >= forwhom.scrollHeight - forwhom.clientHeight) {
        forwhomCard1.style.transform = `translateX(0px)`
        forwhomCard2.style.transform = `translateX(0px)`
        forwhomCard3.style.transform = `translateY(0px)`
    }
    // course animate add
    if(window.scrollY >= course.scrollHeight) {
        courseItemOne.style.transform = `translate(0px)`
        courseItemTwo.style.transform = `translate(0px)`
        courseEthereum.style.transform = `0%`
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
// hover effect
let buttonJoin = document.querySelector('.begin-page__info__button')
let buttonJoinTextOne = document.querySelector('.begin-page__info__button__text_one')
let buttonJoinTextTwo = document.querySelector('.begin-page__info__button__text_two')

buttonJoin.addEventListener('mouseenter', () => {
    buttonJoinTextTwo.classList.add('active')
    buttonJoinTextOne.classList.remove('active')
})
buttonJoin.addEventListener('mouseleave', () => {
    buttonJoinTextTwo.classList.remove('active')
    buttonJoinTextOne.classList.add('active')
})

if(window.innerWidth <= 800) {
    setInterval(() => {
        if(buttonJoinTextOne.classList.contains('active')) {
            buttonJoinTextTwo.classList.add('active')
            buttonJoinTextOne.classList.remove('active')
        }
        else {
            buttonJoinTextOne.classList.add('active')
            buttonJoinTextTwo.classList.remove('active')
        }
    }, 5000)
}

