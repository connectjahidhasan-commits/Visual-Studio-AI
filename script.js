const chatBox = document.getElementById("chatBox");
const sendBtn = document.getElementById("sendBtn");
const promptInput = document.getElementById("prompt");

// Message Add Function
function addMessage(text, sender) {

    const message = document.createElement("div");
    message.className = "message " + sender;

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.innerHTML = sender === "user" ? "👤" : "🤖";

    const textDiv = document.createElement("div");
    textDiv.className = "text";
    textDiv.innerHTML = text;

    message.appendChild(avatar);
    message.appendChild(textDiv);

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send Message
sendBtn.addEventListener("click", sendMessage);

promptInput.addEventListener("keypress", function(e){

    if(e.key==="Enter" && !e.shiftKey){

        e.preventDefault();

        sendMessage();

    }

});

function sendMessage(){

    const text = promptInput.value.trim();

    if(text==="") return;

    addMessage(text,"user");

    promptInput.value="";

    // Fake AI Reply
    setTimeout(()=>{

        addMessage("আমি এখনো Gemini AI-এর সাথে সংযুক্ত হইনি। পরবর্তী ধাপে API যোগ করলে আমি আসল AI-এর মতো উত্তর দেব।","bot");

    },800);

}
