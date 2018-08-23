class UI {
    changeColor(el) {

        let colorVar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];
        let background = '#';
        for (let i = 0; i < 6; i++) { 
            let random = Math.floor(Math.random() * colorVar.length);
            background += colorVar[random];
        }
        el.style.background = background;
        // let randCol1 = Math.floor(Math.random() * 255);
        // let randCol2 = Math.floor(Math.random() * 255);
        // let randCol3 = Math.floor(Math.random() * 255);
        // el.style.background = `rgb(${randCol1}, ${randCol2}, ${randCol3})`;
    }
    
    showQuotes (el, parent) {
        let random = Math.floor(Math.random() * el.length);
        let childNode = document.createElement('p');
        childNode.innerHTML = el[random].name + el[random].quote;
        parent.appendChild(childNode);
        
    }
    
    upDownCounter (e) {
        
    }
    
    

}
    // let ui = new UI(); 
    // ui.upDownCounter(event);
let i = 0;
        
let number = document.querySelector('.number');
number.innerHTML = i;


document.querySelector('.counter').addEventListener('click', playWithNumbers);


function playWithNumbers (e) {
        if(e.target.classList.contains('button-up')) {
            i ++;
            number.innerHTML = i;
        } else {
            i --;
            number.innerHTML = i;
        }
        if(i >= 0) {
            number.style.color = 'green';
        } else {
            number.style.color = 'red';
        }
        
        
        number.animate([{opacity:'0.2'},{opacity:'1'}], {duration:500}, {fill:'forwards'});
}





let changeClorButton = document.querySelector('.buttons');

changeClorButton.addEventListener('click', actions);
(function() {
    let ui = new UI();
    let buttons = document.querySelectorAll('.buttons>a');
    for (let i = 0; i < buttons.length; i++) {
        ui.changeColor(buttons[i]);
    }
}());

function actions(e) {
    let ui = new UI();
    let doc = document.querySelector('.color-change');
    ui.changeColor(doc);
    document.querySelector('.color-value').textContent = doc.style.backgroundColor;
}


document.addEventListener("keydown", function(event) {
    if (event.which == 32) {
        actions();
    }
});

let quotes = [
    {
        name: 'John 1',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, asperiores'
    },
    {
        name: 'John 2',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, asperiores'
    },
    {
        name: 'John 3',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, asperiores'
    },
    {
        name: 'John 4',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, asperiores'
    },
    {
        name: 'John 5',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, asperiores'
    },
    ]
    
let quoteButton = document.querySelector('#quote-button');
let quoteDiv = document.querySelector('.peron-quote');



quoteButton.addEventListener('click', generateQuotes);

function generateQuotes () {
    let ui = new UI ();
    ui.showQuotes(quotes, quoteDiv)
}

console.log(quotes[1].name);






