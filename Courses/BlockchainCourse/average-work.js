const BlockChain = require('./blockchain');


const blockChain = new BlockChain();


blockChain.addBlock( { data: 'initial'});


let prevTimestmap, nextTimestamp, nextBlock, timeDiff, average;

const times = [];

for (let i=0; i < 10000; i++) {
    prevTimestmap = blockChain.chain[blockChain.chain.length-1].timestamp;

    blockChain.addBlock( { data: `block ${i}` })
    nextBlock = blockChain.chain[blockChain.chain.length-1];

    nextTimestamp = nextBlock.timestamp;
    timeDiff = nextTimestamp - prevTimestmap;
    times.push(timeDiff);

    average = times.reduce((total, num) =>(total + num))/times.length;

    console.log(`Time to mine block: ${timeDiff}ms. Difficulty: ${nextBlock.difficulty}. Average times ${average}ms`);
}
