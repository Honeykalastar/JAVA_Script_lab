
// Wait until the page is ready
$(document).ready(function () {

    // View Orders button
    $("#viewOrders").click(function () {

        // Clear existing rows and show loading message
        $("#orderTableBody").empty();
        $("#message").text("Loading orders...").show();

        // Load JSON data
        $.getJSON("orders.json", function (data) {

            let totalSales = 0;

            // Clear loading message
            $("#message").hide();

            // Process every order
            $.each(data, function (index, order) {

                let statusClass = "";

                if (order.status === "Preparing") {
                    statusClass = "preparing";
                } else if (order.status === "Ready") {
                    statusClass = "ready";
                } else if (order.status === "Delivered") {
                    statusClass = "delivered";
                }

                // Add order row
                $("#orderTableBody").append(`
                    <tr>
                        <td><strong>#${order.orderId}</strong></td>
                        <td>${order.customerName}</td>
                        <td>${order.foodItem}</td>
                        <td>${order.quantity}</td>
                        <td><strong>₹${order.totalAmount}</strong></td>
                        <td>
                            <span class="status ${statusClass}">
                                ${order.status}
                            </span>
                        </td>
                    </tr>
                `);

                // Calculate total sales
                totalSales += Number(order.totalAmount);
            });

            // Update summary cards
            $("#totalOrders").text(data.length);
            $("#totalSales").text(totalSales.toLocaleString("en-IN"));

            // Handle empty JSON arrays
            if (data.length === 0) {
                $("#message").text("No orders found.").show();
            }

        }).fail(function () {

            $("#message")
                .text("Unable to load orders. Check orders.json.")
                .show();

            console.error("Error loading orders.json");

        });

    });

});
