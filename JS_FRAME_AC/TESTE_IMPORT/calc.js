

// function mat(x,y){
//     const result = x * y
//     console.log(result);
// }

// export {mat as matematica}





function asyncFunction(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const isSucess = true

            if(isSucess){
                resolve("operacao concluida com sucesso")
            }
            return reject('algo deu errado')
        }, 3000)
    })
}


const fetch = async ()=>{
    const response = await asyncFunction()
    console.log(response);
    
}

// console.log('funcao asssicrona..');
// asyncFunction().then((response)=>{
//     console.log("sucesso:", response);
// }).catch((error)=>{
//     console.log("error:", error);
// }).finally(()=>{
//     console.log("fim da execucao");
    
// })
