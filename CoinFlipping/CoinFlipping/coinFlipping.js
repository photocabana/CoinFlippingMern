function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let flips = 0;
        let maxFlips = 100;

        while (headsCount < 5 && flips <= maxFlips) {
            flips++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
        if (flips <= maxFlips) {
            resolve(`It took ${flips} tries to flip five "heads"`);
        } else {
            reject(`You have exceeded ${maxFlips} flips.`);
        }
    });
}

fiveHeads()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

console.log("How long will this take?");