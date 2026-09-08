// ==========================================
// EXPERIMENT 5
// SHOPPING CART CALCULATOR
// Arrays, Objects and Array Methods
// ==========================================


// ==========================================
// SHOPPING CART ARRAY
// ==========================================

let cart = [];



// ==========================================
// ADD PRODUCT FUNCTION
// ==========================================

function addProduct() {


    // Get product name

    let name =
        document.getElementById("name").value.trim();


    // Get price

    let price =
        parseFloat(
            document.getElementById("price").value
        );


    // Get quantity

    let qty =
        parseInt(
            document.getElementById("qty").value
        );



    // ==========================================
    // INPUT VALIDATION
    // ==========================================

    if (
        name === "" ||
        isNaN(price) ||
        isNaN(qty) ||
        price <= 0 ||
        qty <= 0
    ) {

        alert(
            "Please enter valid product details."
        );

        return;

    }



    // ==========================================
    // CREATE PRODUCT OBJECT
    // ==========================================

    let product = {

        id: cart.length + 1,

        name: name,

        price: price,

        quantity: qty

    };



    // ==========================================
    // push()
    // Add object into array
    // ==========================================

    cart.push(product);



    // Display updated cart

    displayCart();



    // Clear input fields

    document.getElementById("name").value = "";

    document.getElementById("price").value = "";

    document.getElementById("qty").value = "";



    // Put cursor back into product name

    document.getElementById("name").focus();

}



// ==========================================
// DISPLAY CART FUNCTION
// ==========================================

function displayCart() {


    let table =
        document.getElementById("cartTable");



    // ==========================================
    // TABLE HEADER
    // ==========================================

    table.innerHTML = `

        <tr>

            <th>ID</th>

            <th>Product</th>

            <th>Price (₹)</th>

            <th>Quantity</th>

            <th>Total (₹)</th>

        </tr>

    `;



    // ==========================================
    // forEach()
    // Display every product
    // ==========================================

    cart.forEach(function(item) {


        let itemTotal =
            item.price * item.quantity;



        table.innerHTML += `

            <tr>

                <td>
                    ${item.id}
                </td>

                <td class="product-name">
                    ${item.name}
                </td>

                <td>
                    ₹${item.price.toFixed(2)}
                </td>

                <td>
                    ${item.quantity}
                </td>

                <td class="total-cell">
                    ₹${itemTotal.toFixed(2)}
                </td>

            </tr>

        `;

    });



    // ==========================================
    // map()
    // Calculate individual totals
    // ==========================================

    let itemTotals =
        cart.map(function(item) {

            return item.price * item.quantity;

        });



    // ==========================================
    // reduce()
    // Calculate total cart value
    // ==========================================

    let total =
        itemTotals.reduce(function(sum, value) {

            return sum + value;

        }, 0);



    // ==========================================
    // DISCOUNT LOGIC
    // ==========================================

    let discountPercent = 0;



    if (total >= 50000) {

        discountPercent = 20;

    }

    else if (total >= 20000) {

        discountPercent = 10;

    }

    else if (total >= 5000) {

        discountPercent = 5;

    }



    // Calculate discount

    let discount =
        total * discountPercent / 100;



    // Calculate final amount

    let finalAmount =
        total - discount;



    // ==========================================
    // DISPLAY BILL
    // ==========================================

    document.getElementById("result").innerHTML = `

        <div class="bill-row">

            <span>
                TOTAL AMOUNT
            </span>

            <strong>
                ₹${total.toFixed(2)}
            </strong>

        </div>


        <div class="bill-row">

            <span>
                DISCOUNT
            </span>

            <strong class="discount">

                ₹${discount.toFixed(2)}
                (${discountPercent}%)

            </strong>

        </div>


        <div class="final-row">

            <span>
                FINAL AMOUNT
            </span>

            <strong>
                ₹${finalAmount.toFixed(2)}
            </strong>

        </div>

    `;



    // ==========================================
    // map()
    // Create item summary
    // ==========================================

    let summary =
        document.getElementById("summary");



    let summaryList =
        cart.map(function(item) {


            let itemTotal =
                item.price * item.quantity;



            return `

                <li>

                    <span>

                        ${item.name}

                        × ${item.quantity}

                    </span>


                    <strong>

                        ₹${itemTotal.toFixed(2)}

                    </strong>

                </li>

            `;

        });



    summary.innerHTML =
        summaryList.join("");



    // ==========================================
    // filter()
    // Find expensive products
    // ==========================================

    let expensiveProducts =
        cart.filter(function(item) {

            return item.price > 1000;

        });



    let expensive =
        document.getElementById("expensive");



    expensive.innerHTML = "";



    // ==========================================
    // Display expensive products
    // ==========================================

    if (expensiveProducts.length === 0) {


        expensive.innerHTML = `

            <li>
                No expensive products found.
            </li>

        `;

    }

    else {


        expensiveProducts.forEach(
            function(item) {


                expensive.innerHTML += `

                    <li>

                        <span>

                            ${item.name}

                        </span>


                        <strong>

                            ₹${item.price.toFixed(2)}

                        </strong>

                    </li>

                `;

            }
        );

    }

}