/* =========================================================
   KHARIDI - JAVASCRIPT
   E-Commerce Website
   ========================================================= */


/* ================= PRODUCT DATABASE ================= */

const products = [

    {
        id: 1,
        name: "Apple iPhone 15",
        category: "Electronics",
        price: 69999,
        rating: 4.7,
        description: "Latest Apple smartphone with powerful performance and excellent camera.",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 2,
        name: "Samsung Galaxy S24",
        category: "Electronics",
        price: 64999,
        rating: 4.6,
        description: "Premium Samsung smartphone with vibrant display and fast performance.",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 3,
        name: "Sony Wireless Headphones",
        category: "Electronics",
        price: 1999,
        rating: 4.5,
        description: "Comfortable wireless headphones with immersive sound quality.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 4,
        name: "Smart Watch Series 9",
        category: "Electronics",
        price: 3999,
        rating: 4.3,
        description: "Smart fitness watch with activity tracking and notifications.",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 5,
        name: "Men's Casual Jacket",
        category: "Fashion",
        price: 1899,
        rating: 4.2,
        description: "Comfortable casual jacket suitable for everyday wear.",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 6,
        name: "Classic Running Shoes",
        category: "Fashion",
        price: 2499,
        rating: 4.4,
        description: "Lightweight running shoes designed for daily workouts.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 7,
        name: "Premium Backpack",
        category: "Fashion",
        price: 1299,
        rating: 4.5,
        description: "Spacious backpack suitable for college, office and travel.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 8,
        name: "The Psychology of Money",
        category: "Books",
        price: 399,
        rating: 4.8,
        description: "A practical book about money, investing and financial behaviour.",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 9,
        name: "Atomic Habits",
        category: "Books",
        price: 499,
        rating: 4.9,
        description: "A popular guide to building good habits and improving daily life.",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 10,
        name: "Modern Table Lamp",
        category: "Home",
        price: 899,
        rating: 4.1,
        description: "Minimal table lamp suitable for bedrooms and study tables.",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 11,
        name: "Ergonomic Office Chair",
        category: "Home",
        price: 7499,
        rating: 4.4,
        description: "Comfortable ergonomic chair for long working and study sessions.",
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 12,
        name: "Non-Stick Cookware Set",
        category: "Home",
        price: 2999,
        rating: 4.3,
        description: "Useful cookware set for everyday kitchen requirements.",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 13,
        name: "Premium Face Wash",
        category: "Beauty",
        price: 349,
        rating: 4.2,
        description: "Gentle daily face wash for a clean and fresh feeling.",
        image: "https://images.unsplash.com/photo-1556229010-aa3f7ff66f04?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 14,
        name: "Yoga Mat",
        category: "Sports",
        price: 699,
        rating: 4.5,
        description: "Comfortable non-slip yoga mat for workouts and stretching.",
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 15,
        name: "Football",
        category: "Sports",
        price: 799,
        rating: 4.4,
        description: "Durable football suitable for practice and recreational games.",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 16,
        name: "Remote Control Car",
        category: "Toys",
        price: 1199,
        rating: 4.1,
        description: "Fun remote control car designed for indoor and outdoor play.",
        image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 17,
        name: "Organic Grocery Pack",
        category: "Grocery",
        price: 999,
        rating: 4.3,
        description: "Everyday grocery essentials packed for convenient shopping.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 18,
        name: "Mechanical Gaming Keyboard",
        category: "Electronics",
        price: 3499,
        rating: 4.6,
        description: "Mechanical keyboard with responsive keys for gaming and work.",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80"
    }

];


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

let cart = JSON.parse(
    localStorage.getItem("kharidi_cart")
) || [];

let wishlist = JSON.parse(
    localStorage.getItem("kharidi_wishlist")
) || [];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const productGrid = document.getElementById("productGrid");
const noProducts = document.getElementById("noProducts");
const resultText = document.getElementById("resultText");

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const sideSearch = document.getElementById("sideSearch");

const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortFilter = document.getElementById("sortFilter");

const cartButton = document.getElementById("cartButton");
const cartDrawer = document.getElementById("cartDrawer");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const drawerCount = document.getElementById("drawerCount");

const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");

const clearCartButton = document.getElementById("clearCart");
const checkoutButton = document.getElementById("checkoutButton");

const overlay = document.getElementById("overlay");

const wishlistButton = document.getElementById("wishlistButton");
const wishlistDrawer = document.getElementById("wishlistDrawer");
const closeWishlist = document.getElementById("closeWishlist");
const wishlistItems = document.getElementById("wishlistItems");
const emptyWishlist = document.getElementById("emptyWishlist");
const wishlistCount = document.getElementById("wishlistCount");

const checkoutModal = document.getElementById("checkoutModal");
const closeCheckout = document.getElementById("closeCheckout");

const checkoutItems = document.getElementById("checkoutItems");
const checkoutSubtotal = document.getElementById("checkoutSubtotal");
const checkoutDiscount = document.getElementById("checkoutDiscount");
const checkoutTotal = document.getElementById("checkoutTotal");

const backToCart = document.getElementById("backToCart");
const placeOrderButton = document.getElementById("placeOrderButton");

const receiptModal = document.getElementById("receiptModal");
const receiptOrderId = document.getElementById("receiptOrderId");
const receiptDate = document.getElementById("receiptDate");
const receiptItems = document.getElementById("receiptItems");

const receiptSubtotal = document.getElementById("receiptSubtotal");
const receiptDiscount = document.getElementById("receiptDiscount");
const receiptTotal = document.getElementById("receiptTotal");

const printReceipt = document.getElementById("printReceipt");
const continueShopping = document.getElementById("continueShopping");

const productModal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");

const moreButton = document.getElementById("moreButton");
const toast = document.getElementById("toast");


/* =========================================================
   START WEBSITE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    renderProducts(products);

    updateCart();

    updateWishlist();

    setupEvents();

});


/* =========================================================
   EVENT LISTENERS
   ========================================================= */

function setupEvents() {


    /* ---------- SEARCH ---------- */

    searchButton.addEventListener("click", function () {

        sideSearch.value = searchInput.value;

        applyFilters();

        scrollToProducts();

    });


    searchInput.addEventListener("input", function () {

        sideSearch.value = searchInput.value;

        applyFilters();

    });


    sideSearch.addEventListener("input", function () {

        searchInput.value = sideSearch.value;

        applyFilters();

    });


    /* ---------- FILTERS ---------- */

    categoryFilter.addEventListener(
        "change",
        applyFilters
    );

    priceFilter.addEventListener(
        "change",
        applyFilters
    );

    sortFilter.addEventListener(
        "change",
        applyFilters
    );


    document.querySelectorAll(
        'input[name="rating"]'
    ).forEach(function (radio) {

        radio.addEventListener(
            "change",
            applyFilters
        );

    });


    document
        .getElementById("clearFilters")
        .addEventListener(
            "click",
            clearFilters
        );


    /* ---------- CATEGORY BAR ---------- */

    document.querySelectorAll(
        ".category-btn"
    ).forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(".category-btn")
                    .forEach(function (btn) {
                        btn.classList.remove("active");
                    });

                this.classList.add("active");

                categoryFilter.value =
                    this.dataset.category;

                applyFilters();

            }
        );

    });


    /* ---------- CART ---------- */

    cartButton.addEventListener(
        "click",
        openCart
    );

    closeCart.addEventListener(
        "click",
        closeCartDrawer
    );


    /* ---------- WISHLIST ---------- */

    wishlistButton.addEventListener(
        "click",
        openWishlist
    );

    closeWishlist.addEventListener(
        "click",
        closeWishlistDrawer
    );


    /* ---------- OVERLAY ---------- */

    overlay.addEventListener(
        "click",
        function () {

            closeCartDrawer();

            closeWishlistDrawer();

        }
    );


    /* ---------- CART ---------- */

    clearCartButton.addEventListener(
        "click",
        clearCart
    );


    checkoutButton.addEventListener(
        "click",
        openCheckout
    );


    /* ---------- CHECKOUT ---------- */

    closeCheckout.addEventListener(
        "click",
        closeCheckoutModal
    );


    backToCart.addEventListener(
        "click",
        function () {

            closeCheckoutModal();

            openCart();

        }
    );


    placeOrderButton.addEventListener(
        "click",
        placeOrder
    );


    /* ---------- RECEIPT ---------- */

    printReceipt.addEventListener(
        "click",
        printOrderReceipt
    );


    continueShopping.addEventListener(
        "click",
        function () {

            receiptModal.classList.remove("show");

            scrollToProducts();

        }
    );


    /* ---------- MORE ---------- */

    moreButton.addEventListener(
        "click",
        function () {

            showToast(
                "More features coming soon!"
            );

        }
    );


    /* ---------- ESCAPE ---------- */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeCartDrawer();

                closeWishlistDrawer();

                closeCheckoutModal();

                closeProductModal();

                receiptModal.classList.remove(
                    "show"
                );

            }

        }
    );

}


/* =========================================================
   FILTER PRODUCTS
   ========================================================= */

function applyFilters() {

    let filteredProducts = [...products];


    /* ---------- SEARCH ---------- */

    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    if (searchText !== "") {

        filteredProducts =
            filteredProducts.filter(
                function (product) {

                    return (

                        product.name
                            .toLowerCase()
                            .includes(searchText)

                        ||

                        product.category
                            .toLowerCase()
                            .includes(searchText)

                        ||

                        product.description
                            .toLowerCase()
                            .includes(searchText)

                    );

                }
            );

    }


    /* ---------- CATEGORY ---------- */

    const category =
        categoryFilter.value;


    if (category !== "All") {

        filteredProducts =
            filteredProducts.filter(
                function (product) {

                    return product.category === category;

                }
            );

    }


    /* ---------- PRICE ---------- */

    const price =
        priceFilter.value;


    if (price === "0-1000") {

        filteredProducts =
            filteredProducts.filter(
                function (product) {

                    return product.price < 1000;

                }
            );

    }


    if (price === "1000-5000") {

        filteredProducts =
            filteredProducts.filter(
                function (product) {

                    return (
                        product.price >= 1000 &&
                        product.price <= 5000
                    );

                }
            );

    }


    if (price === "5000-20000") {

        filteredProducts =
            filteredProducts.filter(
                function (product) {

                    return (
                        product.price > 5000 &&
                        product.price <= 20000
                    );

                }
            );

    }


    if (price === "20000+") {

        filteredProducts =
            filteredProducts.filter(
                function (product) {

                    return product.price > 20000;

                }
            );

    }


    /* ---------- RATING ---------- */

    const selectedRating =
        document.querySelector(
            'input[name="rating"]:checked'
        );


    if (selectedRating) {

        const ratingValue =
            Number(selectedRating.value);


        if (ratingValue > 0) {

            filteredProducts =
                filteredProducts.filter(
                    function (product) {

                        return (
                            product.rating >=
                            ratingValue
                        );

                    }
                );

        }

    }


    /* ---------- SORT ---------- */

    const sort =
        sortFilter.value;


    if (sort === "priceLow") {

        filteredProducts.sort(
            function (a, b) {

                return a.price - b.price;

            }
        );

    }


    if (sort === "priceHigh") {

        filteredProducts.sort(
            function (a, b) {

                return b.price - a.price;

            }
        );

    }


    if (sort === "ratingHigh") {

        filteredProducts.sort(
            function (a, b) {

                return b.rating - a.rating;

            }
        );

    }


    if (sort === "name") {

        filteredProducts.sort(
            function (a, b) {

                return a.name.localeCompare(
                    b.name
                );

            }
        );

    }


    renderProducts(filteredProducts);

}


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts(list) {

    productGrid.innerHTML = "";


    if (list.length === 0) {

        productGrid.style.display = "none";

        noProducts.style.display = "block";

        resultText.textContent =
            "No products found";

        return;

    }


    productGrid.style.display = "grid";

    noProducts.style.display = "none";


    resultText.textContent =
        `Showing ${list.length} product${list.length !== 1 ? "s" : ""}`;


    list.forEach(function (product) {

        const isWishlisted =
            wishlist.includes(product.id);


        const card =
            document.createElement("article");


        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image-wrap">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onclick="openProductModal(${product.id})"
                    style="cursor:pointer"
                >

                <button
                    class="wishlist-btn ${isWishlisted ? "active" : ""}"
                    onclick="toggleWishlist(${product.id})"
                    aria-label="Wishlist"
                >
                    ${isWishlisted ? "♥" : "♡"}
                </button>

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="rating">
                    ⭐ ${product.rating}
                </div>

                <div class="product-price">
                    ₹${formatNumber(product.price)}
                </div>


                <div class="product-actions">

                    <button
                        class="add-cart-btn"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                    <button
                        class="buy-now-btn"
                        onclick="buyNow(${product.id})"
                    >
                        Buy Now
                    </button>

                </div>

            </div>

        `;


        productGrid.appendChild(card);

    });

}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(productId) {

    const product =
        products.find(
            function (item) {
                return item.id === productId;
            }
        );


    if (!product) return;


    const existingItem =
        cart.find(
            function (item) {
                return item.id === productId;
            }
        );


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

    showToast(
        `${product.name} cart madhe add zala!`
    );

}


/* =========================================================
   BUY NOW
   ========================================================= */

function buyNow(productId) {

    addToCart(productId);

    setTimeout(function () {

        openCheckout();

    }, 250);

}


/* =========================================================
   UPDATE CART
   ========================================================= */

function updateCart() {

    const totalItems =
        cart.reduce(
            function (total, item) {

                return total + item.quantity;

            },
            0
        );


    cartCount.textContent =
        totalItems;


    drawerCount.textContent =
        totalItems;


    renderCart();

}


/* =========================================================
   RENDER CART
   ========================================================= */

function renderCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-state show">

                <div>🛒</div>

                <h3>
                    Cart empty aahe
                </h3>

                <p>
                    Products add kara ani shopping start kara.
                </p>

            </div>

        `;

        subtotal.textContent = "₹0";

        total.textContent = "₹0";

        return;

    }


    cart.forEach(function (item) {

        const product =
            products.find(
                function (product) {
                    return product.id === item.id;
                }
            );


        if (!product) return;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >


            <div>

                <h4>
                    ${product.name}
                </h4>

                <div class="cart-item-price">
                    ₹${formatNumber(product.price)}
                </div>


                <div class="quantity-controls">

                    <button
                        onclick="changeQuantity(${product.id}, -1)"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${product.id}, 1)"
                    >
                        +
                    </button>

                </div>


                <button
                    class="remove-item"
                    onclick="removeFromCart(${product.id})"
                >
                    Remove
                </button>

            </div>

        `;


        cartItems.appendChild(cartItem);

    });


    const cartTotal =
        calculateCartTotal();


    subtotal.textContent =
        `₹${formatNumber(cartTotal)}`;


    total.textContent =
        `₹${formatNumber(cartTotal)}`;

}


/* =========================================================
   CHANGE QUANTITY
   ========================================================= */

function changeQuantity(productId, amount) {

    const item =
        cart.find(
            function (item) {
                return item.id === productId;
            }
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                function (cartItem) {

                    return cartItem.id !== productId;

                }
            );

    }


    saveCart();

    updateCart();

}


/* =========================================================
   REMOVE FROM CART
   ========================================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            function (item) {

                return item.id !== productId;

            }
        );


    saveCart();

    updateCart();

    showToast(
        "Product cart madhun remove zala."
    );

}


/* =========================================================
   CALCULATE CART TOTAL
   ========================================================= */

function calculateCartTotal() {

    return cart.reduce(
        function (total, item) {

            const product =
                products.find(
                    function (product) {

                        return product.id === item.id;

                    }
                );


            if (!product) return total;


            return (
                total +
                product.price * item.quantity
            );

        },
        0
    );

}


/* =========================================================
   CLEAR CART
   ========================================================= */

function clearCart() {

    if (cart.length === 0) {

        showToast(
            "Cart already empty aahe."
        );

        return;

    }


    cart = [];


    saveCart();

    updateCart();


    showToast(
        "Cart clear zala."
    );

}


/* =========================================================
   OPEN CART
   ========================================================= */

function openCart() {

    closeWishlistDrawer();

    cartDrawer.classList.add("open");

    overlay.classList.add("show");

}


/* =========================================================
   CLOSE CART
   ========================================================= */

function closeCartDrawer() {

    cartDrawer.classList.remove("open");

    overlay.classList.remove("show");

}


/* =========================================================
   WISHLIST
   ========================================================= */

function toggleWishlist(productId) {

    const index =
        wishlist.indexOf(productId);


    if (index === -1) {

        wishlist.push(productId);

        const product =
            products.find(
                function (item) {
                    return item.id === productId;
                }
            );


        if (product) {

            showToast(
                `${product.name} wishlist madhe add zala ❤️`
            );

        }

    } else {

        wishlist.splice(index, 1);

        showToast(
            "Wishlist madhun remove zala."
        );

    }


    saveWishlist();

    updateWishlist();

    applyFilters();

}


/* =========================================================
   UPDATE WISHLIST
   ========================================================= */

function updateWishlist() {

    wishlistCount.textContent =
        wishlist.length;


    renderWishlist();

}


/* =========================================================
   RENDER WISHLIST
   ========================================================= */

function renderWishlist() {

    wishlistItems.innerHTML = "";


    if (wishlist.length === 0) {

        emptyWishlist.classList.add("show");

        return;

    }


    emptyWishlist.classList.remove("show");


    wishlist.forEach(function (productId) {

        const product =
            products.find(
                function (item) {
                    return item.id === productId;
                }
            );


        if (!product) return;


        const item =
            document.createElement("div");


        item.className =
            "wishlist-item";


        item.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >


            <div>

                <h4>
                    ${product.name}
                </h4>

                <div class="wishlist-item-price">
                    ₹${formatNumber(product.price)}
                </div>


                <div class="wishlist-item-actions">

                    <button
                        class="wishlist-cart-btn"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                    <button
                        class="wishlist-remove-btn"
                        onclick="toggleWishlist(${product.id})"
                    >
                        Remove
                    </button>

                </div>

            </div>

        `;


        wishlistItems.appendChild(item);

    });

}


/* =========================================================
   OPEN WISHLIST
   ========================================================= */

function openWishlist() {

    closeCartDrawer();

    renderWishlist();

    wishlistDrawer.classList.add("open");

    overlay.classList.add("show");

}


/* =========================================================
   CLOSE WISHLIST
   ========================================================= */

function closeWishlistDrawer() {

    wishlistDrawer.classList.remove("open");

    overlay.classList.remove("show");

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function openCheckout() {

    if (cart.length === 0) {

        showToast(
            "Checkout sathi cart madhe product add kara."
        );

        return;

    }


    closeCartDrawer();


    renderCheckout();


    checkoutModal.classList.add("show");

}


/* =========================================================
   RENDER CHECKOUT
   ========================================================= */

function renderCheckout() {

    checkoutItems.innerHTML = "";


    cart.forEach(function (item) {

        const product =
            products.find(
                function (product) {
                    return product.id === item.id;
                }
            );


        if (!product) return;


        const itemTotal =
            product.price * item.quantity;


        const checkoutItem =
            document.createElement("div");


        checkoutItem.className =
            "checkout-item";


        checkoutItem.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >


            <div>

                <h4>
                    ${product.name}
                </h4>

                <p>
                    Qty: ${item.quantity} ×
                    ₹${formatNumber(product.price)}
                </p>

            </div>


            <strong>
                ₹${formatNumber(itemTotal)}
            </strong>

        `;


        checkoutItems.appendChild(
            checkoutItem
        );

    });


    const cartTotal =
        calculateCartTotal();


    const discount =
        calculateDiscount(cartTotal);


    const finalTotal =
        cartTotal - discount;


    checkoutSubtotal.textContent =
        `₹${formatNumber(cartTotal)}`;


    checkoutDiscount.textContent =
        `- ₹${formatNumber(discount)}`;


    checkoutTotal.textContent =
        `₹${formatNumber(finalTotal)}`;

}


/* =========================================================
   DISCOUNT
   ========================================================= */

function calculateDiscount(amount) {

    /*
       Simple demo discount for class assignment.
    */

    if (amount >= 50000) {

        return 2000;

    }

    if (amount >= 10000) {

        return 1000;

    }

    if (amount >= 5000) {

        return 500;

    }

    return 0;

}


/* =========================================================
   CLOSE CHECKOUT
   ========================================================= */

function closeCheckoutModal() {

    checkoutModal.classList.remove(
        "show"
    );

}


/* =========================================================
   PLACE ORDER
   ========================================================= */

function placeOrder() {

    if (cart.length === 0) {

        closeCheckoutModal();

        return;

    }


    const orderId =
        "KH" +
        Date.now()
            .toString()
            .slice(-8);


    const now =
        new Date();


    const dateString =
        now.toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );


    const cartTotal =
        calculateCartTotal();


    const discount =
        calculateDiscount(cartTotal);


    const finalTotal =
        cartTotal - discount;


    /* ---------- RECEIPT INFORMATION ---------- */

    receiptOrderId.textContent =
        orderId;


    receiptDate.textContent =
        dateString;


    receiptSubtotal.textContent =
        `₹${formatNumber(cartTotal)}`;


    receiptDiscount.textContent =
        `- ₹${formatNumber(discount)}`;


    receiptTotal.textContent =
        `₹${formatNumber(finalTotal)}`;


    renderReceiptItems();


    /* ---------- CLEAR CART ---------- */

    cart = [];

    saveCart();

    updateCart();


    /* ---------- CLOSE CHECKOUT ---------- */

    closeCheckoutModal();


    /* ---------- OPEN RECEIPT ---------- */

    receiptModal.classList.add(
        "show"
    );


    showToast(
        "Order successfully placed!"
    );

}


/* =========================================================
   RENDER RECEIPT ITEMS
   ========================================================= */

function renderReceiptItems() {

    receiptItems.innerHTML = "";


    /*
       We need the items from the order before
       the cart is cleared.

       Therefore this function receives the
       current order through the saved order.
    */

}


/* =========================================================
   PRODUCT MODAL
   ========================================================= */

function openProductModal(productId) {

    const product =
        products.find(
            function (item) {
                return item.id === productId;
            }
        );


    if (!product) return;


    const isWishlisted =
        wishlist.includes(product.id);


    modalContent.innerHTML = `

        <div class="product-modal-content">

            <div>

                <img
                    class="product-modal-image"
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div>

                <div class="product-modal-category">
                    ${product.category}
                </div>


                <h2>
                    ${product.name}
                </h2>


                <div class="rating">
                    ⭐ ${product.rating}
                </div>


                <p class="product-modal-description">
                    ${product.description}
                </p>


                <div class="product-modal-price">
                    ₹${formatNumber(product.price)}
                </div>


                <div class="modal-actions">

                    <button
                        class="primary-btn"
                        onclick="addToCart(${product.id}); closeProductModal()"
                    >
                        Add to Cart
                    </button>


                    <button
                        class="add-cart-btn modal-buy"
                        onclick="toggleWishlist(${product.id})"
                    >
                        ${isWishlisted
                            ? "♥ Wishlisted"
                            : "♡ Add to Wishlist"}
                    </button>


                    <button
                        class="outline-btn"
                        onclick="closeProductModal()"
                    >
                        Close
                    </button>

                </div>

            </div>

        </div>

    `;


    productModal.classList.add(
        "show"
    );

}


/* =========================================================
   CLOSE PRODUCT MODAL
   ========================================================= */

function closeProductModal() {

    productModal.classList.remove(
        "show"
    );

}


/* =========================================================
   PRODUCT MODAL BACKDROP
   ========================================================= */

productModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            productModal
        ) {

            closeProductModal();

        }

    }
);


/* =========================================================
   CLEAR FILTERS
   ========================================================= */

function clearFilters() {

    searchInput.value = "";

    sideSearch.value = "";

    categoryFilter.value = "All";

    priceFilter.value = "all";

    sortFilter.value = "default";


    const allRatings =
        document.querySelectorAll(
            'input[name="rating"]'
        );


    allRatings.forEach(
        function (radio) {

            radio.checked =
                radio.value === "0";

        }
    );


    document
        .querySelectorAll(".category-btn")
        .forEach(
            function (button) {

                button.classList.remove(
                    "active"
                );

                if (
                    button.dataset.category ===
                    "All"
                ) {

                    button.classList.add(
                        "active"
                    );

                }

            }
        );


    renderProducts(products);

}


/* =========================================================
   SAVE CART
   ========================================================= */

function saveCart() {

    localStorage.setItem(
        "kharidi_cart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   SAVE WISHLIST
   ========================================================= */

function saveWishlist() {

    localStorage.setItem(
        "kharidi_wishlist",
        JSON.stringify(wishlist)
    );

}


/* =========================================================
   NUMBER FORMAT
   ========================================================= */

function formatNumber(number) {

    return Number(number).toLocaleString(
        "en-IN"
    );

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        function () {

            toast.classList.remove(
                "show"
            );

        },
        2200
    );

}


/* =========================================================
   SCROLL TO PRODUCTS
   ========================================================= */

function scrollToProducts() {

    const section =
        document.getElementById(
            "productsSection"
        );


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================================
   PRINT RECEIPT
   ========================================================= */

function printOrderReceipt() {

    window.print();

}