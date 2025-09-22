const pantalla = document.getElementById("pantalla");
if (pantalla) {
    console.log(pantalla.textContent);
    
    const botones = document.querySelectorAll("button");
    if (botones) {
        botones.forEach(boton => { 
            boton.addEventListener('click', () => {
                const valorBoton = boton.textContent.trim();
                 let operandoA: number = 0;
                 let operandoB: number = 0;
                 let operador: number = 0;
                 let resultado: number = 0;
                if (boton.id === 'c') {
                    pantalla.textContent = '0';
                    return;
                }
                if (boton.id === 'borrar') {
                     if (pantalla.textContent.length === 1 || pantalla.textContent === 'ERROR') {
                pantalla.textContent = '0';
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
                }
                
                if(boton.id)
               // const operaciones = ['suma', 'resta', 'multiplicar', 'dividir'];
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
                        if(operandoB === 0){
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

async (operandoA:number, operandoB: number, operador: string) => {
    
}

function imprimeEnPantalla(opera:type) {
    
}