document.getElementById('button-1').addEventListener('click', loadCustomer);


function loadCustomer(e) {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'customer.json', true);
    
    
    xhr.onload = function(){
        if(xhr.status === 200){
            // console.log(this.responseText);
            
            // const customer = JSON.parse(this.responseText);// we need to parse it/ run it through json so we can access customer.id and other properties
            
            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `
            document.getElementById('customer').innerHTML = output;
        }
    }
    
    xhr.send();
}

// Load customeres as an array of objects


document.getElementById('button-2').addEventListener('click', loadCustomers);


function loadCustomers(e) {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'customers.json', true);
    
    
    xhr.onload = function(){
        if(xhr.status === 200){
            // console.log(this.responseText);
            
            const customers = JSON.parse(this.responseText);// we need to parse it/ run it through json so we can access customer.id and other properties
            
            // we need to loop throuhg the array 
            
            let output = '';
            
            customers.forEach(function (inx) {
                // we want to append each itiration it will append that customer 
                output += ` 
                <ul>
                    <li>ID: ${inx.id}</li>
                    <li>Name: ${inx.name}</li>
                    <li>Company: ${inx.company}</li>
                    <li>Phone: ${inx.phone}</li>
                </ul>
            ` 
            });
            
            
            document.getElementById('customers').innerHTML = output;
        }
    }
    
    xhr.send();
}