window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    console.log('DOM fully loaded and parsed');
    const buttons = document.querySelectorAll("[data-tab-button]");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(botao){
            let alvo = botao.target.dataset.tabButton;
            alvo = document.querySelector(`[data-tab-id=${alvo}]`)
            hide();
            alvo.classList.add("shows__list_is-active");
            remove();
            botao.target.classList.add("shows__tab__button_is-active");
        })
    }
});

function hide(){
    const tabsContainer = document.querySelectorAll("[data-tab-id]");
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove("shows__list_is-active")
    }
}

function remove(){
    const buttons = document.querySelectorAll("[data-tab-button]");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("shows__tab__button_is-active");
    }
}