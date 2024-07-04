
 https://explorer.solana.com/tx/iGt2udeqm5sAqVZtYbXJvAiwQLfABXkXZ1nb7X6ThrFGRedCiTHuv8HWJp3HCDyMn2ZWnxasPufLbzupFmXXUvj?cluster=devnet

Wallet address : 4TNuFug3o1sFmPujbGtgNnLaeWqmbUVLdpwURkMsuwHs

 # Introduction 
 This repository is part of assessments of 'Bridge to Turbin3' program. It is using solana blockchain to make the transactions. Some of the the transactions perfomed can be be made on the solana localnet instead of the devenet in case SOL is not available.

## Getting Started
Clone the repository using
   
    git clone

To download all the dependencies required, used
   
    yarn install

It will download all the required packages from 'package.json' file.


## Files and Functions

To create a new wallet :
   
    yarn keygen

Output : 

    
    yarn run v1.22.19
    $ ts-node ./keygen.ts
    You've generated a new Solana wallet: 4TNuFug3o1sFmPujbGtgNnLaeWqmbUVLdpwURkMsuwHs
    Solana Wallet Secret Key: 142,24,35,86,52,35,243,227,70,43,118,152,217,93,204,182,137,190,167,139,137,155,151,146,174,81,28,217,222,242,70,226,51,84,236,226,208,10,160,111,145,52,111,6,73,203,21,43,223,0,196,160,237,33,113,218,75,233,157,9,178,254,226,234]
    Done in 2.11s.
To fund the newly generated wallet :
   
    yarn airdrop

Output:
    
    yarn run v1.22.19
    $ ts-node ./airdrop.ts
    Success! Check out your TX here: 
            https://explorer.solana.com/tx/6w5YUBzxwGVWNVuZPYrDpX1ANLsQm6XSpizADF7chm6zqXgvkGhFRNogsg45onAEPenKxavFKpNpCzuxkg2Frrf?cluster=devnet
    Done in 3.72s.
To make simple transaction from one wallet to another, you can use :
   
    yarn transfer

NOTE : transfer file requires another wallet address which can be generated using ```yarn keygen```

To interact with the program published by the WBA :
   
    yarn enroll

Output :


    yarn run v1.22.19
    $ ts-node ./enroll.ts
    Success! Check out your TX here:
    https://explorer.solana.com/tx/iGt2udeqm5sAqVZtYbXJvAiwQLfABXkXZ1nb7X6ThrFGRedCiTHuv8HWJp3HCDyMn2ZWnxasPufLbzupFmXXUvj?cluster=devnet
    Done in 4.74s.