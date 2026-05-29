const leftBtn= document.querySelector(".l-btn");
const rightBtn = document.querySelector(".r-btn");

rightBtn.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
leftBtn.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide");
        conent.scrollLeft -=1100;
        event.preventDefault();

})
const leftBtn1= document.querySelector(".btn-1b");
const rightBtn1 = document.querySelector(".btn-1a");


rightBtn1.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-1");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
leftBtn1.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-1");
        conent.scrollLeft -=1100;
        event.preventDefault();

})
const leftBtn2= document.querySelector(".btn-1c");
const rightBtn2 = document.querySelector(".btn-1d");


rightBtn2.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-2");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
leftBtn2.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-2");
        conent.scrollLeft -=1100;
        event.preventDefault();

})

const backtop = document.querySelector(".backtop");

backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

const sidebar=document.querySelector(".sidebar");
const cross=document.querySelector(".fa-xmark");
const black=document.querySelector(".black");
const sidebtn=document.querySelector(".second-1");

sidebtn.addEventListener("click",()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
})
cross.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll");
})

const sign=document.querySelector(".ac");
const tri=document.querySelector(".triangle");
const signin=document.querySelector(".hdn-sign");

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
})

/* =========================
   VOICE RECOGNITION AI
========================= */

const voiceBtn = document.getElementById("voice-btn");
const searchBox = document.getElementById("search-box");

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
  }

  else if (input.includes("laptop")) {
    return "You can check laptops in the Electronics section.";
  }

  else if (input.includes("mobile")) {
    return "Latest smartphones are available in Mobiles section.";
  }

  else if (input.includes("return")) {
    return "Amazon offers easy returns within 7 days.";
  }

  else if (input.includes("prime")) {
    return "Amazon Prime gives fast delivery and OTT streaming.";
  }

  else {
    return "Sorry, I am still learning 🤖";
  }
}