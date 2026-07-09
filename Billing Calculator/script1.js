function calculateBill(){
    //var example
    var customerName = document.getElementById("name").value;

    // let example
    let product = document.getElementById("product").value;
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);

    //const example
    const GST = 0.18;

    let subtotal = price * quantity;
    let gstAmount = subtotal * GST;
    let total = subtotal + gstAmount;

    // Destuctring
    const bill ={
        customerName,
        product,
        subtotal,
        gstAmount,
        total
    };

    const {customerName: name, product: item, subtotal: sub, gstAmount: gst, total: finalAmount} = bill;
    
    // Template Literal
    document.getElementById("output").innerHTML =`
         <h2>Billing Details</h2>
         <p><b>Customer:</b> ${name}</p>
         <p><b>Product:</b> ${item}</p>
         <p><b>Subtotal:</b> ${sub}</p>
         <p><b>GST (18%):</b> ${gst.toFixed(2)}</p>
         <h3>Total Amount: ₹${finalAmount.toFixed(2)}</h3>
    `;

    console.log(`Customer: ${name}`);
    console.log(`Product: ${item}`);
    console.log(`Total Bill: ₹${finalAmount.toFixed(2)}`);
    
}