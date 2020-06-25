const PaymentPointerProtector = require('./index')
const { useEffect } = require('react');

function ReactPaymentPointerProtector({ paymentPointer }) {
  useEffect(() => {
    const p = new PaymentPointerProtector(paymentPointer);
    p.guard();
    return () => { p.release(); };
  })
  return null;
}

module.exports = ReactPaymentPointerProtector;
