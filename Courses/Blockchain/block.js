class Block {
    constructor(data, timestamp, nonce, hash, prevBlock) {
        this.data = data;
        this.timestamp = timestamp;
        this.nonce = nonce;
        this.hash = hash;
        this.prevBlock = prevBlock;
    }
}