//Itens
const crypto = require("crypto")
const alg = "aes-256-ctr"
const pwd = "abcabcd"
const User = require("./models/User")

//Criptografia
function crpty (text){
    const cipher = crypto.createCipher(alg,pwd)
    const crypted = cipher.update(text, 'utf-8', 'hex')
    return crpty
}

//Descriptografia
function decrpty(text){
    const decipher = crypto.createDecipher(alg,pwd)
    const plain = decipher.update(text, "hex", "utf-8")
    return plain
}

//Imprimindo criptografia
console.log(crpty("Faz certo - que dá certo!"))

//Imprimindo descriptografia
//console.log(decrpty(crpty("Faz certo - que dá certo!")))