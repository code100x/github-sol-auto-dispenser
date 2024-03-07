

const walletManager = new WalletManager();


walletManager.createWallet('wallet123');


const walletInfo = walletManager.getWalletInfo('wallet123');
console.log(walletInfo);


walletManager.addTransaction('wallet123', { amount: 100, description: 'Initial deposit' });


walletManager.updateBalance('wallet123', 100);
