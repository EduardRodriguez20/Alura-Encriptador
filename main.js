const encrypt = document.getElementById('bEncrypt');
const decrypt = document.getElementById('bDecrypt');
const textInput = document.getElementById('inText');
const helpText = document.querySelector('.infoDiv p');
const empty = document.getElementById('empty');
const response = document.getElementById('response');
const textOutput = document.getElementById('inResponse');

const copy = () => {
    textOutput.select();
    document.execCommand('copy');
}

function toEncrypt(text) {
    let result = text.replace(/e/g, 'enter')
                          .replace(/i/g, 'imes')
                          .replace(/a/g, 'ai')
                          .replace(/o/g, 'ober')
                          .replace(/u/g, 'ufat');
    return result;
}

function toDecrypt(text) {
    let result = text.replace(/enter/g, 'e')
                             .replace(/imes/g, 'i')
                             .replace(/ai/g, 'a')
                             .replace(/ober/g, 'o')
                             .replace(/ufat/g, 'u');
    return result;
}

function toggleResponse(isResponse) {
    if (isResponse) {
        response.setAttribute('style', 'display: flex');
        empty.setAttribute('style', 'display: none');
    } else{
        response.setAttribute('style', 'display: none');
        empty.setAttribute('style', 'display: flex');
        textInput.value = '';
        textOutput.value = '';
    }
}

function validText (texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

const invalidText = () => {
    helpText.classList.add('highlight');
    setTimeout(() => {
        helpText.classList.remove('highlight');
    }, 1000);
}

encrypt.addEventListener('click', () => {
    if (validText(textInput.value)) {
        toggleResponse(true);
        textOutput.value = toEncrypt(textInput.value)
    }else{
        invalidText();
    }
})

decrypt.addEventListener('click', () => {
    if (validText(textInput.value)) {
        toggleResponse(true);
        textOutput.value = toDecrypt(textInput.value);
    }else{
        invalidText();
    }
})