//arquivo generico escalavel para todos os forms//
import { validarInput } from "./validar.js";
window.onload = () => {
  const inputs = document.querySelectorAll("input");

  inputs.forEach(input => {
    input.addEventListener("input", () => {
      validarInput(input, false);
      //esse false é relativo a mensagem de erro que ocorre nos campos (tratado em validar.js) fazendo com que só ocorra caso o usuario esteja clicando fora do campo//
    });

    input.addEventListener('blur', () => {
      validarInput(input);
    })
  });

};
