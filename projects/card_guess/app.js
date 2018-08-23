const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;


function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        // fist clicked 
        hasFlippedCard = true;
        firstCard = this; // points to the element that has fired the event

        return;
    }

    // second click
    
    secondCard = this;

    checkForMatch();

    // do cards match
    // with data-... set on the html we can access the dataset object with assigned name
    // console.log(firstCard.dataset.framework);
    // console.log(secondCard.dataset.framework);

    // do cards match
    // it's a match


    

    function checkForMatch() {
        if (firstCard.dataset.framework == secondCard.dataset.framework) {
            disableCards();
        }
        else {
            unflipCards();
        }

    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        
        resetBoard();
    }

    function unflipCards() {
        lockBoard  = true;
        
        setTimeout(() => {
            // not a match 
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            
            resetBoard();   
            lockBoard = false;
        }, 1500);
    }
    
    function resetBoard () {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
     }

}

(function shuffle () {
    cards.forEach(cards => {
        let randomPos = Math.floor(Math.random() *12);
        cards.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
