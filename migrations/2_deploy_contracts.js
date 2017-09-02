var Splitter = artifacts.require("./Splitter.sol");

module.exports = function(deployer) {
  deployer.deploy(Splitter, "0xe2b5d5eb31c27062baa3d89ae335e6f19f76a979", "0xf174a5a0790324c46b20ba2a482128a8da32452e");
};
