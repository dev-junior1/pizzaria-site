window.onload = function() {
  // Mostrar o pop-up após 1 segundo
  setTimeout(() => {
    document.getElementById("popup").style.display = "flex";
  }, 1000);
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}
