/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

const nfts = []; //array to store all the NFTs

function mintNFT(name, rank, value, power) {
    const NFT = {
        "name": name,
        "rank": rank,
        "value": value,
        "power": power
    };
    nfts.push(NFT); //push the NFT to the array

    console.log("\nNFT minted: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    console.log(" ");

    nfts.forEach(nft => {
        console.log("Name : " + nft.name);
        console.log("Rank : " + nft.rank);
        console.log("Value: " + nft.value);
        console.log("Power: " + nft.power);
        console.log(" ");
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs minted: " + nfts.length + "\n");
}

// call your functions below this line

mintNFT("Ironman", "1", "Legendary", "Tech");

mintNFT("Thor", "2", "Epic", "Thunder");

mintNFT("Captain America", "3", "Common", "Shield");

listNFTs();

getTotalSupply();
