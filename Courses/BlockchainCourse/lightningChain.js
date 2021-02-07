const lightningHash = (data) => {
    return data + '*';
}
class Block {
    constructor(data, hash, sidsteHash) {
        this.data = data;
        this.hash = hash;
        this.sidsteHash = sidsteHash;
    }
}
//foo er en almindelig placeholder for værdier eller funktioner der kan ændre sig
//const fooBlock = new Block('foo-data', 'foo-hash', 'foo-sidsteHash' );
//console.log(fooBlock)

class BlockChain {
    constructor() {
        const genesis = new Block('gen-data', 'gen-hash', 'gen-sidsteHash');

        this.chain = [genesis];
    }

    addBlock(data) {
        const sidsteHash = this.chain[this.chain.length-1].hash;

        const hash = lightningHash(data + sidsteHash);

        const block = new Block(data, hash, sidsteHash);

        this.chain.push(block)
    }
}

const fooBlockChain = new BlockChain();
fooBlockChain.addBlock('one')
fooBlockChain.addBlock('two')
fooBlockChain.addBlock('three')

console.log(fooBlockChain)