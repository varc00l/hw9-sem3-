function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

logItems(['Mango', 'Poly', 'Ajax']);

function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    return words.length * pricePerWord;
}

console.log(calculateEngravingPrice('Hello world', 10)); // 20

function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = words[0];

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 

function formatString(string) {
    if (string.length <= 40) {
        return string;
    } else {
        return string.slice(0, 40) + '...';
    }
}


console.log(formatString('This is a short string'));
console.log(formatString('This is a very long string that needs to be shortened')); 

function checkForSpam(message) {
    const lowerCasedMessage = message.toLowerCase();
    return lowerCasedMessage.includes('spam') || lowerCasedMessage.includes('sale');
}


console.log(checkForSpam('Latest SALE now!')); 
console.log(checkForSpam('Join us for a fun event')); 

let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Введіть число:');

    if (input === null) {
        break; 
    }

    input = Number(input);

    if (Number.isNaN(input)) {
        alert('Було введено не число, спробуйте ще раз');
    } else {
        numbers.push(input);
    }
}

if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
}

const logins = ['user1', 'admin', 'superuser'];

function isLoginValid(login) {
    return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
    return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
    if (!isLoginValid(login)) {
        return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }

    if (!isLoginUnique(allLogins, login)) {
        return 'Такий логін уже використовується!';
    }

    allLogins.push(login);
    return 'Логін успішно доданий!';
}

console.log(addLogin(logins, 'newuser'));
console.log(addLogin(logins, 'ad'));
console.log(addLogin(logins, 'admin'));
