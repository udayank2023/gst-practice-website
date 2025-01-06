function submitRegistration() {
    const businessName = document.getElementById("businessName").value;
    const pan = document.getElementById("pan").value;
    const gstin = document.getElementById("gstin").value;

    if (!businessName || !pan || !gstin) {
        alert("Please fill all fields!");
        return;
    }

    document.getElementById("registrationResult").textContent = `Registration successful for ${businessName}.`;
}

function generateInvoice() {
    const invoiceNumber = document.getElementById("invoiceNumber").value;
    const itemDescription = document.getElementById("itemDescription").value;
    const gstRate = parseFloat(document.getElementById("gstRate").value);
    const amount = parseFloat(document.getElementById("amount").value);

    if (!invoiceNumber || !itemDescription || isNaN(gstRate) || isNaN(amount)) {
        alert("Please fill all fields!");
        return;
    }

    const gstAmount = (amount * gstRate) / 100;
    const totalAmount = amount + gstAmount;

    document.getElementById("invoiceResult").textContent = `Invoice #${invoiceNumber} for ${itemDescription}:
        Amount: ₹${amount}, GST: ₹${gstAmount.toFixed(2)}, Total: ₹${totalAmount.toFixed(2)}.`;
}

function fileReturn() {
    const sales = parseFloat(document.getElementById("sales").value);
    const purchases = parseFloat(document.getElementById("purchases").value);
    const outputTax = parseFloat(document.getElementById("outputTax").value);
    const inputTax = parseFloat(document.getElementById("inputTax").value);

    if (isNaN(sales) || isNaN(purchases) || isNaN(outputTax) || isNaN(inputTax)) {
        alert("Please fill all fields!");
        return;
    }

    const netGST = outputTax - inputTax;

    document.getElementById("returnResult").textContent = `GST Return Filed:
        Sales: ₹${sales}, Purchases: ₹${purchases}, Output Tax: ₹${outputTax}, 
        Input Tax Credit: ₹${inputTax}, Net GST Payable: ₹${netGST.toFixed(2)}.`;
}
