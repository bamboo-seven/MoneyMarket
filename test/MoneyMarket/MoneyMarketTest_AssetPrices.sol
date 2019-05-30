pragma solidity >=0.4.25 <0.6.0;

import "truffle/Assert.sol";
import "./MoneyMarketTest.sol";

contract MoneyMarketTest_AssetPrices is MoneyMarketTest {

    function testHandlesUnsetPriceOracle() public {
        oracle = address(0);
        address asset = nextAddress();

        uint result = assetPrices(asset);
        Assert.equal(0, result, "returns 0 when oracle not set");
    }
}