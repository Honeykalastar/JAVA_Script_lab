function setPrice(){

    let product = document.getElementById("product");

    let price =
    product.options[product.selectedIndex].getAttribute("data-price");

    document.getElementById("price").value = price;
}

function calculateBill(){

    let name = document.getElementById("name").value;

    let product = document.getElementById("product").value;

    let price = Number(document.getElementById("price").value);

    let quantity = Number(document.getElementById("quantity").value);

    let total = price * quantity;

    let gst = total * 0.18;

    let finalBill = total + gst;

    document.getElementById("output").innerHTML =

    "<h3>Bill Receipt</h3>" +

    "<b>Customer:</b> " + name + "<br><br>" +

    "<b>Product:</b> " + product + "<br><br>" +

    "<b>Price:</b> ₹" + price + "<br><br>" +

    "<b>Quantity:</b> " + quantity + "<br><br>" +

    "<b>Total:</b> ₹" + total + "<br><br>" +

    "<b>GST (18%):</b> ₹" + gst.toFixed(2) + "<br><br>" +

    "<h2>Final Amount = ₹" + finalBill.toFixed(2) + "</h2>";
}