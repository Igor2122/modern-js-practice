const emailSubmitButton = document.getElementById('em-subm-btn');
const emailInput = document.getElementById('email-field');
const emailArray = [];
const passing = /[a-z]*/;
// add event listeners 
emailSubmitButton.addEventListener('click', getValue);
    let counter = 0;
function getValue(e) {
    e.preventDefault();
    let i = emailInput.value;
    emailArray.push(i);

    // test the email values
    let re = new RegExp(emailArray.join('|', i));
    console.log(re.test(passing));
    
        if (re.test(passing)) {
            let li = document.createElement('li');
            li.textContent = emailArray[counter];
            document.getElementById('passed').appendChild(li);
        }
    



    console.log(emailArray);
    counter ++;
}

console.log(emailSubmitButton, emailInput);
