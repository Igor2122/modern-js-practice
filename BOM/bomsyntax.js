/*   
    
    Window parameters
        history: length, back(), forward(), go(3) pass number if 3 forward 3 pages -3 back 3 pages
        navigator: 
            function f () {
                let s = '';
                for(var in navigator) {
                    console.log(s ':', navigator[s]);
                }
            }
        screen: width, height, availwidth, availheight;
        
            
                function f() {
                    let s = '';
                    for (let i in screen) {
                        console.log(s, ':', screen[i]);
                    }
                }

f();ı
        location: ex: http://www.site.com:81/about/index.html?x=10#metka
            location: properties: 
                protocol: => 'http:'
                hostname: => 'www.site.com'
                port: => if 80 empty if other => '81'
                host: => www.site.com:81  - host name and port together 
                pathname: => /about/index.html utill the ? | # all will be included
                search: => '?x=10' including ? will have to cut those out 
                hash: => '#metka' including #
                href: => ''
            ex. location.reload() - simply will reload the page 
                location.reload(true) -  request reload from the server without cache like ctrl f5
                assign/replace: location.assign('www....') replace replaces the current page with newly assined. assign will siply add the previous page to the history log 
                document - is mostyly used 
                    old: document.title = 'hello'
                         document.bgColor = 'red'
                ========== 
                window.methods
                    dialogs: alert(), confirm() - returns true or false, promtp('Qquestion will come here', 'Yes') first question latest default answer that can be changed
                    setTimeOut/clearTimeOut
                    setInterval/ClearIntrval
                open() - opener() is the lisnk to the window that opened the current one 
                moveTo(), resizeTo(), moveBy(), resizeBy();
            


*/


const button = document.getElementById('button');

button.addEventListener('click', doSomething);

function doSomething(e) {
    e.preventDefault();
}

// WINDOW TIMING METHODS
// setTimeOut(func, 1000)

const greenObj = document.querySelector('.object');
const h1 = document.querySelector('.object h1');

greenObj.addEventListener('mouseover', doSomth);
greenObj.addEventListener('mouseleave', unDoSomth);

let wiggleAnimation;

function foo() {
    // greenObj.style.background = 'purple';
    greenObj.classList.add('animation');
}

function addText(txt) {
    h1.style.left = '0';
}

function doSomth() {
    // wiggleAnimation = window.setTimeout(foo, 2000);
    wiggleAnimation = window.setTimeout(
        //'addText("Hello")' // also we can add addText without () && '' but cant add any argm
        function() { addText('hello') }, 2000);
    // wiggleAnimation = window.setInterval(foo, 2000);
    console.log(wiggleAnimation);
}

function unDoSomth() {
    window.clearTimeout(wiggleAnimation);
}

// setInterval , clearInterval - works the same way but setInterval will repeat itself with the mentioned time that was set

function User(name) {
    this.name = name;
    this.say = function() { console.log(this.name) };
}

let john = new User('John');

function doSomth() {
    setTimeout('john.say()', 2000);
}


// NEW WINDOW OPEN 
button.addEventListener('click', openNewWindow);
let w;

function openNewWindow() {
    // parem: 1url, 1wndw name, 
    w = window.open('about:blank', 'x')

    // focus/blur
    // w.close();
}

// Form input validation 

/* 
// check form inputs for present values
            function checkForm() {
                let f = document.forms[0];
                let els = f.elements;
                let isEmpty = false;
                for (let i = 0; i < els.length; i++) {
                    if (els[i].type == 'text') {
                        if (els[i].value == '') {
                            els[i].style.borderColor = 'red';
                            isEmpty = true;
                        }
                        else {
                            els[i].style.borderColor = '';
                        }
                    }
                }
                if (isEmpty) {
                    alert('please fill all the fields');
                }
                else {
                    f.submit();
                    console.log('submit');
                }
            }
*/

// HTML Select Element 
 
/* 
    Properties: 
        length - # of optiins inside 
        type - 
        selectedIndex - index of the selcted option
        value
        selcted
        form - link to form where the select is located
        disabled & multiple 
        name
        dize & tableIndex
        options - arr of all options inside the select
        options- constructor: 
            option(text,value,defaultSelected,selected)
            option elements
                form
                text 
                defaultSelected
                index - index in all list of options  
                value 
                selected    
                disabled
                label
        
    Methods:
        add()
        remove()
        focus()
        blur()
*/



