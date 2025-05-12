// 1.
function mensagem() {
    console.log("Olá, bem-vindo(a)!");
    console.log("É um prazer tê-lo aqui.");
    console.log("Aproveite!");
}

mensagem();


// 2.
function somarNumeros(num1, num2) {
    let soma = num1 + num2;
    console.log(soma);
}

somarNumeros(12, 28);


// 3.
function boasVindas(nome, cargo) {
    console.log(`Seja bem-vindo(a) ${cargo} ${nome}!`);
}

boasVindas("João Pedro", "estudante");

// 4.
function somar(valor1, valor2) {
    return valor1 + valor2;
}

let resultado = somar(29, 32);

console.log(somar(12, 12));
console.log(resultado);


// 5.
function boasVindas(nome, cargo) {
    return `Seja bem-vindo(a) ${cargo} ${nome}!`;
}

let mensagem = boasVindas("Marcio", "professor");
console.log(mensagem);


// 6.
function parImpar(valor) {
    if (valor % 2 === 0) {
        return "par";
    }

    return "ímpar";
}

let verificacao = parImpar(16);
console.log(verificacao);
