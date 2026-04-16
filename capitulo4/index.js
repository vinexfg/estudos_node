import bcrypt from "bcrypt"
import promptModule from "prompt-sync"
import { MongoClient } from "mongodb"



const dbUrl = 'mongodb://localhost:27017'
const client = new MongoClient(dbUrl)
const prompt = promptModule()

let hasPasswords = false
let passwordsCollection, authCollection
const dbName = "passwordManeger"


const main = async () => {
    try {
        await client.connect()
        console.log('connect sucessfully to server');
        const db = client.db(dbName)
        authCollection = db.collection("auth")
        passwordsCollection = db.collection("password")
        const hashedPassword = await authCollection.findOne({ type: "auth" })
        hasPasswords = !!hashedPassword

    } catch (err) {
        console.error("Error connect to the datebase:", err);
        process.exit(1)
    }
}

await main()
if (!hasPasswords) await promptNewPassword()
else await promptOldPassword()


const saveNewPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10)
    await authCollection.insertOne({ type: "auth", hash })
    hasPasswords = true
    console.log('Password has been saved!')
}

const compareHashedPassword = async (password) => {
    const authData = await authCollection.findOne({ type: "auth" })
    if (!authData?.hash) {
        return false
    }

    return bcrypt.compare(password, authData.hash)
}

const promptNewPassword = async () => {
    const response = prompt('Enter a new password: ')
    await saveNewPassword(response)
    await showMenu()
}


const promptOldPassword = async () => {
    let verifield = false
    while (!verifield) {
        const response = prompt('Enter password: ')
        const result = await compareHashedPassword(response)
        if (result) {
            console.log('Password verified!');
            verifield = true
            await showMenu()
        } else {
            console.log('Incorrect password.');

        }
    }
}


const showMenu = async () => {
    console.log(`
1. View passwords
2. Manage new password
3. Verify password
4. Exit`);

    const response = prompt(">")
    switch (response) {
        case "1":
            await viewPasswords();
            break;
        case "2":
            await promptManageNewPassword()
            break;
        case "3":
            await promptOldPassword()
            break
        case "4":
            process.exit()
        default:
            console.log("That's an invalid response.");
            await showMenu()

    }

};



const viewPasswords = async () => {
    const passwords = await passwordsCollection.find({}).toArray()

    passwords.forEach(({ source, password }, index) => {
        console.log(`${index + 1}. ${source} => ${password}`)
    })

    await showMenu()

}


const promptManageNewPassword = async () => {
    const source = prompt("Enter name for password: ")
    const password = prompt("Enter password to save: ")
    await passwordsCollection.findOneAndUpdate(
        { source },
        {
            $set: { password }
        },
        {
            returnDocument: "after",
            upsert: true
        }
    )
    console.log(`Password for ${source} has been saved!`);
    await showMenu()
};





