
const Block = require('./block')

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(new Date(), 'Genesis Block', '0');;
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }
  addBlock(newBlock) {
    newBlock.previousHash = this.getLastBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  validateChain() {
        for (let index = 1; index < this.chain.length; index++) {
          const currentBlock = this.chain[index];
          const previousBlock = this.chain[index - 1];

            if (currentBlock.hash != currentBlock.calculateHash()) {
                return {result: false, message: "There is an error: Blockchain is invalid."}
            } 
            if (currentBlock.previousHash != previousBlock.hash) {
                return { result: false, message: "There is an error: Blockchain is invalid."}
            }
        }
      return { result: true, message: "This Blockchain is valid." }
  }
}

module.exports = Blockchain