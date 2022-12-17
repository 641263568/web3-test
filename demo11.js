/*
 * @Author: songchao songchao22@countrygarden.com.cn
 * @Date: 2022-06-20 16:29:41
 * @LastEditors: songchao songchao22@countrygarden.com.cn
 * @LastEditTime: 2022-06-21 09:21:34
 * @FilePath: /web3/demo9.js
 * @Description: 交易查询相关操作
 */
 let Web3 = require('web3')
 web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'))


 /**
  * 获取指定块中特定账户地址的余额
  * web3.eth.getBalance(address [,defaultBlock] [,callback])
  * 参数说明：defaultBlock: 区块号；区块的hash值；字符串“earliest“（创世区块），“latest”（）最新区块，“pending”（当前开采区块中的一个）
  */

//  以下第一个参数为从ganache的account中获取的账号
//  web3.eth.getBalance("0x22B17a8A2213E1453436ABc2eb208643067a8E54", function(err, result){
//    const balance = result.toString()
//    console.log(balance);
//    console.log(web3.utils.fromWei(balance, 'ether'));
//  })

 /**
  * 查询平均价格: 获取当前价格，该价格由最近的若干块的gas中值决定
  * 公式：web3.eth.getGasPrice([callback])
  */

 web3.eth.getGasPrice().then(res => {
   console.log(res);
   console.log(web3.utils.fromWei(res, 'ether'));
 })