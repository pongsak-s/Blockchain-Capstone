var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    var targetTotalSupply = 0;
    var targetBalance = 0;

    const targetTokenUri = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/';

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, 1);
            await this.contract.mint(account_one, 2);
            await this.contract.mint(account_one, 3);


            await this.contract.mint(account_two, 4);
            await this.contract.mint(account_two, 5);

            targetTotalSupply = 5; //total supply
            targetBalance = 2; //balance for account#2
        })

        it('should return total supply', async function () { 
            var totalSupply = await this.contract.totalSupply.call();
            assert.equal(totalSupply, targetTotalSupply, "should have supplied as target");
            
        })

        it('should get token balance', async function () { 

            var balance = await this.contract.balanceOf.call(account_two);
            assert.equal(balance,targetBalance, "should get token balance for account#2");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 

            //arrange
            var tokenId = 3;

            //act
            var tokenURI = await this.contract.tokenURI.call(tokenId);
            
            assert.equal(tokenURI, targetTokenUri + tokenId, "should return token uri targetTokenUri + tokenId");
        })

        it('should transfer token from one owner to another', async function () { 

            //arrange
            var theFirstOwner = account_one;
            var tokenId = 1;
            var theSecondOwner = account_two;

            //act
            await this.contract.transferFrom(theFirstOwner, theSecondOwner, tokenId, {from: account_one});
            var owner = await this.contract.ownerOf(tokenId);
            
            //assert
            assert.equal(owner, theSecondOwner, "should transfer token from account_one to account_two");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 

            //arrange
            var isError = false;

            //act
            try {
                await this.contract.mint(account_one, 1, {from: account_two});
            } catch(e) 
            {
                isError = true;
            }

            //assert
            assert.equal(isError, true, "should fail when minting with account_two (not contract owner)");


        })

        it('should return contract owner', async function () { 
            //arrange & act
            var owner = await this.contract.owner.call({from: account_one });

            // assert
            assert.equal(owner, account_one, "should return contract owner as account_one");
        })

    });
})