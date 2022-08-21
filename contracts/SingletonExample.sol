pragma solidity 0.5.11;


contract SingletonExample {
    address public owner;

    constructor(address _owner) public {
        owner = _owner;
    }

    function setOwner(address _owner) external {
        owner = _owner;
    }
}