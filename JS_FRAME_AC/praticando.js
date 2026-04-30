const book = {
    title: "frankstein",
    category: "terror",
    author: {
        name: 'vinicius_pai',
        contato: "99842",
    },
}


function deepFreeze(object){
    const props = Reflect.ownKeys(object)
    for(const prop  of props){
        const value  = Object[prop]

        if(value && typeof value === 'object' || typeof value === 'function'){
            deepFreeze(value)
        }
        
    }

    return Object.freeze(object)
}

deepFreeze(book)