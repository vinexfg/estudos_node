import bcrypt from "bcrypt"
import promptModule from "prompt-sync"
import { MongoClient } from "mongodb"
import readline from "readline"
import { stdin, stdout } from "process"
import { promisify } from "util"
import { url } from "inspector"


const dbUrl = 'mongodb://localhost:27017'
const client = new MongoClient(dbUrl)
const prompt = promptModule()

let hasPasswords = false
let passwordCollection, authCollection
const dbName = "passwordManeger"


const main = async () => {
    try {
        await client.connect()
        console.log('connect sucessfully to server');
        const db = client.db(dbName)
        authCollection = db.collection("auth")
        passwordCollection = db.collection("password")
        const hashedPassword = await authCollection.findOne({ type: "auth" })
        hasPasswords = !!hashedPassword

    } catch (err) {
        console.error("Error connect to the datebase:", err);
        process.exit(1)
    }
}

await main()
if (!hasPasswords) await promptNewPassword()
else await promptPassword()

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

const readlineAsync = promisify(rl.question).bind(rl)


const saltRounds = async () => {
    const ronds = await readlineAsync("digite o numero de rodadas: ")
    return ronds
}




const saveNewPassword = async (password) => {
    const hash = await bcrypt.hash(password, saltRounds)
    await authCollection.updateOne(
        { type: "auth" },
        { $set: { type: "auth", hash } },
        { upsert: true }
    )
    hasPasswords = true
    console.log('senha salva')
}

const compareHashPassword = async (password) => {
    const authData = await authCollection.findOne({ type: "auth" })
    if (!authData?.hash) {
        return false
    }

    return bcrypt.compare(password, authData.hash)
}

const promptNewPassword = async () => {
    const response = prompt('digite uma senha: ')
    await saveNewPassword(response)
    await showMenu()
}


const promptPassword = async () => {
    let verifield = false
    while (!verifield) {
        const response = prompt('digite sua senha: ')
        const result = await compareHashPassword(response)
        if (result) {
            console.log('password verifield');
            verifield = true
            await showMenu()
        } else {
            console.log('senha incorreta');

        }
    }
}


const showMenu = async () => {
    console.log(`
        1. view password
        2. Manege new password
        3. verify password
        4. Exit
        `);

    const response = prompt(">")
    switch (response) {
        case "1":
            await viewPassword();
            break;
        case "2":
            await promptManegeNewPassword()
            break;
        case "3":
            await promptNewPassword()
            break
        case "4":
            await client.close()
            process.exit(0)
        default:
            console.log('this is an invalid response');
            await showMenu()

    }

};



const viewPassword = async () => {
    const passwords = await passwordCollection.find({}).toArray()

    if (passwords.length === 0) {
        console.log('nenhuma senha cadastrada')
    }

    passwords.forEach(({ source, password }, index) => {
        console.log(`${index + 1}, ${source} => ${password}`)
    })

    await showMenu()

}


const promptManegeNewPassword = async () => {
    const source = prompt("enter new password: ")
    const password = prompt("enter password to save: ")
    await passwordCollection.findOneAndUpdate(
        { source },
        {
            $set: { password }
        },
        {
            returnDocument: "after",
            upsert: true
        }
    )
    console.log(`password for ${source} has ben saved  `);
    await showMenu()
};





