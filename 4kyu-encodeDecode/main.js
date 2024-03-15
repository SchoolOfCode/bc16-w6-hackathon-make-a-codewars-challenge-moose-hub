export function encodeWithKey(message, keyword) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let encodedMessage = '';
    let keywordIndex = 0;

    for (let char of message) {
        if (alphabet.includes(char.toLowerCase())) {
            let shift = alphabet.indexOf(keyword[keywordIndex % keyword.length].toLowerCase());
            let newIndex = (alphabet.indexOf(char.toLowerCase()) + shift) % alphabet.length;
            let encodedChar = alphabet[newIndex];
            encodedMessage += char === char.toLowerCase() ? encodedChar : encodedChar.toUpperCase();
            keywordIndex++;
        } else {
            encodedMessage += char;
        }
    }

    return encodedMessage;
}

export function decodeWithKey(message, keyword) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let decodedMessage = '';
    let keywordIndex = 0;

    for (let char of message) {
        if (alphabet.includes(char.toLowerCase())) {
            let shift = alphabet.indexOf(keyword[keywordIndex % keyword.length].toLowerCase());
            let originalIndex = (alphabet.indexOf(char.toLowerCase()) - shift + alphabet.length) % alphabet.length;
            let decodedChar = alphabet[originalIndex];
            decodedMessage += char === char.toLowerCase() ? decodedChar : decodedChar.toUpperCase();
            keywordIndex++;
        } else {
            decodedMessage += char;
        }
    }

    return decodedMessage;
}