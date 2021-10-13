let peso = 100;
if(peso > 100){
    console.log("Peso permitido")
} else {
console.log("Peso insuficiente")
}

let listaPecas = ["Amortecedor", "Pistão", "Bomba elétrica", "Bronzina", "Caixa de cambio", "Filtro e óleo", "Virabrequim", "Correia", "Ignição", "Embreagem"];
let quantidadePecas = listaPecas.length;
console.log(quantidadePecas);

if (listaPecas.length < 10) { 
    console.log("Possui espaço")
} else {
    console.log("Lista cheia")
}

let nomePeca = listaPecas[5]
if (nomePeca.length > 3) {

    console.log("A peça pode ser cadastrada.")
    
} else {
    
    console.log("O nome da peça não tem a quantidade mínima de caracteres para ser cadastrado.")
};