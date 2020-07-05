//esse código é uma validação para saber se o usuário é maior de 18 anos//
export const validarDataNascimento = input => {
    const dataNascimento = new Date(input.value);
    const dataAtual = new Date();
    //A constante recebe o valor que o usuário digitar//
    //O input.value que permite acessar o que o usuário digita, no entanto, a formatação é do HTML, sendo dessa forma necessario colocar um parametro do js, ou seja, o new date//
    //A data atual será importante para comparar com a data de aniversário recebida e ver se existe uma diferença maior de 18 anos//

    const dataFaz18 = new Date(
      dataNascimento.getUTCFullYear() + 18,
        //getUTCFullYear trás o ano que o usuario digitar e adiciona 18//
      dataNascimento.getUTCMonth(), //pega o mês//
      dataNascimento.getUTCDate() //pega o dia//
    );

    if (dataFaz18 > dataAtual) {
      input.setCustomValidity("A idade mínima é de 18 anos");
      return;
      //o método faz com que o input seja invalido se a idade for menor de 18
    }

    input.setCustomValidity("");
    return;
};
