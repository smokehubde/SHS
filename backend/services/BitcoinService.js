const bitcoin = require('bitcoinjs-lib');
const { randomBytes } = require('crypto');

module.exports = {
    generateAddress: () => {
        const keyPair = bitcoin.ECPair.makeRandom({ rng: randomBytes });
        const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
        return address;
    },
    // Placeholder for checking payments using Electrum or similar
    checkPayment: async (address) => {
        // TODO: integrate with Electrum API
        return false;
    }
};
