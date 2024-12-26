const messages = document.getElementById("messages") as HTMLDivElement;
const input = document.getElementById("message-input") as HTMLInputElement;
const sendButton = document.getElementById("send-button") as HTMLButtonElement;

sendButton.addEventListener("click", () => {
    const text = input.value.trim();
    if (text) {
        const message = document.createElement("div");
        message.textContent = text;
        messages.appendChild(message);
        input.value = "";
        messages.scrollTop = messages.scrollHeight;
    }
});
