const fs = require('fs');
const { Wallet } = require('ethers');

const jumlahWallet = 3; // ubah sesuai kebutuhan
const outputFile = 'wallets.txt';

let output = '';

for (let i = 0; i < jumlahWallet; i++) {
    const wallet = Wallet.createRandom();
    output += `# Wallet ${i + 1}\n`;
    output += `Address: ${wallet.address}\n`;
    output += `Private Key: ${wallet.privateKey}\n`;
    output += `Mnemonic: ${wallet.mnemonic.phrase}\n\n`;
}

fs.writeFileSync(outputFile, output);
console.log(`✅ Selesai! ${jumlahWallet} wallet disimpan di ${outputFile}`);
