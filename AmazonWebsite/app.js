const leftBtn = document.querySelector(".l-btn");
const rightBtn = document.querySelector(".r-btn");

rightBtn.addEventListener("click", function (event) {
  const conent = document.querySelector(".product-slide");
  conent.scrollLeft += 1100;
  event.preventDefault();
});
leftBtn.addEventListener("click", function (event) {
  const conent = document.querySelector(".product-slide");
  conent.scrollLeft -= 1100;
  event.preventDefault();
});
const leftBtn1 = document.querySelector(".btn-1b");
const rightBtn1 = document.querySelector(".btn-1a");

rightBtn1.addEventListener("click", function (event) {
  const conent = document.querySelector(".product-slide-1");
  conent.scrollLeft += 1100;
  event.preventDefault();
});
leftBtn1.addEventListener("click", function (event) {
  const conent = document.querySelector(".product-slide-1");
  conent.scrollLeft -= 1100;
  event.preventDefault();
});
const leftBtn2 = document.querySelector(".btn-1c");
const rightBtn2 = document.querySelector(".btn-1d");

rightBtn2.addEventListener("click", function (event) {
  const conent = document.querySelector(".product-slide-2");
  conent.scrollLeft += 1100;
  event.preventDefault();
});
leftBtn2.addEventListener("click", function (event) {
  const conent = document.querySelector(".product-slide-2");
  conent.scrollLeft -= 1100;
  event.preventDefault();
});

const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");

sidebtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  cross.classList.add("active");
  black.classList.add("active");
  document.body.classList.add("stop-scroll");
});
cross.addEventListener("click", () => {
  sidebar.classList.remove("active");
  cross.classList.remove("active");
  black.classList.remove("active");
  document.body.classList.remove("stop-scroll");
});

const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click", () => {
  black.classList.toggle("active-1");
  signin.classList.toggle("active");
  tri.classList.toggle("active");
  document.body.classList.toggle("stop-scroll");
});

/* =========================
   VOICE RECOGNITION AI
========================= */

const voiceBtn = document.getElementById("voice-btn");
const searchBox = document.getElementById("searchInput");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";

voiceBtn.addEventListener("click", () => {
  recognition.start();
});

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  searchBox.value = transcript;
};

/* =========================
   AI CHATBOT
========================= */

const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const chatBody = document.getElementById("chat-body");

sendBtn.addEventListener("click", sendMessage);

function sendMessage() {
  const userText = chatInput.value.trim();

  if (userText === "") return;

  const userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  userMessage.innerText = userText;

  chatBody.appendChild(userMessage);

  // AI Reply
  const botMessage = document.createElement("div");
  botMessage.classList.add("bot-message");

  botMessage.innerText = getBotResponse(userText);

  setTimeout(() => {
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);

  chatInput.value = "";
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello")) {
    return "Hello! Welcome to Amazon Clone 😊";
  } else if (input.includes("laptop")) {
    return "You can check laptops in the Electronics section.";
  } else if (input.includes("mobile")) {
    return "Latest smartphones are available in Mobiles section.";
  } else if (input.includes("return")) {
    return "Amazon offers easy returns within 7 days.";
  } else if (input.includes("prime")) {
    return "Amazon Prime gives fast delivery and OTT streaming.";
  } else {
    return "Sorry, I am still learning 🤖";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Search input
  const searchInput = document.getElementById("searchInput");

  // All product cards
  const productBoxes = document.querySelectorAll(".box");

  // Search when typing
  searchInput.addEventListener("keyup", function () {
    const value = this.value.trim().toLowerCase();

    productBoxes.forEach(function (box) {
      // Category title
      const title = box.querySelector("h3")
        ? box.querySelector("h3").textContent.toLowerCase()
        : "";

      // Product names
      let products = "";
      box.querySelectorAll("span").forEach(function (span) {
        products += span.textContent.toLowerCase() + " ";
      });

      // Complete searchable text
      const searchText = title + " " + products;

      if (searchText.includes(value) || value === "") {
        box.style.display = "";
      } else {
        box.style.display = "none";
      }
    });
  });
});

// let count = 0;

// const cartCount = document.getElementById("cartCount");

// document.querySelectorAll(".add-cart").forEach(button => {

//     button.addEventListener("click", function () {

//         count++;

//         cartCount.innerText = count;

//         this.innerText = "✔ Added";

//         this.style.background = "green";
//         this.style.color = "white";

//         setTimeout(() => {

//             this.innerText = "🛒 Add to Cart";
//             this.style.background = "#ffd814";
//             this.style.color = "black";

//         },1000);

//     });

// });

// ======================
// SHOPPING CART
// ======================

let count = 0;
let cart = [];

const cartDisplay = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartIcon = document.getElementById("cartIcon");
const cartPanel = document.getElementById("cartPanel");

// Open/Close Cart
cartIcon.addEventListener("click", () => {
  cartPanel.classList.toggle("show");
});

// Add products to cart
document.querySelectorAll(".add-cart").forEach((button) => {
  button.addEventListener("click", function () {
    const box = this.closest(".box");

    const productName = box.querySelector("h3").innerText;

    const productImage = box.querySelector("img").src;

    cart.push({
      name: productName,
      image: productImage,
    });

    count++;
    cartDisplay.innerText = count;

    updateCart();

    this.innerHTML = "✔ Added";
    this.style.background = "green";
    this.style.color = "white";

    setTimeout(() => {
      this.innerHTML = "🛒 Add to Cart";
      this.style.background = "#FFD814";
      this.style.color = "black";
    }, 1000);
  });
});

function updateCart() {
  cartItems.innerHTML = "";

  cart.forEach((product) => {
    cartItems.innerHTML += `
      <div class="cart-item">
          <img src="${product.image}" alt="${product.name}">
          <span>${product.name}</span>
      </div>
    `;
  });
}