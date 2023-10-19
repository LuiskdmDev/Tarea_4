let lista = [0, ]

let ingreso = parseInt(prompt("Ingrese su n°: ")) 

while(true){
  if (!isNaN(ingreso)){
    break
  } else {
    console.log("No se ingresó una cifra válida.")
    alert("No pusiste una cifra válida")
    ingreso = parseInt(prompt("coloca nuevamente la cifra: "))
    
  }
}

if (ingreso === 0){
  console.log(`La secuencia de fibonacci es 0 con un total de 1 n° que comprenden la secuencia`)
  alert(`Tu secuencia de fibonacci es: 0`)
} else if (ingreso > 0){
  acumulador = 1
  let a = 0;
  let b = 1;
    while(acumulador < ingreso){
    let temp = a;
    a = b; 
    b = temp + b;
    lista.push(a)  
    acumulador ++;
  };
  console.log(`La secuencia de fibonacci es ${lista} con un total de ${ingreso} n° que comprenden la secuencia`)
  alert(`Tu secuencia de fibonacci es: ${lista}`)

} else {
  console.log("Ponga una cifra válida.")
}