const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalOk = document.getElementById("modalOk");

async function registerInterest() {
  try {
    // The server records one interest click, then intentionally returns
    // an error because there is no real checkout in this prototype.
    await fetch("/api/buy-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    // Even if the server is unavailable, the user still sees the demo message.
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

document.querySelectorAll("#buyButton, #buyButton2").forEach(button => {
  button.addEventListener("click", registerInterest);
});

function close() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

closeModal.addEventListener("click", close);
modalOk.addEventListener("click", close);

modal.addEventListener("click", (event) => {
  if (event.target === modal) close();
});
