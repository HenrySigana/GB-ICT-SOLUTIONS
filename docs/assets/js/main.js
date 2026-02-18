(function(){
const path = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("[data-nav]").forEach(a=>{
const href = a.getAttribute("href");
if(href === path) a.classList.add("active");
});

const year = new Date().getFullYear();
const y = document.querySelector("[data-year]");
if(y) y.textContent = year;

// Live chat widget toggle
const chatToggle = document.getElementById("chat-toggle");
const chatBox = document.getElementById("chat-box");
const chatWidget = document.getElementById("chat-widget");
if(chatToggle && chatBox && chatWidget){
chatToggle.addEventListener("click", (e)=>{
e.stopPropagation();
const open = chatBox.classList.toggle("open");
chatToggle.setAttribute("aria-expanded", open);
});
document.addEventListener("click", (e)=>{
if(chatBox.classList.contains("open") && !chatWidget.contains(e.target)){
chatBox.classList.remove("open");
chatToggle.setAttribute("aria-expanded", "false");
}
});
}
// Live chat tabs
document.querySelectorAll("[data-chat-tab]").forEach(btn=>{
btn.addEventListener("click", ()=>{
const id = btn.getAttribute("data-chat-tab");
document.querySelectorAll(".chat-tabs button").forEach(b=>{ b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
document.querySelectorAll(".chat-panel").forEach(p=> p.classList.remove("active"));
btn.classList.add("active");
btn.setAttribute("aria-selected", "true");
const panel = document.getElementById("chat-panel-" + id);
if(panel) panel.classList.add("active");
});
});
// Live chat form (mailto)
const chatForm = document.querySelector("form[data-chat-mailto]");
if(chatForm){
chatForm.addEventListener("submit", (e)=>{
e.preventDefault();
const name = chatForm.querySelector("[name=name]").value.trim();
const email = chatForm.querySelector("[name=email]").value.trim();
const message = chatForm.querySelector("[name=message]").value.trim();
const subject = encodeURIComponent("GB ICT Solutions – Live chat message");
const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message + "\n\n---\nSent via website live chat");
window.location.href = "mailto:info@gbictsolutions.co.ke?subject=" + subject + "&body=" + body;
});
}

// Simple "mailto" handler for the contact form (static hosting)
const form = document.querySelector("form[data-mailto]");
if(form){
form.addEventListener("submit", (e)=>{
e.preventDefault();
const name = form.querySelector("[name=name]").value.trim();
const email = form.querySelector("[name=email]").value.trim();
const service = form.querySelector("[name=service]").value.trim();
const message = form.querySelector("[name=message]").value.trim();

const subject = encodeURIComponent(`GB ICT Solutions Inquiry - ${service || "General"}`);
const body = encodeURIComponent(
`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}\n\n---\nSent from GB ICT WebPro (GitHub Pages)`
);
window.location.href = `mailto:info@gbictsolutions.co.ke?subject=${subject}&body=${body}`;
});
}
})();

