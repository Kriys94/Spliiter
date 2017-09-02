var Splitter = artifacts.require("./Splitter.sol");

contract('Splitter', function(accounts) {

    // console.log(Splitter.owner)
    // var contract;

    // beforeEach(function(){
    //     return Splitter.new(accounts[1], accounts[2], {from: accounts[0]})
    //     .then(function(instance) {
    //         contract = instance;
    //     });
    // });

    // it("should be owned by owner", function() {
    //     return contract.owner({from: accounts[0]})
    //     .then(function(_owner) {
    //         assert.strictEqual(_owner, accounts[0], "Contract is not owned by owner")
    //     });
    // });

    it("should split amount sent", function(){
        return Splitter.new(accounts[1], accounts[2], {from: accounts[0]})
        .then(function(contract) {
            var balance0 = web3.fromWei(web3.eth.getBalance(accounts[0]));
            var balance1 = web3.fromWei(web3.eth.getBalance(accounts[1]));
            var balance2 = web3.fromWei(web3.eth.getBalance(accounts[2]));
            console.log(balance0.toNumber());
            console.log(balance1.toNumber());
            console.log(balance2.toNumber());

            return contract.split({from: accounts[0], value:1000000000000000000})
            .then(function(transactionReceipt) {


                var balance0 = web3.fromWei(web3.eth.getBalance(accounts[0]));
                var balance1 = web3.fromWei(web3.eth.getBalance(accounts[1]));
                var balance2 = web3.fromWei(web3.eth.getBalance(accounts[2]));
                console.log(balance0.toNumber());
                console.log(balance1.toNumber());
                console.log(balance2.toNumber());
            });


        })




        // return contract.split({from: accounts[0], value: 1})
        // .then(function(transactionReceipt) {
        //     console.log( contract.account1({from: accounts[0]}));
        //     var balance =  web3.fromWei(web3.eth.getBalance(accounts[1]));
        //     console.log(balance);

        // })
    })

});


