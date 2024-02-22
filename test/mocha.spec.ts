import { expect } from "chai";
import { ethers } from "hardhat";

describe("Test Token", function () {
  it("Check the balance", async () => {
    const [deployer] = await ethers.getSigners();

    const tokenCls = await ethers.getContractFactory("VectorERC");
    const token = await tokenCls.deploy(9, 1000);

    expect(await token.name()).to.equal("test");
  });
});
