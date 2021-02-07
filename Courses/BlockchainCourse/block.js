const { GENESIS_DATA} = require('./config')

class Block { // ved at wrappe parametrene i {} gør det så man ikke senere skal indføre det i denne rækkefølge, Map funktionen gør dette muligt
    constructor({timestamp, lastHash, hash, data}) {
        this.timestamp = timestamp;
        this.lastHash = lastHash
        this.hash = hash;
        this.data = data;
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }

    static mineBlock({ lastBlock, data}) {
        return new this({
            timestamp: Date.now(),
            lastHash: lastBlock.hash,
            data: 
        })
    }
}
module.exports = Block;