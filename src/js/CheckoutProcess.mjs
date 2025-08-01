export default class CheckoutProcess {
  constructor() {}

  calculateOrderSummary() {
    const cartItems = JSON.parse(localStorage.getItem('so-cart')) || [];
    let subtotal = 0;
    cartItems.forEach(item => subtotal += item.FinalPrice * item.Quantity);

    const tax = subtotal * 0.06;
    const shipping = 10 + (cartItems.length > 1 ? (cartItems.length - 1) * 2 : 0);
    const orderTotal = subtotal + tax + shipping;

    // Update values on the checkout page
    document.querySelector('#subtotal').textContent = subtotal.toFixed(2);
    document.querySelector('#tax').textContent = tax.toFixed(2);
    document.querySelector('#shipping').textContent = shipping.toFixed(2);
    document.querySelector('#order-total').textContent = orderTotal.toFixed(2);
  }
}
