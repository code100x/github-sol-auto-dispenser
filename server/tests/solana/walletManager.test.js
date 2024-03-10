

const WalletManager = require('../../src/solana/walletManager');
const { Keypair } = require('@solana/web3.js');

jest.mock('@solana/web3.js', () => {
    const originalModule = jest.requireActual('@solana/web3.js');
    return {
        ...originalModule,
        Connection: jest.fn().mockImplementation(() => {
            return {
                sendTransaction: jest.fn().mockResolvedValue('mockSignature'),
                confirmTransaction: jest.fn().mockResolvedValue({}),
            };
        }),
    };
});

describe('WalletManager', () => {
    let walletManager;
    let senderKeypair;
    let recipientPublicKeyStr;
    let amount;

    beforeAll(() => {
        walletManager = new WalletManager();
        senderKeypair = Keypair.generate();
        recipientPublicKeyStr = Keypair.generate().publicKey.toString();
        amount = 0.1; // Example amount in SOL
    });

    test('sendSol sends SOL successfully and returns a signature', async () => {
        const signature = await walletManager.sendSol(senderKeypair, recipientPublicKeyStr, amount);
        expect(signature).toBe('mockSignature');
    });
});
