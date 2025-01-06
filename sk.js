function generateInvoice() {
    const invoiceNumber = document.getElementById('invoice-number').value;
    const customerName = document.getElementById('customer-name').value;
    const itemDescription = document.getElementById('item').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const gstRate = parseFloat(document.getElementById('gst-rate').value);

    if (isNaN(quantity) || isNaN(rate) || isNaN(gstRate)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const totalAmount = quantity * rate;
    const gstAmount = (totalAmount * gstRate) / 100;
    const totalInvoiceAmount = totalAmount + gstAmount;

    document.getElementById('invoice-output').innerHTML = `
        <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
        <p><strong>Customer:</strong> ${customerName}</p>
        <p><strong>Item:</strong> ${itemDescription}</p>
        <p><strong>Total Amount:</strong> ₹${totalAmount.toFixed(2)}</p>
        <p><strong>GST (${gstRate}%):</strong> ₹${gstAmount.toFixed(2)}</p>
        <p><strong>Total Invoice Amount:</strong> ₹${totalInvoice
