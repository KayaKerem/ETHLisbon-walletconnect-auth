const hre = require('hardhat');

async function main() {

    //Get account
    const [user1,user1New] = await hre.ethers.getSigners();


    //Get the contract deploy
    const DeAuth = await hre.ethers.getContractFactory("DeAuth");
    const deAuth = await DeAuth.deploy();
    await deAuth.deployed();
    console.log("DeAuth deployed to ",deAuth.address);

    //Connect new social medias from (address = user1)
    await deAuth.connect(user1).connectNewSocialMedia("instagram","metamask");
    await deAuth.connect(user1).connectNewSocialMedia("reddit","metamask");
    await deAuth.connect(user1).connectNewSocialMedia("twitter","metamask");
    await deAuth.connect(user1).connectNewSocialMedia("discord","metamask");
    await deAuth.connect(user1).connectNewSocialMedia("facebook","metamask");
    await deAuth.connect(user1).connectNewSocialMedia("linkedin","metamask");
    console.log("User 1 social media that connected to DeAuth (address = user1) =>",(await deAuth.connect(user1).getConnectedSocialMedias("metamask")));
    console.log("User 1 social medias salts for user1 => ", (await deAuth.connect(user1).getSalts("metamask")));
  
  
    //Change wallet address for spesific social media user1 to user1New
    await deAuth.connect(user1).changeWalletAddressForSpesificSocialMedia("instagram","metamask",user1New.address);
    console.log("User 1 social media that connected to DeAuth (address = user1) =>",(await deAuth.connect(user1).getConnectedSocialMedias("metamask")));
    console.log("User 1 social media that connected to DeAuth (address = user1New) =>",(await deAuth.connect(user1New).getConnectedSocialMedias("metamask")));


    //Disconnect social media from (address = user1)
    await deAuth.connect(user1).disconnectSocialMedia("twitter","metamask");
    console.log("User 1 social media that connected to DeAuth (address = user1) =>",(await deAuth.connect(user1).getConnectedSocialMedias("metamask")));
    console.log("User 1 social media that connected to DeAuth (address = user1New) =>",(await deAuth.connect(user1New).getConnectedSocialMedias("metamask")));

    //Change password by changing the salt for spesific social media
    console.log("User 1 social media passwords salts before changing =>", (await deAuth.connect(user1).getConnectedSocialMedias("metamask")));
    console.log("User 1 social medias salts for user1 => ", (await deAuth.connect(user1).getSalts("metamask")));
    await deAuth.connect(user1).changeSocialMediaPassword("discord", "metamask");
    await deAuth.connect(user1).changeSocialMediaPassword("facebook", "metamask");
    console.log("User 1 social media passwords salts after changing =>",(await deAuth.connect(user1).getConnectedSocialMedias("metamask")));
    console.log("User 1 social medias salts for user1 => ", (await deAuth.connect(user1).getSalts("metamask")));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
