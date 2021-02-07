const BlockChain = require('./blockchain');
const Block = require('./block');


describe('BlockChain', () => {
    let blockChain;

    beforeEach(() =>{ // dette gør så der er en ny, ikke ændret blockchain før hver test.
        blockChain = new BlockChain();
    })

    it('contains a chain array', () => {
        expect(blockChain.chain instanceof Array).toBe(true);
    });

    it('starts with the genesis block', () => {
        expect(blockChain.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block to the chain', () => {
        const newData = 'foo bar';
        blockChain.addBlock({ data : newData });
        
        expect(blockChain.chain[blockChain.chain.length-1].data).toEqual(newData);
    });

    describe('isValideChain()', () => {
        describe('When the chain does not start with the genesis block', () =>{
            it('returns false', () => {
                blockChain.chain[0] = {data: 'fake-genesis'};

                expect(BlockChain.isValidChain(blockChain.chain)).toBe(false);
            })
        });

        describe('when the chain starts with the genesis block and has multiple blocks', () => {
            beforeEach( () => {
                blockChain.addBlock({data: 'Bears'});
                blockChain.addBlock({data: 'bees'});
                blockChain.addBlock({data: 'honey'});
            })

            describe('and a lastHash reference has changed', () => {
                it('returns false', () => {
                    blockChain.chain[2].lastHash = 'broken-lastHash';

                    expect(BlockChain.isValidChain(blockChain.chain)).toBe(false);
                })
            });

            describe('and the chain contains with an invalid field', () => {
                it('returns false', ()=>{
                    blockChain.chain[2].data = 'some-bad-and-evil-data';

                    expect(BlockChain.isValidChain(blockChain.chain)).toBe(false);
                });
            });

            describe('and the chain does not contain any invalid blocks', () => {
                it('returns true', () =>{
                    expect(BlockChain.isValidChain(blockChain.chain)).toBe(true);
                });
            });
        });
    });
});