import { Keypair } from '@solana/web3.js';

// Example secret key array (replace this with your actual secret key)
const secretKey = Uint8Array.from([182,90,154,244,160,144,236,103,11,32,191,58,223,172,89,228,176,168,105,117,15,165,227,6,117,51,12,90,83,199,32,75,109,187,86,28,145,74,124,34,154,96,50,169,234,100,218,17,189,233,217,180,66,43,181,198,114,38,250,52,2,219,171,103]);

// Create a Keypair from the secret key
const keypair = Keypair.fromSecretKey(secretKey);

// Get the public key (wallet address) from the Keypair
const publicKey = keypair.publicKey;

// Print the wallet address




console.log(`Wallet Address: ${publicKey.toBase58()}`);
