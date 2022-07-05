const letras = ["A", "a", "B", "C", "E", "e"];

let numeroDeLetras = 0;
let encontrado = false;

for(let letra of letras){
    if(letra === "E" || letra === "e"){
        encontrado = true
        numeroDeLetras++    
    }
}


if(!encontrado){
    console.log(`Não foi encontrado nenhuma letra "E" ou "e"`)
}

if(numeroDeLetras > 1){
    console.log(`O número de letras "E" ou "e" encontrado é ${numeroDeLetras}`)
}