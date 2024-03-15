export function encode (message, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let encodedMessage = '';

    for (let char of message) {
        if (alphabet.includes(char.toLowerCase())) {
            let isUpperCase = char.toUpperCase() === char;
            let newIndex = (alphabet.indexOf(char.toLowerCase()) + shift + 26) % 26;
            let encodedChar = alphabet[newIndex];
            encodedMessage += isUpperCase ? encodedChar.toUpperCase() : encodedChar;
        } else {
            encodedMessage += char;
        }
    }

    return encodedMessage;
};

export const decode = (message, shift) => {
    return encode(message, -shift);
};
