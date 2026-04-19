import bcrypt from "bcrypt"
import promptModule from "prompt-sync"

const prompt = promptModule()

const mockDB = { password: {} }


const saveNewPassword = (password, rounds) => {

    const hash = bcrypt.hashSync(password, rounds)

    mockDB.auth = {
        type: "auth",
        hash: hash,
        saltRounds: rounds
    }

    console.log('senha salva com sucesso!')
}


const compareHashedPassword = async (password) => {

    if (!mockDB.auth) {
        console.log("Nenhuma senha mestre criada ainda")
        return false
    }

    const { hash, saltRounds } = mockDB.auth

    console.log(`Salt rounds utilizados: ${saltRounds}`)

    return await bcrypt.compare(password, hash)
}


const promptNewPassword = () => {

    const password = prompt("Digite a sua nova senha: ")

    const rounds = Number(
        prompt("digite quantidade de rounds: ")
    )

    return saveNewPassword(password, rounds)
}


const promptOldPassword = async () => {

    let verified = false

    while (!verified) {

        const response = prompt("Digite sua senha: ")

        const result = await compareHashedPassword(response)

        if (result) {

            console.log('password verified')

            verified = true

            showMenu()

        } else {

            console.log('password incorrect. try again')

        }

    }

}


const showMenu = () => {

    console.log(`
            1. view password
            2. manage new password
            3. verify password
            4. create master password
            5. find password by source
        `)

    const response = prompt(">")

    switch (response) {

        case "1":
            viewPassword()
            break

        case "2":
            promptManagePassword()
            break

        case "3":
            promptOldPassword()
            break

        case "4":
            promptNewPassword()
            break

        case "5":
            findPasswordBySource()
            break

        default:
            showMenu()
            break
    }

}


const findPasswordBySource = () => {

    const source = prompt("Enter source name to search: ")

    const result = mockDB.password[source]

    if (result) {

        console.log(`Source: ${source}`)
        console.log(`Username: ${result.userName}`)
        console.log(`Password: ${result.password}`)

    } else {

        console.log('no passwords saved for that source')

    }

    showMenu()

}


const viewPassword = () => {

    const { password } = mockDB

    Object.entries(password).forEach(([key, value], index) => {

        console.log(`${index + 1}. ${key} => ${value.password}`)

    })

}


const promptManagePassword = () => {

    const source = prompt("Enter name for password: ")

    const userName = prompt("enter username: ")

    const password = prompt("enter password to save: ")

    mockDB.password[source] = {
        userName: userName,
        password: password
    }

    console.log(`password for ${source} has been saved!`)

    showMenu()

}


showMenu()