const fortunes = ["You will find great fortune today!", "You should try something new today", "I wouldn't try anything new today...", "If you state your needs, they will appear to you!", "Go all in on pocket aces today.", "Probably shouldn't go swimming today...", "Should definitely not be late to work today."];
let randomNumber = Math.floor(Math.random()*7)
const getNumber = (num) => {
    switch (num) {
        case 1:
            return fortunes[0];
            break;
        case 2:
            return fortunes[1];
            break;
        case 3:
            return fortunes[2];
            break;
        case 4:
            return fortunes[3];
            break;
        case 5:
            return fortunes[4];
            break;
        case 6:
            return fortunes[5];
            break;
        case 7:
            return fortunes[6]
        default:
            return 'Try again later';
            break;

    }
};
console.log("Hi there! Here for your fortune? Well here it is:");
console.log(getNumber(randomNumber));
