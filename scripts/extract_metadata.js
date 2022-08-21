const artifacts = require('../js/artifacts')();
const metadata = JSON.parse(artifacts.contracts.SingletonFactory.SingletonFactory.metadata);

console.log(JSON.stringify(metadata, null, 2));
