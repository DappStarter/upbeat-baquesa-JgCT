require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift raise magic concert grace only equal gasp'; 
let testAccounts = [
"0x7984241923480be6203a8e6ddedbd61efb7ada9dd66c38141a4f95e32be7a943",
"0xddecdbb990abb3e01e517d4548b2f2e3cbedc1dd7a4555ac2de16e8b91e9643c",
"0x729d9d189c53b1b9423a2250dd3f5d572694aece7b5864369b4fb4e428762ca5",
"0x03ad645ed073823f67fc3f8888c4a8341706f3fd39c4e25bad7484ded331462b",
"0x199d37b33e080786534781440987387f2cc15cceb3d000abc11d0005da41502f",
"0x02f82c82ebbe4cf739020bbf0a9c7926257acfde155c1a0576a10771b1267399",
"0x13971b7d5476200991816477ace72318de38aafd04e056998906c095fce071fb",
"0xef0cf40864088267d538ffcc0de51c89275f6969ee562c225d03e2de3d7d08cd",
"0x0c4fbbe4f35e107a32ba7673499eccca9ce067a255b4647e990aba250d981657",
"0x553f02b56be23dc269437dd4955d060ecad8a782f7296b0c8f6d6913d50f84be"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


