//esse arquivo trata apenas da validação//
import { validarDataNascimento } from "./validarDataNascimento";


  export const validarInput = (input, adicionarErro = true) => {
      const classeElementoErro = "erro-validacao";
      const classeInputErro = "possui-erro-validacao";
      const elementoPai = input.parentNode;
      //parentNode é um método do js onde eu acesso o elemento pai//
      const elementoErroExiste = elementoPai.querySelector(
        '.${classeElementoErro}'
      )
      const elementoErro = elementoErroExiste || document.createElement("div");
      //o createElement cria o elemento caso ele não exista e atribui ao elementoErro//
      const elementoEhValido = input.validity.valid;
      //é um valor boleeam que retorna true ou false, por isso precisa ser tratado com um if//
      const tipo = input.dataset.tipo;
      const validadoresEspecificos = {
        dataNascimento: input => validarDataNascimento(input)
      };

      if (validadoresEspecificos[tipo]) {
        validadoresEspecificos[tipo](input);
        //verifica se dentro do objeto validadoresEspecificos ocorre o tipo dataNascimento, se sim, executa a função
      }

      if (!elementoEhValido) {
        // não é valido//
        elementoErro.className = classeElementoErro;
        input.classList.add(classeInputErro);
        //adiciona as classes//
        elementoErro.textContent = "Há um erro aqui";
        input.after(elementoErro);
        //adiciona uma mensagem de erro depois do campo//
        if(adicionarErro) {
          input.after(elementoErro);
          input.classList.add(classeInputErro);
        }
      } else {
        //é valido//
        elementoErro.remove();
        input.classList.remove(classeInputErro);
        //remove as classes e mensagens anteriormente colocadas caso o e-mail esteja correto//
      }

  };
