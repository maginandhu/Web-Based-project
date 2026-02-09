const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const label = button.textContent.trim();
    alert(`${label} clicked! Our travel experts will reach out soon.`);
  });
});
