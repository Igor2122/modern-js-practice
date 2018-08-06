// DOCUMENT OBJECT 
/* 
        returns collection [] 
    document.links
    document.images
    document.forms if has name we can call it with naem forms['name']
    
    
    documents properties: 
    
            ex: document.links[0]
            
            document.links[0].style.color = "red";
            returns:    "red"   
            
            let sndLink = document.links[1];
            undefined
            sndLink
            <a class...... />
            sndLink.style.color = 'pink';
            "pink"
            sndLink.style.backgroundColor = 'yellow';
            "yellow"
                for conflicting names
                we should use html ex: 
                    label.htmlFor ... 
                    style.cssFloat ... 
                    smth.className ...
            

*/

// Practice with FORMS 



/* 
    let frm = document.forms[0]
    undefined
    frm
    <form>....</form>
    frm.length
    2
    frm.elements
    HTMLFormControlsCollection(2)[input, input.form-control.border]
*/

var f;

function f() {
    // opt to get the form
    f = document.forms[0];
    // f = document.forms['search'];
}

// FROM METHODS: 
// submit 
//f.submit();// submits the form
// reset 
//f.reset(); // reset the form to original values

function r() {
    f = document.forms[0];
    f.reset();
}

function s() {
    f = document.forms[0];
    // f.submit();
    f.elements[5].click(); // chooses the 5th element and clicks on it 
}

// INPUT Parameters 
/* 
    let txt = f.elements[1] - f here refers to form in general
    let txt = f.elements["q"]
    let txt = f.elements.q   
        properties: 
            txt.name
            "q"
            txt.value
            "Уарабей"
            txt.value = 'Archie'
            "Archie"
            txt.type
            "text"
            txt.defaultValue = 'Archie' -  change    the default value of the input
            txt.form.reset() - will reset the form
*/
// INPUT METHODS 
/* 
    focus()
    blur()
    select()
    click()

*/

let txt;

function focus() {
    txt = f.elements[1];
    txt.focus();
    if(txt.focus){
        txt.select();
    }
}

function blur() {
    txt = f.elements[1];
    txt.blur();
}
function select() {
    txt = f.elements[1];
    txt.select();
}

// TEXT AREA has all the same 
/* 
    let txtarea = f.elements[0];
    undefined
    txtarea.value = "I would like to visit check"
    "I would like to visit check"
    txtarea.rows = 10;
    10
    txtarea.cols = 50;
    50
    
*/
