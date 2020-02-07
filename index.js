const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
};

const preMarket = () => {
    let out = 0;

    for(let i = 0; i<3; i++) {
        const roll = rollDie() + rollDie();
        out += roll == 7 ? 70 : roll;
    }

    return out;
};

const postMarketRoll = () => {
    const die1 = rollDie();
    const die2 = rollDie();

    if(die1 == die2) {
        return -1;
    } else if(die1 + die2 == 7) {
        return 0;
    } else {
        return die1 + die2;
    }
};

const strategy1 = () => {
    let score = 0;

    for(let i = 0; i<20; i++) {
        let rollCount = 3;
        let roundScore = preMarket();

        console.log(`Score: ${score}, Market opens at: ${roundScore}`);

        if(rollCount < 6) {
            let roll = postMarketRoll();
            if(roll == -1) {
                roundScore *= 2;
            } else if(roll == 0) {
                continue;
            } else {
                rollCount++;
                roundScore += roll;
            }

            console.log(`  RollCount: ${rollCount}, Roll: ${roll}, RoundScore: ${roundScore}`);

        } else {
            score += roundScore;
            console.log();
            continue;
        }
    }

    return score;
};

for(let i=0; i<30; i++) {
    console.log(postMarketRoll());
}