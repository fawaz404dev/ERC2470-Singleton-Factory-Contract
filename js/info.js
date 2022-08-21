
const ERC2470 = require('../index.js');

const res = ERC2470.generateDeployTx();

console.log("RawTx: ", res.rawTx);
console.log("Sender: ", res.sender);
console.log("Contract:", res.contractAddr);

setTimeout(() => {}, 200 );
