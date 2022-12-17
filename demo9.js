/*
 * @Author: songchao songchao22@countrygarden.com.cn
 * @Date: 2022-06-20 16:29:41
 * @LastEditors: songchao songchao22@countrygarden.com.cn
 * @LastEditTime: 2022-06-20 17:27:26
 * @FilePath: /web3/demo9.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
 let Web3 = require('web3')
 web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'))

/**
 * 查询区块的交易信息
 * 格式：web3.eth.getTransactionFromBlock(hashStringOrNumber, indexNumber, [,callback])
 * 参数说明：
 * hashStringOrNumber：指定区块
 * 区块号；区块hash值，字符串“earliest“（创世区块），“latest”（）最新区块，“pending”（当前开采区块中的一个）
 * indexNumber: 区块中交易的索引
 * 
 * web3.eth.getBlockTransactionCount: 获取指定发出的交易数量
 */

// web3.eth.getTransactionFromBlock('0x1fe003e8ba788e14a3a390a7d2ca9d6331b3acee8fe18c0cd6112f952ea0153b', 0).then(console.log)
// web3.eth.getBlockTransactionCount('0x1fe003e8ba788e14a3a390a7d2ca9d6331b3acee8fe18c0cd6112f952ea0153b').then(console.log)
// web3.eth.getBlock('latest').then(console.log)
// web3.eth.getTransactionFromBlock('latest').then(console.log)
// web3.eth.getBlockTransactionCount('latest').then(console.log)