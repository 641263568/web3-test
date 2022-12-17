/*
 * @Author: songchao songchao22@countrygarden.com.cn
 * @Date: 2022-06-20 16:29:41
 * @LastEditors: songchao songchao22@countrygarden.com.cn
 * @LastEditTime: 2022-06-21 14:23:55
 * @FilePath: /web3/demo9.js
 * @Description: 发布新合约和获取已上链合约
 */
let Web3 = require("web3");
const fs = require("fs");
web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

/**
 * 准备合约
 * 在一个智能合约中，我们可以编写内容：函数，结构体，构造函数，状态变量，事件，枚举类型等等
 * 一个合约想要部署到区块链，需要编译为字节码文件，运行在区块链上
 * 一个合约想要被外部的应用程序（如DAPP）访问，需要编译为ABI文件（应用程序二进制接口文件），供应用程序调用
 * 部署合约分为以下两种形式：
 * 1. 区块链上已经部署了合约，通过代码将js中的合约与区块链上的合约进行关联
 * 2. 直接通过js代码在区块链上部署一个新合约
 */

const myContractAbi = JSON.parse(
  fs.readFileSync("./myContract.abi").toString()
);
let myContract = new web3.eth.Contract(myContractAbi); // 新合约，没有合约地址
// 以下为字节码
const data =
  "608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633fb5c1cb1461003b578063f2c9ecd814610057575b600080fd5b6100556004803603810190610050919061009d565b610075565b005b61005f61007f565b60405161006c91906100d9565b60405180910390f35b8060008190555050565b60008054905090565b60008135905061009781610103565b92915050565b6000602082840312156100b3576100b26100fe565b5b60006100c184828501610088565b91505092915050565b6100d3816100f4565b82525050565b60006020820190506100ee60008301846100ca565b92915050565b6000819050919050565b600080fd5b61010c816100f4565b811461011757600080fd5b5056fea264697066735822122026b2edc6f1aed5db0de5c41f10bcf30eb240f54881d8c1f13d889151efde1bba64736f6c63430008070033";
let myContractAddr;
// myContract
//   .deploy({
//     data,
//   })
//   .send(
//     {
//       from: "0x22B17a8A2213E1453436ABc2eb208643067a8E54",
//       gas: 1500000,
//       gasPrice: "1000000",
//     },
//     function (err, result) {
//       myContractAddr = result;
//       console.log(result);
//     }
//   );

myContract = new web3.eth.Contract(
  myContractAbi,
  myContractAddr || "0xAAabEff710087293e1fb2aB4BDCee922FeDaEd0B"
); // 已创建合约，有合约地址
console.log(myContract.options.address);
