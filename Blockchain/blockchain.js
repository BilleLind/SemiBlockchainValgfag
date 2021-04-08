const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock( { data }) {
        const newBlock = Block.mineBlock({
            lastBlock: this.chain[this.chain.length-1],
            data
        });
        this.chain.push(newBlock);
    }


    replaceChain(chain) {
        //fik tidligere hele tiden error i at kæden skulle være længere
    }

    static isValidChain(chain) {
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;

        for(let i=1; i<chain.length; i++) {
            const {timestamp, lastHash, hash, nonce, data} = chain[i];
            const actualLastHash = chain[i-1].hash;

            if(lastHash !== actualLastHash) return false;


        }
    }

}

