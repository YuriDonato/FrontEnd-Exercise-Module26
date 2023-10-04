"use strict";
// Função que recebe dois numeros e retorna sua multiplicação
function multiplicaNumeros(num1, num2) {
    return num1 * num2;
}
// Alternativa em Arrow function
// const multiplicaNumeros = (num1: number, num2: number) => (num1 * num2);
// Função que recebe um nome e retorna uma saudação:
function dizOi(nome) {
    return `Olá ${nome}`;
}
console.log(multiplicaNumeros(4, 2));
console.log(dizOi("Yuri"));
