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

const strategy = (rollCountLimit, scoreCap, logToConsole) => {
    let score = 0;

    for(let i = 0; i<20; i++) {
        let rollCount = 3;
        let roundScore = preMarket();
        let alive = true;

        if(logToConsole) console.log(`Round: ${i}, Score: ${score}, Market opens at: ${roundScore}`);

        while(alive && rollCount < rollCountLimit && roundScore < scoreCap) {
            let roll = postMarketRoll();
            rollCount++;

            if(roll == 0) {
                alive = false;
                roundScore = 0;
            } else if(roll == -1) {
                roundScore *= 2;
            } else {
                roundScore += roll;
            }

            if(logToConsole) console.log(`  Roll: ${roll}, RollCount: ${rollCount}, RoundScore: ${roundScore}`);
        }

        score += roundScore;
    }

    return score;
};

const avgOfStrategy = (strategy, rollCountLimit, scoreCap, iterations) => {
    let results = [];
    for(let i=0; i<iterations; i++) {
        results.push(strategy(rollCountLimit, scoreCap, false));
    }

    return results.reduce((a,b) => (a+b)) / results.length;
}

let iterations = 100000;
console.log(`Strategy 1 avg.: ${avgOfStrategy(strategy, 6, 10000, iterations)}, with ${iterations} iterations.`);
console.log(`Strategy 2 avg.: ${avgOfStrategy(strategy, 7, 10000, iterations)}, with ${iterations} iterations.`);
console.log(`Strategy 3 avg.: ${avgOfStrategy(strategy, 8, 10000, iterations)}, with ${iterations} iterations.`);
console.log(`Strategy 3 avg.: ${avgOfStrategy(strategy, 9, 10000, iterations)}, with ${iterations} iterations.`);
console.log(`Strategy 3 avg.: ${avgOfStrategy(strategy, 10, 10000, iterations)}, with ${iterations} iterations.`);
console.log(`Strategy 3 avg.: ${avgOfStrategy(strategy, 11, 10000, iterations)}, with ${iterations} iterations.`);
console.log(`Strategy 3 avg.: ${avgOfStrategy(strategy, 12, 10000, iterations)}, with ${iterations} iterations.`);
console.log(`Strategy 3 avg.: ${avgOfStrategy(strategy, 13, 10000, iterations)}, with ${iterations} iterations.`);
console.log(`Strategy 3 avg.: ${avgOfStrategy(strategy, 14, 10000, iterations)}, with ${iterations} iterations.`);
console.log(`Strategy 3 avg.: ${avgOfStrategy(strategy, 15, 10000, iterations)}, with ${iterations} iterations.`);