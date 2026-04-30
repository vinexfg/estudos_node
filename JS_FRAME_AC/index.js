




// // const words = ["JavaScript", "html", "css", "Web"]




// // const result = words.filter((word)=> word.length > 3)
// // console.log(result);


// // const products = [
// //     {
// //         description: "teclado", price: 100, promotion: true
// //     },
// //     {
// //         description: "mouse", price: 70, promotion: false
// //     },
// //     {
// //         description: "Monitor", price: 900, promotion: true
// //     }
// // ]

// // const promotion = products.filter((product)=> product.promotion === true)

// // console.log(promotion);




// // const values = [4,6,8, 12]


// // const values = [4, 6, 8, 12];
// // console.log(values.findIndex((value)=> values > 4));

// // console.log(values.findIndex((value) => value > 4));


// // console.log(values.findIndex((value)=>  value > 4 ));




// // const pessoas = [
// //   { id: 1, nome: "Ana", idade: 22 },
// //   { id: 2, nome: "Carlos", idade: 17 },
// //   { id: 3, nome: "Marina", idade: 30 },
// //   { id: 4, nome: "João", idade: 15 }
// // ];


// // const idadeMaior = pessoas.find((value)=> value.idade > 18)

// // const resultado = ()=>{
// //     if(idadeMaior){
// //         console.log(`vc esta qualificado ${pessoas.value}`);
// //     }
// // }


// // resultado()



// // const nums = [1, 2, 3, 4];

// // const resultado = nums.map((number)=> number * 2 ) 
// // console.log(resultado);




// // const users = [
// //   { nome: "Ana" },
// //   { nome: "João" },
// //   { nome: "Maria" }
// // ];


// // const nomes = users.map((name => name.nome))
// // console.log(nomes);



// // const nums = [1, 2, 3, 4, 5, 6];


// // const pares = nums.filter((num)=> num % 2 === 0)
// // console.log(pares);
// // const nums = [5, 12, 8, 20];


// // const maiores = nums.filter((num)=> num > 10)

// // console.log(maiores);



// // const nums = [3, 7, 15, 20];


// // const maior = nums.find((num)=> num > 10)
// // console.log(maior);



// // const users = [
// //   { id: 1, nome: "Ana" },
// //   { id: 2, nome: "João" }
// // ];


// // const user = users.find((usuario)=> usuario.id === 2)


// // console.log(user);



// // const nums = [10, 20, 30];


// // const resultado = nums.findIndex((num)=> num === 20 )
// // console.log(resultado);



// // const ages = [15,30,39, 29]


// // vericican se todas as idades soa maiores de 18

// // every 'e se todos os intens atendem a codicao
// // const result  = ages.every((age)=> age>= 18 )



// // const ages = [15,30,39, 29]


// // const result = ages.some((age)=> age < 18)
// // console.log(result);


// // const values = [1,2,3,4,5]


// // const sume = values.reduce((acumulator, currentValue)=>{
// //     console.log(`Acumulator ${acumulator}`);
// //     console.log(`currentValue ${currentValue}`);

// //     return acumulator + currentValue
    
    
// // }, 0)

// // console.log(sume);



// // const numeros = [1, 2, 3, 4, 5];

// // const result =  numeros.filter( num => num % 2 === 0)

// // console.log(result);


// // const nomes = ["ana","bruno"];

// // const result = nomes.map((n)=> n.toUpperCase())
// // console.log(result);



// // const nums = [1,2,3];


// // const result  = nums.map((n, i)=> i)

// // console.log( result);
// // const nomes = ["ana","joão"];

// // const result  = nomes.map((n)=> n.length)

// // console.log(result);



// // const address1 = {
// //     street: "av. brasil",
// //     number: 20
// // }

// // // isto é uma referencia 
// // const address2 = {...address1, number = 30}

// // address2.number = 30


// // console.log(address1);
// // console.log(address2);



// const htmlCourse = {
//     course: "HTML",
//     students: [{name: "vinicius", email: "viniciussilva@gmail.com"}]
// }


// //Deep Copy (copia profunda)


// const jsCouser = {
//     ...htmlCourse,
//     couser: "Javascript",
//     students: [
//         ...htmlCourse.students,
        
//     ],
// }


// jsCouser.students.push({name: 'vini', email: 'viniciusqq@gmail.com'})


// console.log(htmlCourse);
// console.log(jsCouser);




// // const jsCouser =  {
// //     ...htmlCourse,
// //     course: "Javascript"
// // }
// // // vai modificar o htmlCOuse tambem pq é uma referencia e nao uma copia


// // // deep copy (copia profunda)

// // jsCouser.students.push({name: "vini", email: 'vin@gmail.com'})


// // console.log(htmlCourse, jsCouser);




// const book = {
//     title: "objetos imutaveis",
//     category: "javascript",
//     author: {
//         name: 'vinicius',
//         email: 'viniciusalmeida@gmail.com'
//     },
// }


// // mao funciona para objetos alinhados
// Object.freeze(book)


// book.author.name = 'vini'




// function deepFreeze(Object){
//     //obtem um array com todosas as propriedades do objeto
//     const props = Reflect.ownKeys(Object)
//     // intera sobre todas as propriedades do objetos
//     for(const prop of props){
//         //obtem o valor asssociado a propriedade atual.
//         const value = Object[prop]
//         // verifica se o valor é um objeto ou funcao para continuar aplicando o deepfreeze em objetos
//         //alinhados
//         if(value && typeof value === "object" ||  typeof value === "fuction" ){
//             deepFreeze(value)
//         }        
//     }

//     return Object.freeze(object)
// }


// /// chama oa funcao apra conglear o bjeto  com dee freeze (congelamento profundo)
// deepFreeze(book)


// const book = {
//     title: "objetos imutaveis",
//     category: "javascript",
//     author: {
//         name: 'vinicius',
//         email: 'viniciusalmeida@gmail.com'
//     },
// }


// const updatedBook = {
//     ...book,
//     title: "Criando um Front-end moderno com HTML",
//     category: "html",
//     type: "programming",
// }


// // object intacto
// console.log(book)


// // Modified;

// console.log(updatedBook);


// // Utilizando operador de desesturturcao (rest operator) para remover propriedades
// // no primeiro caso eue tira a categoria mas é estranho isso ai 
// const {category, ...bookWithoutCategory } = book

// console.log(bookWithoutCategory);



// setTimeout(()=>{
//     console.log('ola, tudo bem');
    
// }, 3000)



function asyncFunction(){
    return new Promise((resolve, reject)=>{
        //simula uma operacao assicrona
        setTimeout(()=>{
        const isSucess = true

        if(isSucess){
            resolve("a operacao foi comconclida com sucesso !")
        }else{
            reject("algo deu errado")
        }
        }, 3000) // simluma uma operacoa que leva 3 segundo
    })
}

console.log('funcao aassicrona..')
asyncFunction().then((response)=>{
    console.log("sucesso:", response );
}).catch((error)=>{
    console.log("error:", error);
    
}).finally(()=>{
    console.log('fim da execucao');
})
