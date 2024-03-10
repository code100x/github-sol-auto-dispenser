
const { sendSol } = require('../../src/solana/solanaTx');
const { Keypair } = require('@solana/web3.js');
const senderKeypair = Keypair.fromSecretKey(senderSecretKey);



describe('sendSol function', () => {
    // cummy secret key array directly 
    const dummySecretKey = [
        3, 0, 9, 255, 88, 77, 22, 11, 33, 44, 55, 66, 77, 88, 99, 111,
        122, 133, 144, 155, 166, 177, 188, 199, 210, 221, 232, 243, 254, 5, 16, 27,
        38, 49, 60, 71, 82, 93, 104, 115, 126, 137, 148, 159, 170, 181, 192, 203,
        214, 225, 236, 247, 2, 13, 24, 35, 46, 57, 68, 79, 90, 101, 112, 123
    ];

    beforeAll(() => {

        process.env.SOLANA_WALLET_SECRET_KEY = JSON.stringify(dummySecretKey);
    });

    it('successfully sends SOL and returns a signature', async () => {

    });


describe('sendSol function', () => {
  it('successfully sends SOL and returns a signature', async () => {
    const receiverAddress = 'someReceiverAddress';
    const amount = 0.1;
    const signature = await sendSol(receiverAddress, amount);

    expect(Connection).toHaveBeenCalledTimes(1);
    expect(Keypair.fromSecretKey).toHaveBeenCalledTimes(1);
    expect(sendAndConfirmTransaction).toHaveBeenCalledTimes(1);
    expect(signature).toEqual('mockSignature');


  });

});
})