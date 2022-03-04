async function createSubscription(priceId, customerId) {
  const response = await fetch('api/subscriptions/createsubscription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      priceId: priceId,
      customerId: customerId,
    }),
  })
  const subscription = await response.json();
  return subscription;
}
