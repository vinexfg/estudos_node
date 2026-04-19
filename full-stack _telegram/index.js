


// let obj = []



// try {
//     if (!obj.includes(17)) {
//         throw new Error("o numero 17 nao se encontra no obj")
//     }
// } catch (err) {
//     if (err instanceof TypeError) {
//         console.log('metodo indiponivel');

//     }
// }



// let obj = []


// try {
//     if (!obj.includes(17)) {
//         throw new Error(' o numero 17 nao esta disponivel')
//     }
// } catch (err) {
//     if (err instanceof TypeError) {
//         console.log("erro ao executar a funcao");

//     }
//     console.error(err);

// }





class MyCustomError {
    constructor(message) {
        this.message = "CLASSE DE ERRO CUSTOMIZADDA:" + message
    }
}



try {
    throw new MyCustomError("erro personalizado")
} catch (err) {
    if (err instanceof MyCustomError) {
        console.log(err.message);

    } else {
        console.log('nao foi possivel executar! ');

    }
}