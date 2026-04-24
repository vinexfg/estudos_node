




const words = ['JavaScript, "html', "css, 'Web"]




const result = words.filter((word) => word.length > 3)
console.log(result);



const products = [
    {
        description: "teclado", price: 100, promotion = true
    },
    {
        description: "mouse", price: 70, promotion = false
    },
    {
        description: "Monitor", price: 900, promotion = true
    }
]


const promotion = products.filter((product) => product === true)


console.log(promotion); 



const numbers = []