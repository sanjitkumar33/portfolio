document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "Thank you! Your message has been sent.";
  this.reset();
});
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = this.querySelector('input[placeholder="Your Name"]').value;
  const email = this.querySelector('input[placeholder="Your Email"]').value;
  const message = this.querySelector('textarea').value;

  const response = await fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  });

  const result = await response.json();
  document.getElementById("formMsg").textContent = result.message || "Error sending message.";
  this.reset();
});

