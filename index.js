const deployment = require('./js/deployment');
const SingletonFactory = require('./js/artifacts')().contracts.SingletonFactory.SingletonFactory;
const { contractAddr } = deployment.generateDeployTx();

module.exports = {
  deploy: deployment.deploy,
  generateDeployTx: deployment.generateDeployTx,
  SingletonFactory: (web3, options = {}) => SingletonFactory.instance(web3, contractAddr, options)
};
