
const buttonTheme = document.getElementById("theme")

buttonTheme.addEventListener("click", function () {
    const html = document.getElementsByTagName("html")[0];
    const wellcome = document.getElementById("wellcome");
    if (html.classList[0] == "dark") {
        html.classList.remove("dark");
        html.classList.add("light");
        wellcome.style.backgroundImage = "url('./src/assets/background.svg";
    } else {
        html.classList.remove("light");
        html.classList.add("dark");
        wellcome.style.backgroundImage = "url('./src/assets/background-dark.svg')";
    }
});


const btnMenu = document.getElementById("btn-menu");
const nav = document.getElementById("menu");


function toggleMenu(event) {
    if (event.type == 'touchstart') event.preventDefault()
    const buttons = document.getElementById("buttons-menu");
    buttons.classList.toggle('active');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active)
    active ? event.currentTarget.setAttribute('aria-label', 'Fechar menu ') : event.currentTarget.setAttribute('aria-label', 'Abrir menu ')
}

btnMenu.addEventListener("touchstart", toggleMenu);
btnMenu.addEventListener("click", toggleMenu);


const links = document.getElementsByTagName("a");

function closeMenu(event) {
    const active = nav.classList.contains('active');
    console.log(active);
    if (active) {
        if (event.type == 'touchstart') event.preventDefault()
        const buttons = document.getElementById("buttons-menu");
        buttons.classList.remove('active');
        nav.classList.remove('active');
        event.currentTarget.setAttribute('aria-expanded', 'false')
        event.currentTarget.setAttribute('aria-label', 'Abrir menu ')
    }
}
for (i = 0; i <= 3; i++) {
    links[i].addEventListener("click", closeMenu)
    console.log(links[i].href);
}
