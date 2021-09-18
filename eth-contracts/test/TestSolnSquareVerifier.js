const SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
const Verifier = artifacts.require("Verifier");

const proofData = {
    "proof": {
      "a": [
        "0x17c2cc7d6f2164b0bf2ad500bb5e59e2eef4f253b9afa247c0734cfb18f08e3b",
        "0x0a1ea7e057772b913c5bfbea8e38eaf7fd0cc530ea2881548191a23b77db7a3d"
      ],
      "b": [
        [
          "0x199a19ad561c61e504a3345ab7564d1a88ed2f0474c95bebd9bdb5b27610ff18",
          "0x26bee2dc0e28d9389131701a96a74364dbec2fed43eeca1376d99b00d70d3c08"
        ],
        [
          "0x0c2d2ce6095ae440a299496483e7dbbcb3aaecd142a61ef87a8b950a0a11cfef",
          "0x1e8899b3c2403f2ad43a9c982b12fd289592ca58fe9d9fbf99d4b5dece03b61b"
        ]
      ],
      "c": [
        "0x00e278293b27b1e42842a820c6fb3f843712e0fbff063e2778e4175b0ec34e2f",
        "0x05a107b27f2828cfccf0f8cfceae401773ad26eb2dc989539d1d13c68749fa91"
      ]
    },
    "inputs": [
      "0x0000000000000000000000000000000000000000000000000000000000000009",
      "0x0000000000000000000000000000000000000000000000000000000000000001"
    ]
  };

contract("TestSolutionSquareVerifier", (accounts) => {
  const proof = proofData.proof;
  const correctProofInputs = proofData.inputs;

  describe("Setup", function () {
    beforeEach(async function () {
      const VerifierContract = await Verifier.new({ from: accounts[0] });
      this.contract = await SolnSquareVerifier.new(
        VerifierContract.address,
        { from: accounts[0] }
      );
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it("Test if a solution can be added to contract - SolnSquareVerifier", async function () {
      
      await this.contract.addSolution(
        proof.a,
        proof.b,
        proof.c,
        correctProofInputs,
        { from: accounts[0] }
      );

      var checkup = await this.contract.isSolutionExist(
        proof.a,
        proof.b,
        proof.c,
        correctProofInputs,
        { from: accounts[0] }
      );

      assert.equal(checkup, true);
    });

    //Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it("Test if an ERC721 token can be minted for contract - SolnSquareVerifier", async function () {
      await this.contract.mintAfterSolVerified(
        accounts[1],
        1,
        proof.a,
        proof.b,
        proof.c,
        correctProofInputs,
        { from: accounts[0] }
      );
      var owner = await this.contract.ownerOf(1);

      //assert.equal(isSuccess, true, "operation not complete");
      assert.equal(owner,accounts[1],"owner not right");
    });
  });
});
