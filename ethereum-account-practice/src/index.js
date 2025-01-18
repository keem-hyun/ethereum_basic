const { ethers } = require("ethers");
const EC = require("elliptic").ec;

const wallet = ethers.Wallet.createRandom();

console.log("random wallet ", wallet);

const walletPrivateKey = wallet.privateKey;
console.log("wallet private key ", walletPrivateKey);

const walletAddress = wallet.address;
console.log("My ethereum address ", walletAddress);

const ec = new EC("secp256k1");

const privateKey = walletPrivateKey.slice(2);

const keyPair = ec.keyFromPrivate(privateKey);

const myPublicKey = keyPair.getPublic().encodeCompressed("hex");

console.log("my public key ", myPublicKey);