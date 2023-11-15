// Typing Animation
const dynamic_text = document.getElementById("hero-left-title-change")
const hero_left_container = document.getElementById("hero-left-container")
const hero_left_description = document.getElementById("hero-left-description")
const words = ["Sofware Engineer?", "Data Engineer?", "UI/UX Designer"]
const bg_colors = ["#00eea7ed", "#9864daed", "#fb508eed"]

let word_index = 0
let char_index = 2
let is_deleting = false

const typeEffect = () => {
    const current_word = words[word_index]
    const current_bg_color = bg_colors[word_index]
    const current_color = word_index == 0 ? "var(--black)" : "var(--white)"
    const current_char = current_word.substring(0, char_index)
    dynamic_text.textContent = current_char
    dynamic_text.classList.add("stop-blinking")
    dynamic_text.style.color = current_color
    hero_left_container.style.backgroundColor = current_bg_color
    if (word_index == 0) {
        dynamic_text.classList.add("color_black")
    } else {
        dynamic_text.classList.remove("color_black")
    }

    if (!is_deleting && char_index < current_word.length) {
        char_index++
        setTimeout(typeEffect, 100)
    } else if (is_deleting && char_index > 0) {
        char_index--
        setTimeout(typeEffect, 50)
    } else {
        is_deleting = !is_deleting
        dynamic_text.classList.remove("stop-blinking")
        word_index = !is_deleting ? (word_index + 1) % words.length : word_index
        setTimeout(typeEffect, 1000)
    }
}
typeEffect()

// nav menu
const nav_menu = document.getElementById("nav-menu")
const nav_menu_open = document.getElementById("nav-menu-open")
const nav_menu_close = document.getElementById("nav-menu-close")
console.log(nav_menu_close)
nav_menu_open.addEventListener("click", () => {
    nav_menu.classList.toggle("d-none")
})
nav_menu_close.addEventListener("click", () => {
    nav_menu.classList.toggle("d-none")
    console.log("hi")
})

// programs navigations
const tabs = document.querySelectorAll(".programs-tabs a")
const tabs_body = document.querySelectorAll(".program-tab-body")

const removeClassFromArray = (arr, c, remove = true) => {
    arr.forEach((e) => {
        if (remove) e.classList.remove(c)
        else e.classList.add(c)
    })
}

tabs.forEach((e, i) => {
    e.addEventListener("click", () => {
        console.log("hi")
        removeClassFromArray(tabs, "active")
        removeClassFromArray(tabs_body, "d-none", false)
        e.classList.add("active")
        tabs_body[i].classList.remove("d-none")
    })
})

// carousel
let slideIndex = 1
let myTimer
let slideshowContainer
const delay = 5000

window.addEventListener("load", function () {
    showSlides(slideIndex)
    myTimer = setInterval(function () {
        plusSlides(1)
    }, delay)
})
function plusSlides(n) {
    clearInterval(myTimer)
    if (n < 0) {
        showSlides((slideIndex -= 1))
    } else {
        showSlides((slideIndex += 1))
    }
    if (n === -1) {
        myTimer = setInterval(function () {
            plusSlides(n + 2)
        }, delay)
    } else {
        myTimer = setInterval(function () {
            plusSlides(n + 1)
        }, delay)
    }
}
function currentSlide(n) {
    clearInterval(myTimer)
    myTimer = setInterval(function () {
        plusSlides(n + 1)
    }, delay)
    showSlides((slideIndex = n))
}
function showSlides(n) {
    let i
    const slides = document.getElementsByClassName("carousel-slide")
    const dots = document.getElementsByClassName("carousel-indicator")
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className += " active"
}
