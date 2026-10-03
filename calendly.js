/* Root & Rise: "Let's Build Your Team" buttons open your Calendly scheduling page.
   1. Paste your Calendly link below (already set to your link).
   2. That's the only place you need to change it. Every button marked data-calendly uses it.
   Until a real link is set, the buttons fall back to the Contact page. */
var CALENDLY_URL = "https://calendly.com/rootnrise2026/30min";

document.addEventListener("DOMContentLoaded", function () {
  if (!CALENDLY_URL || CALENDLY_URL.indexOf("your-link") !== -1) return;
  var buttons = document.querySelectorAll("[data-calendly]");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("href", CALENDLY_URL);
    buttons[i].setAttribute("target", "_blank");
    buttons[i].setAttribute("rel", "noopener");
  }
});