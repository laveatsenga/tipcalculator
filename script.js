let calculate = document.querySelector('#calculate');

calculate .addEventListener('click', () => {
  let totalBill = document.querySelector('#totalBill').value;
  let tipPercentage = document.querySelector('#tipPercentage').value;
  let split = document.querySelector('#split').value;

  //Validation of the entered values 
  if(totalBill === '' || tipPercentage == 0 ||split == 0) {
    alert('Please enter values');
    return;
  }

  //Calculating the Tip 
  let total = ((totalBill * tipPercentage) / split)/100;
  total = total.toFixed(2);

  let payableBill = (Number(totalBill) + Number(total)) / split;

  document.getElementById('tip').innerHTML = total;
  document.getElementById('payableBill').innerHTML = payableBill;

} )