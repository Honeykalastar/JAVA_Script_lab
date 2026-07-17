// Product Prices

const products = {

    Smartphone: 25000,

    Laptop: 75000,

    TV: 50000,

    Headphones: 2000,

    Smartwatch: 5000

};

// Automatically set price

function setPrice() {

    let product = document.getElementById("product").value;

    document.getElementById("price").value = products[product] || "";

}

// Show / Hide Gift Message

function toggleGiftMessage() {

    let gift = document.getElementById("gift").checked;

    let section = document.getElementById("giftSection");

    if (gift) {

        section.style.display = "block";

    } else {

        section.style.display = "none";

        document.getElementById("giftMessage").value = "";

    }

}

function showPaymentFields(){

    let payment = document.getElementById("payment").value;

    let paymentDetails = document.getElementById("paymentDetails");

    let upiField = document.getElementById("upiField");

    let cardFields = document.getElementById("cardFields");

    paymentDetails.style.display = "none";
    upiField.style.display = "none";
    cardFields.style.display = "none";

    if(payment == "UPI"){

        paymentDetails.style.display = "block";
        upiField.style.display = "block";

    }

    else if(payment == "Debit Card" || payment == "Credit Card"){

        paymentDetails.style.display = "block";
        cardFields.style.display = "block";

    }

}

// Generate Bill

function calculateBill() {

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let mobile = document.getElementById("mobile").value.trim();

    let address = document.getElementById("address").value.trim();

    let product = document.getElementById("product").value;

    let price = Number(document.getElementById("price").value);

    let quantity = Number(document.getElementById("quantity").value);

    let coupon = document.getElementById("coupon").value.trim().toUpperCase();

    let deliverySelect = document.getElementById("delivery");

    let deliveryType = deliverySelect.options[deliverySelect.selectedIndex].text;

    let deliveryPrice = Number(deliverySelect.value);

    let payment = document.getElementById("payment").value;
    
    let upiId = document.getElementById("upiId").value.trim();

    let cardNumber = document.getElementById("cardNumber").value.trim();

    let expiryDate = document.getElementById("expiryDate").value;

    let cvv = document.getElementById("cvv").value.trim();

    let gift = document.getElementById("gift").checked;

    let giftMessage = document.getElementById("giftMessage").value;

    // Validation

    if (
        name == "" ||
        email == "" ||
        mobile == "" ||
        address == "" ||
        product == "" ||
        quantity <= 0
    ) {

        alert("Please fill all fields.");

        return;

    }

    if (!email.includes("@")) {

        alert("Please enter a valid email.");

        return;

    }

    if (mobile.length != 10 || isNaN(mobile)) {

        alert("Enter a valid 10-digit mobile number.");

        return;

    }
    // Payment Validation

if(payment == "UPI"){

    if(upiId == ""){

        alert("Please enter your UPI ID.");

        return;

    }

}

if(payment == "Debit Card" || payment == "Credit Card"){

    if(cardNumber.length != 16 || isNaN(cardNumber)){

        alert("Enter a valid 16-digit Card Number.");

        return;

    }

    if(expiryDate == ""){

        alert("Select Expiry Date.");

        return;

    }

    if(cvv.length != 3 || isNaN(cvv)){

        alert("Enter a valid CVV.");

        return;

        }

    }
    // Calculations

    let subtotal = price * quantity;

    let discount = 0;

    if (coupon == "WELCOME10") {

        discount = subtotal * 0.10;

    }

    let amountAfterDiscount = subtotal - discount;

    let gst = amountAfterDiscount * 0.18;

    let finalAmount = amountAfterDiscount + gst + deliveryPrice;

    // Date & Time

    let today = new Date();

    let date = today.toLocaleDateString();

    let time = today.toLocaleTimeString();

    // Bill Number

    let billNo = Math.floor(Math.random() * 9000) + 1000;

    // Display Bill

    document.getElementById("output").innerHTML =

        "<h2>🛒 Shopping Bill</h2>" +

        "<hr><br>" +

        "<b>Bill No :</b> " + billNo + "<br><br>" +

        "<b>Date :</b> " + date + "<br><br>" +

        "<b>Time :</b> " + time + "<br><br>" +

        "<b>Customer :</b> " + name + "<br><br>" +

        "<b>Email :</b> " + email + "<br><br>" +

        "<b>Mobile :</b> " + mobile + "<br><br>" +

        "<b>Address :</b><br>" + address + "<br><br>" +

        "<b>Product :</b> " + product + "<br><br>" +

        "<b>Price :</b> ₹" + price + "<br><br>" +

        "<b>Quantity :</b> " + quantity + "<br><br>" +

        "<b>Subtotal :</b> ₹" + subtotal.toFixed(2) + "<br><br>" +

        "<b>Discount :</b> ₹" + discount.toFixed(2) + "<br><br>" +

        "<b>GST (18%) :</b> ₹" + gst.toFixed(2) + "<br><br>" +

        "<b>Delivery Type :</b> " + deliveryType + "<br><br>" +

        "<b>Delivery Charges :</b> ₹" + deliveryPrice + "<br><br>" +

                    "<b>Payment :</b> " + payment + "<br><br>" +

            (payment=="UPI"

            ? "<b>UPI ID :</b> "+upiId+"<br><br>"

            : "")

            +

            ((payment=="Debit Card" || payment=="Credit Card")

            ?

            "<b>Card Number :</b> **** **** **** "+cardNumber.slice(-4)+"<br><br>"

            +

            "<b>Expiry :</b> "+expiryDate+"<br><br>"

            : "")

            +

        "<br><h3 style='color:green;'>🎉 Thank You for Shopping with Honey's Store!</h3>";

}

// Clear Form

function clearForm() {

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("mobile").value = "";

    document.getElementById("address").value = "";

    document.getElementById("product").value = "";

    document.getElementById("price").value = "";

    document.getElementById("quantity").value = "";

    document.getElementById("coupon").value = "";

    document.getElementById("delivery").selectedIndex = 0;

    document.getElementById("payment").selectedIndex = 0;

    document.getElementById("gift").checked = false;

    document.getElementById("giftMessage").value = "";

    document.getElementById("giftSection").style.display = "none";

    document.getElementById("output").innerHTML = "<h2>Your Shopping Bill will appear here.</h2>";

}
function printBill(){

    let bill = document.getElementById("output").innerHTML;

    let newWindow = window.open("", "", "width=800,height=700");

    newWindow.document.write("<html>");

    newWindow.document.write("<head>");

    newWindow.document.write("<title>Shopping Bill</title>");

    newWindow.document.write("</head>");

    newWindow.document.write("<body>");

    newWindow.document.write(bill);

    newWindow.document.write("</body>");

    newWindow.document.write("</html>");

    newWindow.document.close();

    newWindow.print();

}