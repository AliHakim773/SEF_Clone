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
