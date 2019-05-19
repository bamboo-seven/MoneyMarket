pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "./MoneyMarketTest.sol";

contract MoneyMarketTest_GetMaxWithdrawAmount is MoneyMarketTest {
    function testGetMaxWithdrawAmount() public {
        address userAddress = address(this);
        address asset = address(this);
        
        // amount should be 0
        uint amount = getMaxWithdrawAmount(userAddress, asset);

        Assert.equal(uint(0), amount, "test");
    }
}