#### Requirements

- There should only exist 10 LearnWeb3 Punk NFT's and each one of them should be unique.
- User's should be able to mint only 1 NFT with one transaction.
- The metadata for the NFT's should be stored on IPFS
- There should be a website for your NFT Collection.
- The NFT contract should be deployed on Mumbai testnet.

#### IPFS

- Upload a folder containing all the NFTs images to `Pinata`. You can check that it actually got uploaded to IPFS is by opening this up: 
*https://ipfs.io/ipfs/<your-nft-folder-cid>*.

- Create one json file per image with the attributes: *name*, *description* and *image*. Note how *image* has *ipfs* location in it instead of an *https* url. 

- Upload a folder containing all the metadata json files (one per NFT) to `Pinata`.


