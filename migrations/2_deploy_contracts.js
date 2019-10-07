/*const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
};*/
var Votacion = artifacts.require("./Votacion.sol");
module.exports = function(deployer) {
  deployer.deploy(Votacion, ['Ramon', 'Alberto'], {gas: 8900000});
};