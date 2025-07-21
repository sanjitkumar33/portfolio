document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "Thank you! Your message has been sent.";
  this.reset();
});
// form submission part in html

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const res = await fetch("http://localhost:9955/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await res.json();
    document.getElementById("formMsg").textContent = result.message;
    this.reset();
  } catch (error) {
    document.getElementById("formMsg").textContent = "Failed to send message.";
  }
});




