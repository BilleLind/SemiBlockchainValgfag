const Block = require("./block");
const {GENESIS_DATA } = require('./config');

describe('Block', () => {
    const timestamp = 'a-date';
    const lastHash = 'foo-lastHash';
    const data = ['blockchain', 'data'];
    const hash = 'foo-hash';
    // const block = new Block({
    //     timestamp: timestamp,
    //     lastHash: lastHash,
    //     data: data,
    //     hash: hash,
    // }); dette er muligt da datatypen er den samme, så man kun skal skrive det ind en gang.
    const block = new Block({timestamp, lastHash, data, hash})

    it('has a timestamp, lastHash, data, hash property', () =>{
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    describe('Genesis()', () =>{
        const genesisBlock = Block.genesis();

        it('return a block instance', ()=>{
            expect(genesisBlock instanceof Block).toBe(true);
        });

        it('return the genesisdata', () =>{
            expect(genesisBlock).toEqual(GENESIS_DATA);
        });
    });

    describe('mineBlock()', ()=> {
        const lastBlock = Block.genesis();
        const data = 'mined data';
        const minedBlock = Block.mineBlock({lastBlock, data});

        it('returns a Block instance', () => {
            expect(minedBlock instanceof Block).toBe(true);
        });

        it('sets the `lastHash´ to the ´hash´ of the lastBlock', () => {
            expect(minedBlock.lastHash).toEqual(lastBlock.hash);
        });

        it('sets the ´data´', () => {
            expect(minedBlock.data).toEqual(data);
        });

        it('sets the ´timestamp´', () =>{
            expect(minedBlock.timestamp).not.toEqual(undefined); 
        })
    });
});