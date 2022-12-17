/*
 * @Author: songchao songchao22@countrygarden.com.cn
 * @Date: 2022-06-20 16:29:41
 * @LastEditors: songchao songchao22@countrygarden.com.cn
 * @LastEditTime: 2022-06-24 11:55:12
 * @FilePath: /web3/demo9.js
 * @Description: 调用合约事件
 */
let Web3 = require("web3");
const fs = require("fs");
web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

/**
 * 调用智能合约读（view，pure）函数时，一般使用call
 * 格式：myContract.methods.myMethods([params1 [,param2 [...]]]).call(options [,defaultBlock [,callback]])
 * 参数说明：
 * params1: 函数的参数
 * options -Object: 选项，包含如下字段
 * from: string(可选)，调用交易的地址
 * gasPrice： string（可选），“交易”的每个gas的价格
 * gas： number（可选），“交易”的gas的限制
 */

const myContractAbi = JSON.parse(
  fs.readFileSync("./myContractWithEvent.abi").toString()
);
const myContract = new web3.eth.Contract(
  myContractAbi,
  "0x00fFd4386a22A487e2997c955D87d79F8dF7E9A7"
); // 已创建合约，有合约地址

/**
 * 调用智能合约写交易，一般使用send，相当于发送了交易
 * 格式：myContract.methods.myMethods([params1 [,param2 [...]]]).send(options [,callback])
 * 参数说明：
 * params1: 函数的参数
 * 返回结果的触发事件：
 * transactionHash: 返回string: 发送交易且得到交易hash值后立即触发
 * receipt: 返回object，当收到交易“收据”时触发，合约数据带有的不是“logs“，而是以事件名称为键，事件本身为值的“events”
 * confirmation：返回number，object：从区块被挖到的第一个区块确认开始，每次确认都会触发，知道第24次确认。触发时第一个参数为收到的确认数，第二个参数为收到的交易收据。
 * error：返回error和object｜undefined， 交易发送过程中出错时发生。如果交易被网络拒绝且带有交易数据，第二个参数就是该交易数据。
 */

// myContract.methods
//   .emitEvent("wangwu")
//   .send({
//     from: "0x22B17a8A2213E1453436ABc2eb208643067a8E54",
//   })
//   .on("receipt", function (receipt) {
//     console.log(receipt);
//     myContract.methods.getNumber().call((err, result) => {
//       console.log(result);
//     });
//   });

/**
 * 执行事件查询
 * 区块链是一个由区块组成的列表，这些块的交易内容基本上是交易记录。每个交易都有一个附加的交易日志，事件结果存放在交易日志里。合约发出的事件，可以使用合约地址访问。
 * 格式：myContract.getPastEvents(event [,options] [,callback])
 */

myContract.getPastEvents(
  "AllEvents",
  {
    fromBlock: 0,
    toBlock: "latest",
  },
  (err, result) => {
    console.log(result);
  }
);
