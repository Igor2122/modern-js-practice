const list = document.getElementById('customer-list'),
    quotaionList = document.getElementById('quotation-list');
const customerArray = [];
let serialNumer = 0;

//  Customer constructor 

class Customer {
    constructor(name, modelOfInterest, typeOfInquiry) {
        this.name = name;
        this.modelOfInterest = modelOfInterest;
        this.typeOfInquiry = typeOfInquiry;
    }
}

// *********  UI Constructor
class UI {

    clearFields() {
        document.getElementById('cust-name').value = '';
    }

    removeLi(e) {
        if(e.target.classList.contains('delete')){
            e.target.parentElement.parentElement.remove();
            customerArray.pop();
        }
    }



    createQuotation(thisCustomer) {

        const quotationDiv = document.createElement('div');
        quotationDiv.classList = 'modal';
        quotationDiv.setAttribute('id', 'myModal');


        quotationDiv.innerHTML = `
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Vehicle Purchase Quotation</h5>
                            <h5 class="modal-title">Customer's Name: ${thisCustomer.name} </h5>
                            <h5 class="modal-title">Model of Interest:  </h5>
                            <button class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos omnis architecto, quod, obcaecati dolorum debitis dolore porro qui, iusto quo accusantium voluptates pariatur illo.
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
        `;

        quotaionList.appendChild(quotationDiv);
    }

    addCustomer(customer) {
        // create list element 
        let li = document.createElement('tr');
        li.setAttribute('name', customer.name);

        li.innerHTML = `
        <td>${serialNumer}</td>
        <td>${customer.name}</td>
        <td>${customer.modelOfInterest}</td>
        <td>${customer.typeOfInquiry}</td>
        <td data-toggle="modal" data-target="#myModal">
                <a href="#"  class="fas fa-file-invoice-dollar quotation">
            </a>
        </td>
        <td><a href="#" class="fas fa-trash-alt delete"></a></td>
    `;
        list.appendChild(li);
    }
}

// ********    Listen to the events 
document.querySelector('.container-fluid').addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(customerArray);
    // getting the values of inputs 
    const custName = document.getElementById('cust-name').value,
        modelInterest = document.getElementById('model-of-interest').value,
        typeOfInquiry = document.getElementById('campaing').value;

    const customer = new Customer(custName, modelInterest, typeOfInquiry);

    // add customer to array
    customerArray.push(customer);

    // console.log(customerArray);

    const ui = new UI();

    // Calling the functions here 
    if (e.target.classList.contains('customer-add-form')) {
        if (custName == '' || modelInterest == '') {

        } else {
            ui.addCustomer(customer);
            ui.clearFields(customer);
            serialNumer++;
        }
    }

});

// event listeners for the list items
document.querySelector('.col-sm-8').addEventListener('click', function (e) {

    e.preventDefault();

    const ui = new UI();

    // deleting the customer entry 
    ui.removeLi(e);


    

    if (e.target.classList.contains('quotation')) {

        let customerName = (function () {
            return event.target.parentElement.parentElement.childNodes[3].textContent;
        })();
        console.log(customerName);

        const thisCustomer = new Customer(customerName);

        console.log(thisCustomer);


        ui.createQuotation(thisCustomer);
    }
});