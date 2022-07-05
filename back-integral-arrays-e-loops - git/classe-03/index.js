const numeros = [54, 22, 14, 87, 10, 284];

let numeroNaArray = 0

let existe = false

for(let numero of numeros){
    if(numero != 10){
        numeroNaArray++
    }else if (numero === 10){
    console.log(numeroNaArray)
    existe = true
}
}

if(!existe){
    console.log("-1")
}


