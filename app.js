const cards = document.querySelectorAll(' .card_item');


cards.forEach(card => {
    card.onclick = () => {
        
        removeActiveClass();
        card.classList.add("active");
        card.style.boxShadow = "1px 5px 12px 4px grey";
    }
})


function removeActiveClass() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("active");
        cards[i].style.boxShadow = "none";
    }
}
