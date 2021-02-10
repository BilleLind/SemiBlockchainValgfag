const hexToBinary = require('hex-to-binary')
const { GENESIS_DATA, MINE_RATE} = require('./config');
const cryptoHash = require('./crypto-hash');

class Block { // ved at wrappe parametrene i {} gør det så man ikke senere skal indføre det i denne rækkefølge, Map funktionen gør dette muligt
    constructor({timestamp, lastHash, hash, data, nonce, difficulty}) {
        this.timestamp = timestamp;
        this.lastHash = lastHash
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }

    static mineBlock({ lastBlock, data}) {
        let hash, timestamp;
        const lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;
        let nonce = 0;

        do {
            nonce++; 
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({ originalBlock : lastBlock, timestamp});
            hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty);
        } while(hexToBinary(hash).substring(0, difficulty) !== '0'.repeat(difficulty));

        return new this({timestamp, lastHash, data, difficulty, nonce, hash});
    }

    static adjustDifficulty( { originalBlock, timestamp}) {
        const { difficulty } = originalBlock;

        if ( difficulty < 1) return 1;
        //hvis det tager for lang tid
        if ( (timestamp - originalBlock.timestamp) > MINE_RATE ) {return difficulty- 1;}
        //hvis det går for hurtigt
        return difficulty + 1;
    }
}
module.exports = Block;