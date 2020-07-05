//arquivo generico escalavel para todos os forms//
import { validarInput } from "./validar.js";
window.onload = () => {
  const inputs = document.querySelectorAll("input");

  inputs.forEach(input => {
    input.addEventListener("input", () => {
      validarInput(input);
    });

  });

};
