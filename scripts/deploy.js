const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  const Contract = await ethers.getContractFactory('ERC721Test')

  console.log('Deploying NFT...')
  const contract = await Contract.deploy()

  await contract.waitForDeployment()
  const contractAddress = await contract.getAddress()
  fs.writeFileSync("contract.txt", contractAddress);
  console.log('log in contract.txt file: ', contractAddress)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
