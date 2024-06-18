const passBox = document.getElementById("pass");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!'^+%&/()=?*->£#$½{[]}";
const allChars = upperCase + lowerCase + number + symbol;

function createPass() {
    let pass = "";
    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pass += number[Math.floor(Math.random() * number.length)];
    pass += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > pass.length) {
        pass += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passBox.value = pass;
}

function copyPass() {
    passBox.select();
    document.execCommand("copy");
    passBox.setSelectionRange(0, 0);
    showCopiedMessage();
}

function showCopiedMessage() {
    const messageElement = document.createElement('div');
    messageElement.classList.add('copied-message');
    messageElement.textContent = 'Copied!';
    document.body.appendChild(messageElement);

    setTimeout(() => {
        messageElement.remove();
    }, 1500);
}
