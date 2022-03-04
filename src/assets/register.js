async function createCustomer() {
  const emailInput = document.querySelector('#email');
  const response = await fetch('api/customers/createcustomer', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailInput.value,
    })
  });
  const customer = await response.json();
  return customer;
}
