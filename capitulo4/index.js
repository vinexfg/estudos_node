import bcrypt from "bcrypt"
import { log } from "node:console"
import promptMOdule from "prompt-sync"





const prompt = promptMOdule()

const mckDB = { password: {} }


const saveNewPassword = (password) => {
    mckDB.hash = bcrypt.hashSync(password, 10)
    console.log('senha salva'); s
}

const compareHashPassword = async (password) => {
    await bcrypt.compare(password, mckDB.hash)
}

const promptNewPassword = async () => {
    const response = ('digite uma senha: ')
    return saveNewPassword(response)
}


const promptPassword = async () => {
    let verifield = false
    while (!verifield) {
        const response = ('digite sua senha: ')
        const result = await compareHashPassword(response)
        if (result) {
            console.log('password verifield');
            verifield = true
            showMenu()
        } else {
            console.log('senha incorreta');

        }
    }
}