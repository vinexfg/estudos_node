// const book = {
//     title: "frankstein",
//     category: "terror",
//     author: {
//         name: 'vinicius_pai',
//         contato: "99842",
//     },
// }


// function deepFreeze(object){
//     const props = Reflect.ownKeys(object)
//     for(const prop  of props){
//         const value  = Object[prop]

//         if(value && typeof value === 'object' || typeof value === 'function'){
//             deepFreeze(value)
//         }
        
//     }

//     return Object.freeze(object)
// }

// deepFreeze(book)



/// primeiro imediatamente
// console.log(1);
// // executa antes das promessas 
// queueMicrotask(()=>{
//     console.log(2)
// })


// setTimeout(()=>{
//     console.log(3);
    
// }, 1000)
// /// segundo  imediatamente
// console.log(4);

// Promise.resolve(true).then(()=>{
//     console.log(5);
// })


