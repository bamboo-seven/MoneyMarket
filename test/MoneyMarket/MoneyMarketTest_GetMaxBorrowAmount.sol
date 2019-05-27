pragma solidity >=0.4.25 <0.6.0;

import "truffle/Assert.sol";
import "./MoneyMarketTest.sol";

contract MoneyMarketTest_GetMaxBorrowAmount is MoneyMarketTest {
    function testGetMaxBorrowAmount() public {
        address userAddress = address(this);
        address asset = address(this);

        // amount should be 0
        uint amount = getMaxBorrowAmount(userAddress, asset);

        Assert.equal(uint(0), amount, "test");
    }

}