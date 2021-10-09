const cards = document.querySelectorAll('.card')
const modal = document.querySelector ('.modal-overlay')
const close = document.querySelector('.modal')
const receita = document.querySelector('.content')

for (let card of cards) {
    card.addEventListener("click", function(){
        modal.classList.add('active')
        const content = card.innerHTML;

        receita.innerHTML= content ;
    })
}

/* Fechando o modal */
close.addEventListener("click", function (){
    modal.classList.remove("active")
})