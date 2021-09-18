const ERC721MintableComplete = artifacts.require("ERC721MintableComplete");
var Verifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function (deployer) {
  deployer.deploy(ERC721MintableComplete);
  deployer.deploy(Verifier).then(() => {
    return deployer.deploy(
      SolnSquareVerifier,
      Verifier.address
    );
  });
};