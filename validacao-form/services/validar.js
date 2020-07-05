//esse arquivo trata apenas da validação//
import { validarDataNascimento } from "./validarDataNascimento";


  export const validarInput = (input) => {
      const tipo = input.dataset.tipo;
      const validadoresEspecificos = {
        dataNascimento: input => validarDataNascimento(input)
      };

      if (validadoresEspecificos[tipo]) {
        validadoresEspecificos[tipo](input);
        //verifica se dentro do objeto validadoresEspecificos ocorre o tipo dataNascimento, se sim, executa a função
      }

  };
