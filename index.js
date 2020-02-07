let round = 0;
let rollCount = 0;
let numPlayers = 6;
let scores = new Array(numPlayers).fill(0);

let rollDice = () => {
    return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2;
};

let preMarket = () => {
    let out = 0;

    for(let i = 0; i<3; i++) {
        let roll = rollDice();
        out += roll == 7 ? 70 : roll;
        rollCount++;
    }

    return out;
};

let postMarket = () => {
    
};

console.log(rollDice());