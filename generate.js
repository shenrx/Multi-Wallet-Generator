const fs = require('fs');
const figlet = require('figlet');
const chalk = require('chalk');
const readline = require('readline-sync');
const { Wallet } = require('ethers');

const outputFile = 'wallets.txt';

// 🎯 Input jumlah wallet dari user
const jumlahWallet = parseInt(
  readline.question(chalk.cyan('Berapa banyak wallet yang ingin dibuat? 👉 '))
);

// Validasi input
if (isNaN(jumlahWallet) || jumlahWallet < 1) {
  console.log(chalk.red('❌ Masukkan angka yang valid dan lebih dari 0.'));
  process.exit(1);
}

// 🌟 Tampilkan banner identitas
console.log(
  chalk.green(figlet.textSync('Multi-Wallet Generator', { horizontalLayout: 'full' }))
);
console.log(chalk.cyan.bold('🛠 Dibuat oleh: shenrx'));
console.log(chalk.cyan('🔗 GitHub: https://github.com/shenrx'));
console.log(chalk.cyan('🚀 Project: Multi-Wallet Generator v1.0.0\n'));

let output = '';

for (let i = 0; i < jumlahWallet; i++) {
  const wallet = Wallet.createRandom();
  output += `# Wallet ${i + 1}\n`;
  output += `Address: ${wallet.address}\n`;
  output += `Private Key: ${wallet.privateKey}\n`;
  output += `Mnemonic: ${wallet.mnemonic.phrase}\n\n`;

  // Tampilkan di console dengan warna
  console.log(chalk.yellow.bold(`🧾 Wallet ${i + 1}`));
  console.log(chalk.magenta(`Address: ${wallet.address}`));
  console.log(chalk.red(`Private Key: ${wallet.privateKey}`));
  console.log(chalk.blue(`Mnemonic: ${wallet.mnemonic.phrase}\n`));
}

fs.writeFileSync(outputFile, output);
console.log(chalk.greenBright(`✅ Selesai! ${jumlahWallet} wallet disimpan di ${outputFile}`));
