//1.Declare duas variáveis, a e b, e atribua valores numéricos a elas. Crie uma terceira variável, soma, e atribua a soma de a e b a ela. Imprima o resultado no console.
// Declare duas variáveis, a e b, e atribua valores numéricos a elas.
let a = 5;
let b = 7;

// Crie uma terceira variável, soma, e atribua a soma de a e b a ela.
let soma = a + b;

// Imprima o resultado no console.
console.log("A soma de a e b é:", soma);

//2.Crie uma função chamada verificaNumero que recebe um número como parâmetro e imprime "É par" se o número for par, e "É ímpar" se for ímpar. Teste a função com diferentes números.
// e imprime "É par" se o número for par,
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } 
    // e "É ímpar" se for ímpar.
    else {
        console.log(numero + " é ímpar");
    }


// Teste a função com diferentes números.
verificaNumero(10);
verificaNumero(7);
verificaNumero(0);
//3. Declare uma string e imprima seu comprimento no console. Converta a string para letras maiúsculas. Divida a string em palavras e imprima cada palavra no console.

// Declare uma string
let minhaString = "Olá, mundo!";

// e imprima seu comprimento no console.
console.log("Comprimento da string:", minhaString.length);

// Converta a string para letras maiúsculas.
let maiusculas = minhaString.toUpperCase();

// Imprima a string em letras maiúsculas no console.
console.log("String em maiúsculas:", maiusculas);

// Divida a string em palavras e imprima cada palavra no console.
let palavras = minhaString.split(" ");
console.log("Palavras na string:");
palavras.forEach(palavra => {
    console.log(palavra);
});
