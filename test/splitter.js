var Splitter = artifacts.require("./Splitter.sol");

contract('Splitter', function(accounts) {

    var valueToSplit = 2;

    beforeEach(function(){
        return Splitter.new(accounts[1], accounts[2], {from: accounts[0]})
        .then(function(instance) {
            contract = instance;
        });
    });

    it("should be owned by owner", function() {
        return contract.owner({from: accounts[0]})
        .then(function(_owner) {
            assert.strictEqual(_owner, accounts[0], "Contract is not owned by owner")
        });
    });

    it("should split amount sent", function(){
        var balance1Before = web3.fromWei(web3.eth.getBalance(accounts[1]));
        var balance2Before = web3.fromWei(web3.eth.getBalance(accounts[2]));

        return contract.split({from: accounts[0], value: web3.toWei(valueToSplit, "ether")})
        .then(function(transactionReceipt) {

            var balance1After = web3.fromWei(web3.eth.getBalance(accounts[1]));
            var balance2After = web3.fromWei(web3.eth.getBalance(accounts[2]));

            assert.strictEqual(balance1Before.toNumber() + valueToSplit/2, balance1After.toNumber(), "Transfer not correctly splitted - Account 1")
            assert.strictEqual(balance2Before.toNumber() + valueToSplit/2, balance2After.toNumber(), "Transfer not correctly splitted - Account 2")


        });

    });

});


