let allImg = document.querySelectorAll('.img');
let nextBtn = document.querySelector('.change-right');
let prevtBtn = document.querySelector('.change-left');
let text = document.querySelectorAll('.text');
let container = document.querySelector('.container');


// function imageSlider() {
//     for (let i = 0; i < allImg.length; i++) {
//         // allImg[i].style.opacity = '1';
//         allImg[i].animate([{opacity:'0.2'},{opacity:'1'}], {duration:1000}, {fill:'forwards'});
//     }
// }

// setTimeout(() => {
// }, 1000);

//     imageSlider();

document.querySelector('.container').addEventListener('click', sliderActivate);

function sliderActivate(e) {
    if (e.target.classList.contains('change-right')) {
        nextImg();
    }
    else if (e.target.classList.contains('change-left')) {
        prevtImg();
    }
}

let counter = 0;

function nextImg() {
    for (let i = 0; i < allImg.length; i++) {
        // allImg[i].animate([{ opacity: '0.1' }, { opacity: '1' }], { duration: 1200, fill: 'forwards' });
    }
    counter++;
    if (counter > 2) {
        counter = 0;
    }
    text[counter].style.bottom = '50%';
    allImg[counter].style.opacity = '1';
    setTimeout(() => {
        prevtImg();
    }, 3000);
    console.log(counter);
}


function prevtImg() {
    text[counter].style.bottom = '0';
    allImg[counter].style.opacity = '0';
    nextImg();
}

nextImg();
