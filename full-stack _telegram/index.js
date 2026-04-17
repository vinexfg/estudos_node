






// console.log(new Date().getTime());
// console.log(new Date(0));

// console.log(new Date(2026, 6, 3, 14, 30, 12));



let date = new Date("2024-07-02T14:30:00")

// console.log(date.getDate().toString().padStart(2, "0"));




// console.log(date.getDate().toString().padStart(2, "0"));

let month = (date.getMonth() + 1).toString().padStart(2, "0")

let day = date.getDay().toString().padStart(2, "0")

let day2 = date.getDay().toString().padStart('2', "0")
let years = date.getFullYear().toString().padStart('4', "0")
let year = date.getFullYear()
let hour = date.getHours()
let minute = date.getMinutes()


// console.log(`${day}/ ${month}/ ${minute} às ${hour}:${minute}seg`)

console.log(years);
