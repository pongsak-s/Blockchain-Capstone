var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    var targetTotalSupply = 0;

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            this.contract.mint(account_one, 1, "temp_uri1");
            this.contract.mint(account_one, 2, "temp_uri2");
            this.contract.mint(account_one, 3, "temp_uri3");


            this.contract.mint(account_two, 4, "temp_uri4");
            this.contract.mint(account_two, 5, "temp_uri5");

            targetTotalSupply = 5; 
        })

        it('should return total supply', async function () { 
            var totalSupply = await this.contract.totalSupply.call();
            assert.equal(totalSupply, targetTotalSupply, "should have supplied as target");
            
        })

        it('should get token balance', async function () { 
            assert.equal(1,2, "not yet implemented");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            
            assert.equal(1,2, "not yet implemented");
        })

        it('should transfer token from one owner to another', async function () { 
            
            assert.equal(1,2, "not yet implemented");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
            
            assert.equal(1,2, "not yet implemented");
        })

        it('should fail when minting when address is not contract owner', async function () { 
            
            assert.equal(1,2, "not yet implemented");
        })

        it('should return contract owner', async function () { 
            
            assert.equal(1,2, "not yet implemented");
        })

    });
})