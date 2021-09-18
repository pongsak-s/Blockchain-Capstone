pragma solidity >=0.4.21 <0.6.0;

import "./ERC721Mintable.sol";
import "./verifier.sol";


//  define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721MintableComplete {

	Verifier verifier;

	//define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address solAddress;
    }


	//  define an array of the above struct
	Solution[] solutions;

	//  define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private submittedSolutions;


	//  Create an event to emit when a solution is added
    event AddingSolution(uint256 index, address solAddress);

    constructor(address verifierAddress) public {
        verifier = Verifier(verifierAddress);
    }


	//  Create a function to add the solutions to the array and emit the event
    function addSolution(

        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory input
        ) public 
    {

        bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
        uint256 solIndex = solutions.length + 1;
        Solution memory solution = Solution(solIndex, msg.sender);
        submittedSolutions[key] = solution;
        solutions.push(solution);
        emit AddingSolution(solIndex, msg.sender);
    }

    function isSolutionExist(

        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory input
        ) public view returns (bool)
    {

        bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
        if(submittedSolutions[key].index > 0)
        {
            return true;
        }
        return false;
    }




	// Create a function to mint new NFT only after the solution has been verified
	//  - make sure the solution is unique (has not been used before)
	//  - make sure you handle metadata as well as tokenSuplly
    function mintAfterSolVerified(
    	address to, 
    	uint256 tokenId, 
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
    	uint256[2] memory input)
    public
    returns(bool success)
    {

        bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
        require(submittedSolutions[key].solAddress == address(0), "solution has been in the bucket");
        require(verifier.verifyTx(a,b,c, input), "not verified token");
        addSolution(a,b,c,input);
        return super.mint(to, tokenId);
    }
}




























