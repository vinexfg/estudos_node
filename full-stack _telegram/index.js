




let obj = []


try {
    if (!obj.includes(17)) {
        throw new Error(' o numero 17 nao esta disponivel')
    }
} catch (err) {
    if (err instanceof TypeError) {
        console.log("erro ao executar a funcao");

    }
    console.error(err);

}