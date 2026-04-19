import bcrypt from "bcrypt"
import promptModule from "prompt-sync"

const prompt = promptModule()
const mockDB = { password: {} }


const saveNewPassword = (password, rounds) => {
    const hash = bcrypt.hashSync(password, rounds)

    mockDB.auth = {
        type: auth,
        hash: hash,
        saltRounds: rounds
    }
    console.log('senha salva com sucesso!');

}

const compareHashedPassword = async (password) => {
    return await bcrypt.compare(password, mockDB.hash);
}

const promptNewPassword = () => {
    const password = prompt("Digite a sua nova senha: ")

    const rounds = Number(
        prompt("digite quantidade de rounds: ")
    );

    return saveNewPassword(password, rounds)
}


const promptOldPassword = async () => {
    let verified = false;
    while (!verified) {
        const response = prompt("Digite sua senha: ")
        const result = await compareHashedPassword(response);
        if (result) {
            console.log('password verified');
            verified = true
            showMenu()
        } else {
            console.log('password incorrect. try again');
        }
    }
}


const showMenu = () => {
    console.log(`
            1. view password
            2. manege new password
            3. verify password
            4. create master password
        `);

    const response = prompt(">")

    switch (response) {

        case "1":
            viewPassword()
            break;

        case "2":
            promptManagePassword()
            break;

        case "3":
            promptOldPassword()
            break;

        case "4":
            promptNewPassword()
            break;

        default:
            showMenu()
            break;
    }
}


const viewPassword = () => {
    const { password } = mockDB;

    Object.entries(password).forEach(([key, value], index) => {
        console.log(`${index + 1}. ${key}=> ${value}`);
    })
}


const promptManagePassword = () => {
    const source = prompt("Enter name for password: ")
    const password = prompt("enter password to save: ")

    mockDB.password[source] = password

    console.log(`password for ${source} has been saved! `);

    showMenu()
}


showMenu()