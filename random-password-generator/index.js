const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}


function generate() {
    const generatedPasswordOne = generateRandomPassword()
    document.querySelector('.pass').textContent = generatedPasswordOne;
    const generatedPasswordTwo = generateRandomPassword()
    document.getElementById('pass-2').textContent = generatedPasswordTwo;
}

function copy(num) {
    let pass1 = document.querySelector('.pass').textContent;
    let pass2 = document.getElementById('pass-2').textContent;
    if (num == 1 && document.querySelector('.pass').textContent != '') {
        navigator.clipboard.writeText(pass1)
    }
    else if (num == 2 && document.getElementById('pass-2').textContent != '') {
        navigator.clipboard.writeText(pass2)
    }
}