pragma solidity >=0.4.25 <0.6.0;

import "./NonStandardToken.sol";

/**
  * @title The Faucet Test Token
  * @notice A simple test token that lets anyone get more of it.
  */
contract FaucetNonStandardToken is NonStandardToken {
    string public name;
    string public symbol;
    uint8 public decimals;

    constructor(uint256 _initialAmount, string memory _tokenName, uint8 _decimalUnits, string memory _tokenSymbol) public {
        totalSupply_ = _initialAmount;
        balances[msg.sender] = _initialAmount;
        name = _tokenName;
        symbol = _tokenSymbol;
        decimals = _decimalUnits;
    }

    /**
      * @dev Arbitrarily adds tokens to any account
      */
    function allocateTo(address _owner, uint256 value) public {
        balances[_owner] += value;
        totalSupply_ += value;
        emit Transfer(address(this), _owner, value);
    }
}
