const products = [
  {
    category: "כפפות",
    items: [
      {
        id: "001",
        name: "כפפות איגרוף אדום",
        brand: "Boxing",
        price: 220,
        stock: 5,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["red"],
        shortDescription: "כפפות איגרוף איכותיות בצבע אדום.",
        description:
          "כפפות איגרוף איכותיות בצבע אדום עם ריפוד פנימי ונוחות מקסימלית.",
        image: "css/images/asellphoto.jpg",
      },
      {
        id: "002",
        name: "כפפות איגרוף יוקרתיות",
        brand: "Boxing",
        price: 459,
        stock: 3,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["white"],
        shortDescription: "כפפות איגרוף יוקרתיות בצבע לבן.",
        description: "כפפות איגרוף יוקרתיות ונוחות במיוחד, עמידות לאורך זמן.",
        image: "css/images/bsellphoto.jpg",
      },
      {
        id: "003",
        name: "כפפות איגרוף שחור",
        brand: "Boxing",
        price: 220,
        stock: 7,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["black"],
        shortDescription: "כפפות איגרוף בצבע שחור.",
        description: "כפפות איגרוף חזקות בצבע שחור, מתאימות לכל סוגי האימונים.",
        image: "css/images/csellphoto.jpg",
      },
      {
        id: "004",
        name: "כפפות איגרוף לבן",
        brand: "Boxing",
        price: 269,
        stock: 6,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["white"],
        shortDescription: "כפפות איגרוף לבנות.",
        description: "כפפות איגרוף לבנות עם הגנה נוספת לידיים.",
        image: "css/images/dsellphoto.jpg",
      },
      {
        id: "005",
        name: "כפפות איגרוף זית",
        brand: "Boxing",
        price: 220,
        stock: 4,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["olive"],
        shortDescription: "כפפות איגרוף בצבע זית.",
        description: "כפפות איגרוף חזקות בצבע זית עם נוחות מרבית.",
        image: "css/images/gsellphoto.jpg",
      },
      {
        id: "011",
        name: "כפפות איגרוף אפור מיוחד",
        brand: "Boxing",
        price: 420,
        stock: 2,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["gray"],
        shortDescription: "כפפות איגרוף בצבע אפור מיוחד.",
        description: "כפפות איגרוף בעיצוב מיוחד בצבע אפור.",
        image: "css/images/hsellphoto.webp",
      },
      {
        id: "012",
        name: "כפפות איגרוף בורדו",
        brand: "Boxing",
        price: 269,
        stock: 3,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["burgundy"],
        shortDescription: "כפפות איגרוף בצבע בורדו.",
        description: "כפפות איגרוף עם עיצוב מיוחד בצבע בורדו.",
        image: "css/images/isellphoto.jpg",
      },
      {
        id: "013",
        name: "כפפות איגרוף מיוחד",
        brand: "Boxing",
        price: 500,
        stock: 1,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["special"],
        shortDescription: "כפפות איגרוף בעיצוב מיוחד.",
        description: "כפפות איגרוף מיוחדות בצבע ובעיצוב שלא ניתן למצוא בשוק.",
        image: "css/images/esellphoto.webp",
      },
      {
        id: "014",
        name: "כפפות איגרוף כחול",
        brand: "Boxing",
        price: 260,
        stock: 5,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["blue"],
        shortDescription: "כפפות איגרוף בצבע כחול.",
        description: "כפפות איגרוף איכותיות בצבע כחול עם אחיזה טובה.",
        image: "css/images/ssellphoto.webp",
      },
      {
        id: "015",
        name: "כפפות איגרוף בז' מיוחד",
        brand: "Boxing",
        price: 220,
        stock: 4,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["beige"],
        shortDescription: "כפפות איגרוף בצבע בז' מיוחד.",
        description: "כפפות איגרוף בצבע בז' מיוחד המתאימות לכל גיל ולכל רמה.",
        image: "css/images/sellphoto.jpg",
      },
    ],
  },
  {
    category: "תחבושות",
    items: [
      {
        id: "006",
        name: "חבישות יד לאגרוף לבן",
        brand: "Boxing",
        price: 75,
        stock: 10,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["white"],
        shortDescription: "חבישות יד לאגרוף בצבע לבן.",
        description: "חבישות יד לאגרוף עם תמיכה והגנה לידיים.",
        image: "css/images/a.jpg",
      },
      {
        id: "007",
        name: "חבישות יד לאגרוף שחור",
        brand: "Boxing",
        price: 89,
        stock: 8,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["black"],
        shortDescription: "חבישות יד לאגרוף בצבע שחור.",
        description: "חבישות יד איכותיות לאגרוף בצבע שחור.",
        image: "css/images/b.jpg",
      },
      {
        id: "008",
        name: "חבישות יד לאגרוף ירוק בהיר",
        brand: "Boxing",
        price: 99,
        stock: 12,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["light green"],
        shortDescription: "חבישות יד לאגרוף בצבע ירוק בהיר.",
        description: "חבישות יד איכותיות בצבע ירוק בהיר להגנה נוספת.",
        image: "css/images/c.jpg",
      },
      {
        id: "009",
        name: "חבישות יד לאגרוף אדום",
        brand: "Boxing",
        price: 99,
        stock: 7,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["red"],
        shortDescription: "חבישות יד לאגרוף בצבע אדום.",
        description: "חבישות יד בצבע אדום עם חיזוק מיוחד.",
        image: "css/images/d.jpg",
      },
      {
        id: "010",
        name: "חבישות יד לאגרוף כתום",
        brand: "Boxing",
        price: 99,
        stock: 5,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["orange"],
        shortDescription: "חבישות יד לאגרוף בצבע כתום.",
        description: "חבישות יד איכותיות בצבע כתום להגנה מושלמת.",
        image: "css/images/e.webp",
      },
    ],
  },
  {
    category: "מכנסיים",
    items: [
      {
        id: "016",
        name: "מכנס לבן לזירה",
        brand: "Boxing",
        price: 250,
        stock: 6,
        storage: ["S", "M", "L", "XL", "XXL"],
        colors: ["white"],
        shortDescription: "מכנס לבן המיועד לאימוני אגרוף.",
        description: "מכנס איכותי ונוח בצבע לבן המיועד במיוחד לזירות אגרוף.",
        image: "css/images/a1.jpg",
      },
    ],
  },
];

// פונקציה ליצירת אלמנט HTML עבור מוצר
function createHtmlProduct(product) {
  const {
    id,
    name: productName,
    brand,
    image,
    price,
    storage = [],
    shortDescription,
  } = product;

  // יצירת אלמנט עבור המוצר
  const productElement = document.createElement("div");
  productElement.classList.add("selltype");

  // הוספת HTML עם פרטי המוצר
  productElement.innerHTML = `
    <img src="${image}" style="width: 100%; height: 55%;" />
    <p id="title">${productName}</p>
    <div class="optionbutton">
      <input type="number" class="quailty" name="quailty" value="1" min="1">
      <label for="quailty">:הוספת כמות</label>
      <select>${storage
        .map((size) => `<option>${size}</option>`)
        .join("")}</select>
      <label for="size">:מידה</label>
      <button class="add" data-id="${id}">הוספה לסל</button>
      <button class="details-btn" data-id="${id}">
        <span class="replies">לפרטים נוספים</span>
        <span class="comment">${price}₪ עם משלוח</span>
      </button>
    </div>
  `;

  // הוספת המוצר לדף
  document.querySelector(".products").appendChild(productElement);

  // הוספת מאזין לכפתור "לפרטים נוספים"
  const detailsButton = productElement.querySelector(".details-btn");
  detailsButton.addEventListener("click", () => {
    window.location.href = `product.html?productid=${id}`;
  });
}

// פונקציה להצגת פרטי מוצר בעמוד פרטי המוצר
function showProductDetails(productId) {
  // שליפת כל המוצרים מהקטגוריות
  const allItems = products.flatMap((category) => category.items);

  // חיפוש המוצר לפי מזהה
  const product = allItems.find((item) => item.id === productId);

  // אזור שבו יוצגו פרטי המוצר
  const productInfoContainer = document.querySelector(".product-info");

  if (product) {
    // הוספת פרטי המוצר לעמוד
    productInfoContainer.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="product-details">
        <h1 class="product-title">${product.name}</h1>
        <p class="product-description">${product.description}</p>
        <p class="product-price">₪${product.price}</p>
        <div class="product-options">
          <label for="size">מידה:</label>
          <select id="size">
            ${product.storage
              .map((size) => `<option>${size}</option>`)
              .join("")}
          </select>
        </div>
        <div class="product-actions">
          <button class="add-to-cart" data-id="${
            product.id
          }">הוסף לעגלה</button>
          <button class="go-back">חזור לרשימת מוצרים</button>
        </div>
      </div>
    `;

    // הוספת מאזין לכפתור "הוסף לעגלה"
    document.querySelector(".add-to-cart").addEventListener("click", () => {
      addToCart(product.id, 1);
    });

    // הוספת מאזין לכפתור "חזור לרשימת מוצרים"
    document.querySelector(".go-back").addEventListener("click", () => {
      window.location.href = "products.html";
    });
  } else {
    // אם המוצר לא נמצא
    productInfoContainer.innerHTML = "<p>המוצר לא נמצא.</p>";
  }
}

// פונקציה להוספת מוצר לעגלה
function addToCart(productId, quantity) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const allItems = products.flatMap((category) => category.items);
  const product = allItems.find((item) => item.id === productId);

  if (!product) {
    console.error("Product not found");
    return;
  }

  // בדיקה אם המוצר כבר בעגלה
  const existingItemIndex = cart.findIndex((item) => item.id === productId);

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    });
  }

  // שמירת העגלה בעזרת localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("המוצר נוסף לעגלה!");
}

// פונקציה לטעינת העגלה בדף העגלה
function loadCart() {
  const cartItemsContainer = document.querySelector(".cart-items");
  if (!cartItemsContainer) {
    console.error("Cart container not found!");
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalPrice = 0;

  cartItemsContainer.innerHTML = "";

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="75" height="75" />
      <div class="cart-item-info">
        <p class="cart-item-title">${item.name}</p>
        <p class="cart-item-price">₪${item.price}</p>
        <div class="cart-item-quantity">
          <label>כמות:</label>
          <input type="number" value="${item.quantity}" min="1" data-id="${item.id}" class="quantity-input"/>
        </div>
      </div>
      <button class="remove-btn" data-id="${item.id}">הסר</button>
    `;

    cartItemsContainer.appendChild(cartItem);
    totalPrice += item.price * item.quantity;
  });

  // הצגת המחיר הכולל
  document.querySelector(".total-price").innerText = `₪${totalPrice}`;

  // הוספת מאזינים לעדכון כמות ולהסרה
  document.querySelectorAll(".quantity-input").forEach((input) => {
    input.addEventListener("change", updateQuantity);
  });

  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", removeFromCart);
  });
}

// פונקציה לעדכון כמות בעגלה
function updateQuantity(e) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const productId = e.target.dataset.id;
  const newQuantity = parseInt(e.target.value);

  const itemIndex = cart.findIndex((item) => item.id === productId);

  if (newQuantity > 0) {
    cart[itemIndex].quantity = newQuantity;
  } else {
    cart.splice(itemIndex, 1); // מסיר את הפריט אם הכמות היא 0
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart(); // טוען מחדש את העגלה
}

// פונקציה להסרת פריט מהעגלה
function removeFromCart(e) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const productId = e.target.dataset.id;

  const newCart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(newCart));
  loadCart(); // טוען מחדש את העגלה
}

// פונקציה לאתחול דפי המוצרים והעגלה
document.addEventListener("DOMContentLoaded", () => {
  const bagButton = document.querySelector(".title .bag");
  if (bagButton) {
    bagButton.addEventListener("click", () => {
      window.location.href = "cart.html";
    });
  }

  if (document.querySelector(".products")) {
    products.forEach((category) => category.items.forEach(createHtmlProduct));

    document.querySelector(".products").addEventListener("click", (event) => {
      if (event.target.classList.contains("add")) {
        const productId = event.target.dataset.id;
        const productElement = event.target.closest(".selltype");
        const quantityInput = productElement.querySelector(".quailty");
        const quantity = parseInt(quantityInput.value);

        if (quantity > 0) {
          addToCart(productId, quantity);
        } else {
          alert("נא לבחור כמות חוקית!");
        }
      }
    });
  }

  if (document.querySelector(".cart-items")) {
    loadCart();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("productid");

  if (productId) {
    showProductDetails(productId);
  }
});

// כפתור התחברות (Login)
document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector(".login");
  if (loginButton) {
    loginButton.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }
});

// ניסיון שם משתמש סיסמא
document
  .querySelector(".login-container button")
  .addEventListener("click", (event) => {
    event.preventDefault();

    // קבלת ערכי שם המשתמש והסיסמה
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    // בדיקה אם שם המשתמש והסיסמה נכונים
    if (username === "Gabi" && password === "1234") {
      alert("מועבר לדף מנהלים");
      window.location.href = "admin.html";
    } else {
      alert("שם משתמש או סיסמה שגויים.");
    }
  });
