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
//ejecutar la funcion principal
const pantalla = document.getElementById("pantalla");
if (pantalla) {
    console.log(pantalla.textContent);
    const botones = document.querySelectorAll("button");
    if (botones) {
        botones.forEach(boton => {
            boton.addEventListener('click', () => {
                const valorBoton = boton.textContent.trim();
                let operandoA = 0;
                let operandoB = 0;
                let operador = 0;
                let resultado = 0;
                if (boton.id === 'c') {
                    pantalla.textContent = '0';
                    return;
                }
                if (boton.id === 'borrar') {
                    if (pantalla.textContent.length === 1 || pantalla.textContent === 'ERROR') {
                        pantalla.textContent = '0';
                    }
                    else {
                        pantalla.textContent = pantalla.textContent.slice(0, -1);
                    }
                    return;
                }
                // const operaciones = ['suma', 'resta', 'multiplicar', 'dividir'];
                const operaciones = new Map([
                    [0, 'suma'],
                    [1, 'resta'],
                    [2, 'multiplicar'],
                    [3, 'dividir']
                ]);
                for (const [key, value] of operaciones) {
                    if (boton.id === value) {
                        operador = key;
                    }
                }
                switch (operador) {
                    case 0:
                        resultado = operandoA + operandoB;
                        break;
                    case 1:
                        resultado = operandoA - operandoB;
                        break;
                    case 2:
                        resultado = operandoA * operandoB;
                        break;
                    case 3:
                        if (operandoB === 0) {
                            console.log('Error: División por cero.');
                            return;
                        }
                        resultado = operandoA / operandoB;
                        break;
                    default:
                        console.log('Operación no válida.');
                        break;
                }
            });
        });
    }
}
//# sourceMappingURL=index.js.map