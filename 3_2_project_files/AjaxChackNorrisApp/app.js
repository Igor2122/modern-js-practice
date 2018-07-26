document.querySelector('.get-jokes').addEventListener('click', getJokes);


function getJokes(e) {
    const number = document.querySelector('input[type=number]').value;
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if (this.status === 200) {

            const response = JSON.parse(this.responseText);

            let output = '';

            if (response.type === 'success') {
                // sinse the response is an object with multiple inputs we need to loop thrw the value 
                response.value.forEach(function(item) {
                    output +=`<li>${item.joke}</li>`;
                })
            }
            else {
                output = +`<li>Chuck blocked the joke</li>`;
            }
            
            document.querySelector('.jokes').innerHTML = output;

            // console.log(response);
        }
    };

    xhr.send();

    // console.log(jokes);
}
