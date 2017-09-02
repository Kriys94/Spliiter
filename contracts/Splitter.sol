pragma solidity ^0.4.6;

contract Splitter {
    
    address public owner;
    address public account1;
    address public account2;
    
    function Splitter(address receiver1, address receiver2) {
        
        require(msg.sender != receiver1);
        require(receiver1 != receiver2);
        require(msg.sender != receiver2);
        
        owner = msg.sender;
        account1 = receiver1;
        account2 = receiver2;
        
    }
    
    function split()
        payable
        returns(bool)
    {
        
        require(msg.sender == owner);   
        require(msg.value > 0);
        
        account1.transfer(msg.value / 2);
        account2.transfer(msg.value / 2);
        
        return(true);   
        
    }
    
}