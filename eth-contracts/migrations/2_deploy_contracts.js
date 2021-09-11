// migrating the appropriate contracts
// var SquareVerifier = artifacts.require("./SquareVerifier.sol");
// var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
// var ERC721MintableComplete = artifacts.require("./ERC721Mintable.sol");

const ERC721MintableComplete = artifacts.require("ERC721MintableComplete");
var Verifier = artifacts.require("Verifier");


module.exports = function(deployer) {
  deployer.deploy(Verifier);
  // deployer.deploy(SolnSquareVerifier);
  deployer.deploy(ERC721MintableComplete);
  
};
