"use strict";
//import * as readline from 'readline-sync';
Object.defineProperty(exports, "__esModule", { value: true });
//function main() {
//console.log('=== Calculadora Básica en TypeScript ===');
//Solicitar al usuario que ingrese dos numeros
//const num1 = readline.questionFloat('Ingrese el primer número: ');
//const num2 = readline.questionFloat('Ingrese el segundo número: ');
//Mostrar menu de operaciones
//const operaciones = ['Sumar', 'Restar', 'Multiplicar', 'Dividir'];
// //const indice = readline.keyInSelect(operaciones, 'Seleccione una operación');
/*if (indice === -1) {
    console.log('Operación cancelada. ');
    return;
}

let resultado: number = 0;
switch (indice) {
    case 0:
        resultado = num1 + num2;
        break;
    case 1:
        resultado = num1 - num2;
        break;
    case 2:
        resultado = num1 * num2;
        break;
    case 3:
        if(num2 === 0){
            console.log('Error: División por cero.');
            return;
        }
        resultado = num1 / num2;
        break;

    default:
        console.log('Operación no válida.');
        break;
}*/
//console.log(`El resultado es: ${resultado}`);
//preguntar si desea realizar otra opearaion
//const continuar = readline.keyInYN('¿Desea realizar otra operación?');
/*if(continuar){
    main();//llamada recursiva para reiniciar el proceso
}else {
    console.log('Gracias por usar la calculadora.');
}*/
//}
//main();
//ejecutar la funcion principa
/*
import express from 'express';
import cors from 'cors';

const app = express();

let resultado: number = 0;
    switch (indice) {
        case 0:
            resultado = num1 + num2;
            break;
        case 1:
            resultado = num1 - num2;
            break;
        case 2:
            resultado = num1 * num2;
            break;
        case 3:
            if(num2 === 0){
                console.log('Error: División por cero.');
                return;
            }
            resultado = num1 / num2;
            break;
    
        default:
            console.log('Operación no válida.');
            break;
    }*/
//console.log(`El resultado es: ${resultado}`);
/*
app.post('/calcular', async (req, res) => {
const { num1, num2, operacion } = req.body;

// Validaciones...

let resultado: number;

switch (operacion) {
case 'suma':
  resultado = num1 + num2;
  break;
// resto de casos...
}

// Respondemos con JSON
res.json({ resultado });
});

const operaciones = new Map<number, string> ([
                [0, 'suma'],
                [1, 'resta'],
                [2, 'multiplicar'],
                [3, 'dividir']

            ]);
            for(const [key, value] of operaciones){
                if(boton.id === value){
                    operador = key;

                }
            }*/
window.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('button');
    const pantalla = document.getElementById('pantalla');
    if (pantalla !== null) {
        botones.forEach(boton => {
            boton.addEventListener('click', () => {
                console.log(boton.id);
                const valor = boton.textContent.trim();
                pantalla.textContent += valor;
            });
        });
    }
});
//# sourceMappingURL=index.js.map