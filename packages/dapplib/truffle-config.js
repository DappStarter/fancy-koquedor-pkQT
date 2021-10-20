require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture stove response shift protect good knee metal gaze'; 
let testAccounts = [
"0x8e733d13938f432061038e8adbe92d4c5dcc3e854896cfe88f8da2fa9dafaa6d",
"0xac24a4f00dce1bb1970a775b8ce95f15b576e204f4bb375aacb693d4904b69eb",
"0x1de3d95e6517d1b0a3dc7959265c9e7578273677b8d5245ee3b59f4bf2a188c0",
"0x7c07e460b9f29182c130f8355db50e979ef61d3e54ac59b452c409be89ecf5f7",
"0x77eeddfdf258f31a8750b91f593d626a28eb483795cdb7b686d3e3bca476c9f3",
"0x59f4530379e205be50e1665a63d7d704e2681753e701741cee29a75cef043bba",
"0xeac68b6081cf9366c07f418f1e68d0c611c778f7cae3a85e08b7a74cb00ce76b",
"0x49df78bba8c1385eb6894b1638a3a2bcba4d5587020c96f2176f3b45eef871d4",
"0xb70954b1d1e418854d46894c69f96d0a370bb1cfbab4aca0e7d842d781e86af7",
"0xf679cb15aeb3d1938656211bcff02c95063c092ae364f7e2e4675370816889a7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

