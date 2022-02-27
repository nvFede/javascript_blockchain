
const Block = require('./block')
const Blockchain = require('./blockchain')


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function addBlocks() {
    for (let i = 0; i < 3; i++) {
        console.log(`Creating new Block...`);
smashCoin.addBlock(new Block(new Date(), {quantity:i + 100}))
        await sleep(1000); // 1 second
    }
    console.log('Done');

    console.log(smashCoin.validateChain());

    console.log('=============================');
    console.log('    SMASH COIN BLOCKCHAIN    ');
    console.log('=============================');
    console.log(JSON.stringify(smashCoin, null, 4));
}


let smashCoin = new Blockchain();
addBlocks();
