function finalPrice() {
  let price = prices[selected];
  if (firstBuyer()) price *= 0.5;
  price *= 1 - seasonal();
  return price.toFixed(2);
}

paypal.Buttons({
  createOrder: (data, actions) => {
    return actions.order.create({
      purchase_units: [{
        amount: { value: finalPrice() }
      }]
    });
  },
  onApprove: (data, actions) => {
    return actions.order.capture().then(() => {
      const paid = parseFloat(finalPrice());
      markBought();
      addBalance(paid);
      alert("Payment successful" + (promo ? "\n🎁 Free item added!" : ""));
    });
  }
}).render("#paypal-button-container");
