const Block = require("./block");

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
});