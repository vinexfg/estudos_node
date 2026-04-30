import { matematica  as matii} from "./calc.js";





const book = {
    title: "frankstein",
    category: "terror",
    author: {
        name: "vinicius",
        contato: "998431"
    }
}


function deepFreeze(object){
    const props = Reflect.ownKeys(object)
    for(const prop of props){
        const value = object[prop]
        if(value && typeof value === 'object'||  typeof value === 'function'){
            deepFreeze(value)
        }
    }
}

deepFreeze(book)