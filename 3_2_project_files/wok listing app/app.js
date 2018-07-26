const list = document.getElementById('customer-list'),
    quotaionList = document.getElementById('quotation-list');


//  Customer constructor 

class Customer {
    constructor(name, modelOfInterest, typeOfInquiry) {
        this.name = name;
        this.modelOfInterest = modelOfInterest;
        this.typeOfInquiry = typeOfInquiry;
    }

}



// UI Constructor

class UI {

    // 
    clearFields() {
        document.getElementById('cust-name').value = '';
    }

    removeLi(e) {
        e.target.parentElement.parentElement.remove();
    }

    createQuotation(e) {
        
        let val = function(e){
            e.target;
        };
        
        const quotationDiv = document.createElement('div');
        quotationDiv.classList = 'modal';
        quotationDiv.setAttribute('id', 'myModal');

        quotationDiv.innerHTML = `
            <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Vehicle Purchase Quotation</h5>
            <h5 class="modal-title">Customer's Name ${val}</h5>
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

    
    addCustomer(customer, modelInterest, typeOfInquiry) {

        // create list element 

        const li = document.createElement('tr');

        li.innerHTML = `
        <td>${customer.name}</td>
        <td>${customer.modelOfInterest}</td>
        <td>${customer.typeOfInquiry}</td>
        <td data-toggle="modal" data-target="#myModal"><a href="#"  class="fas fa-file-invoice-dollar quotation"></a></td>
        <td><a href="#" class="fas fa-trash-alt delete"></a></td>
    `;

        list.appendChild(li);

        console.log(li);
    }
}


// Listen to the events 
document.querySelector('.container-fluid').addEventListener('submit', function(e) {
    // get the parent list  
    e.preventDefault();

    // getting the values of inputs 
    const custName = document.getElementById('cust-name').value,
        modelInterest = document.getElementById('model-of-interest').value,
        typeOfInquiry = document.getElementById('campaing').value;

    const customer = new Customer(custName, modelInterest, typeOfInquiry);

    const ui = new UI();

    // Calling the functions here 
    if (e.target.classList.contains('customer-add-form')) {
        ui.addCustomer(customer);
        ui.clearFields(customer);
    }

    // event listeners for the list items
    document.querySelector('.container-fluid').addEventListener('click', function(e, customer ) {
        if (e.target.classList.contains('delete')) {
            ui.removeLi(e);
        }

        if (e.target.classList.contains('quotation')) {
            ui.createQuotation(e);
            // console.log(e.target.parentElement.previousElementSibling.textContent);
        }
    });

});
