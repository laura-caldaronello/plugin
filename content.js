console.log("ciao da content.js");
document.addEventListener("click", function (element) {
  const id = "add-to-cart-button";
  const condition = element.target.id === id;
  if (condition) {
    alert("aggiunto al carrello");
  }
});
