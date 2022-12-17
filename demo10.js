/*
 * @Author: songchao songchao22@countrygarden.com.cn
 * @Date: 2022-06-20 16:29:41
 * @LastEditors: songchao songchao22@countrygarden.com.cn
 * @LastEditTime: 2022-06-20 17:42:29
 * @FilePath: /web3/demo9.js
 * @Description: 交易操作
 */
 let Web3 = require('web3')
 web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'))

 /**
  * 获取当前节点控制的账户列表
  * 格式：web3.eth.getAccounts([callback])
  */

//  web3.eth.getAccounts().then(console.log)

 /**
  * 创建一个账号
  * web3.eth.personal.newAccnout(password [,callback])
  */

//  web3.eth.personal.newAccount("@qwe123").then(console.log)
//  web3.eth.getAccounts().then(console.log)

 /**
  * 检查节点是否在正在挖矿, 格式： web3.eth.isMining([callback]) 
  * 获取当前接收挖矿奖励的账户地址, 格式： web3.eth.getCoinbase([callback]) 
  */
  
web3.eth.isMining().then(console.log)
web3.eth.getCoinbase().then(console.log)