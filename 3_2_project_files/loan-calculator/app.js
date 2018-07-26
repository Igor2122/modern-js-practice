// Listen for submit 

document.getElementById('loan-form').addEventListener('submit', function(e) {
  
  // Hide reulsts
  document.getElementById('results').style.display = 'none';
  
  // show loader 
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateRsults, 2000);


  e.preventDefault();
});

function calculateRsults() {
  
  // UI VARIBLES

  const ammount =  document.getElementById('ammount');
  const interest =  document.getElementById('interest');
  const years =  document.getElementById('years');

  const monthlyPayment =  document.getElementById('monthly-payment');
  const totalPayment =  document.getElementById('total-payment');
  const totalInterest =  document.getElementById('total-interest');
  
  const principal = parseFloat(ammount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 /12;
  const calculatedPayments = parseFloat(years.value) *12;

  // compute the monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal* x * calculatedInterest) / (x -1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly*calculatedPayments) - principal).toFixed(2);

    // show results
    document.getElementById('results').style.display = 'block';
    // hide loader after results are shown 
    document.getElementById('loading').style.display = 'none';

  } else {
    showError('Check the input values');
  }
  

  // Show Error function 
  function showError(error) {

    // show results
    document.getElementById('results').style.display = 'none';
    // hide loader after results are shown 
    document.getElementById('loading').style.display = 'none';
    
    // Create div
    const errorDiv = document.createElement('div');

    // Get elements we get the card and heading to make it appeat on top

    const card = document.querySelector('.card');
    const heading  = document.querySelector('.heading');

    // Addclass 
    errorDiv.className = 'alert alert-danger';

    // Create textNode and appent to div 
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above the heading - take the elemnt and 2nd param the elem you want ot insert if before
    card.insertBefore(errorDiv, heading);


    // Clear the error message after 3 seconds  
    setTimeout(clearError, 3000);

    // Clear Error
    function clearError() {
      document.querySelector('.alert').remove();
    }

}
}