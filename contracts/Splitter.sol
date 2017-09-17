pragma solidity ^0.4.6;

contract Splitter {
    
    address public owner;
    address public account1;
    address public account2;

    event LogAmountSplitted(uint value, address account1, address account2);
    
    function Splitter(address receiver1, address receiver2) 
        public
    {
        
        require(msg.sender != receiver1);
        require(receiver1 != receiver2);
        require(msg.sender != receiver2);

        require(msg.sender != 0);
        require(receiver1 != 0);
        require(receiver2 != 0);
        
        owner = msg.sender;
        account1 = receiver1;
        account2 = receiver2;
        
    }
    
    function split()
        public
        payable
        returns(bool)
    {
        
        require(msg.sender == owner);   
        require(msg.value > 0);
        
        account1.transfer(msg.value / 2);
        account2.transfer(msg.value / 2);

        LogAmountSplitted(msg.value / 2, account1, account2);
        
        return(true);   
        
    }
    
}