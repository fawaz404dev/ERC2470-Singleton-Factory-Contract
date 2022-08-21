# ERC2470 Singleton Factory Contract

## Proposal
The official proposal can be found at: [eips.ethereum.org/EIPS/eip-2470][ERC2470].

## ERC2470 Factory

This repository contains the official implementation of the [ERC2470 factory] as defined in the [standard][ERC2470].

The address of the factory on **all chains** is:

<h4><pre>0xce0042B868300000d44A59004Da54A005ffdcf9f</pre></h4>

### Vanity Generator for ERC2470 Singletons

Run the following to generate a few vanity "0x1234" addresses of "SingletonExample.sol":

``` shell
npm run build
node ./scripts/vanitygen-erc2470.js "0x1234"
```

The script simply try salts for the bytecode of that example.

## Compilation & Verification

> :warning: The `solc` compiler version `0.5.11+commit.22be8592` must be present on the build machine. ([More info on installing solc][solc-install].)

The factory can be compiled from the source code using:

``` shell
npm run build
```

This will write the json artifacts for the factory in the `artifacts` folder and the standard output in the `build` folder.

### Verification

The address of the account creating the factory, the address of the factory and the raw signed transaction can be generated with:

``` shell
$ npm run info
> node js/info.js

RawTx:  0xf9016c8085174876e8008303c4d88080b90154608060405234801561001057600080fd5b50610134806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80634af63f0214602d575b600080fd5b60cf60048036036040811015604157600080fd5b810190602081018135640100000000811115605b57600080fd5b820183602082011115606c57600080fd5b80359060200191846001830284011164010000000083111715608d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550509135925060eb915050565b604080516001600160a01b039092168252519081900360200190f35b6000818351602085016000f5939250505056fea26469706673582212206b44f8a82cb6b156bfcc3dc6aadd6df4eefd204bc928a4397fd15dacf6d5320564736f6c634300060200331b83247000822470
Sender:  0xBb6e024b9cFFACB947A71991E386681B1Cd1477D
Contract: 0xce0042B868300000d44A59004Da54A005ffdcf9f
```

Those values can be compared with the values in the [ERC2470 standard][ERC2470].

### Metadata

The metadata---for the factory only---can be extrated using:

``` shell
node scripts/extract_metadata.js
```

This metadata can also be compared with the formated version in the [ERC2470 standard][ERC2470].

### Vanity address

The vanity address of the factory---starting with `0x2470`---has been generated using the [`scripts/vanitygen.sh`] and [`scripts/vanitygen-info.js`] scripts.

## Authors
 - Fawaz Jomah [@fawaz404dev][fawaz404dev]
## License

> The [ERC2470 factory] is part of the  [ERC2470 standard][ERC2470] and is therefore in the public domain via [CC0].

The authors waive all copyright and related or neighboring rights for the rest of this repository's content via [CC0]. A copy of the [CC0] waiver is included in the [LICENSE] file.

[ERC820]: https://eips.ethereum.org/EIPS/eip-820
[ERC2470]: https://eips.ethereum.org/EIPS/eip-2470
[ERC2470 factory]: https://github.com/fawaz404dev/ERC2470-Singleton-Factory-Contract/blob/master/contracts/SingletonFactory.sol
[`scripts/vanitygen.sh`]: https://github.com/fawaz404dev/ERC2470-Singleton-Factory-Contract/blob/master/scripts/vanitygen.sh
[`scripts/vanitygen-info.js`]: https://github.com/fawaz404dev/ERC2470-Singleton-Factory-Contract/blob/master/scripts/vanitygen-info.js
[fawaz404dev]: https://github.com/fawaz404dev
[jbaylina]: https://github.com/jbaylina
[0xjac]: https://github.com/0xjac
[CC0]: http://creativecommons.org/publicdomain/zero/1.0/
[LICENSE]: https://github.com/fawaz404dev/ERC2470-Singleton-Factory-Contract/blob/master/LICENSE
[solc-install]: https://solidity.readthedocs.io/en/v0.5.11/installing-solidity.html