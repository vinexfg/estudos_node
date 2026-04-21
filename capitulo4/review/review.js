import bcrypt from "bcrypt"



const mockDB = { password: {} }




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
            break
        case "2":
            await promptMangeNewPasssword()
            break
        case "3":
            await verifyPassword()
            break
        case "4":
            process.exit()
        default:
            console.log('this is invalid response');
            await showMenu()
    }

}


const promptPassword = async () => {
    let verifield = false

    while (!verifield) {
        const response = prompt('digite sua senha: ')
        const result = await compareHashPassword(response)
        if (result) {
            console.log("password verifield");
            verifield = true

        }
    }
}