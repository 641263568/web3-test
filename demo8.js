 let Web3 = require('web3')
 web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'))

/**
 * 查询最新的区块信息
 * 格式：web3.eth.getBlockNumber([callback])
 */

//  web3.eth.getBlockNumber().then(console.log)

/**
 * 查询具体区块
 * 格式：web3.eth.getBlock()返回指定块编号或块哈希对应的块
 * web3.eth.getBlock(blockHashOrBlockNumber [,returnTransactionObjects], [,callback])
 * 参数说明：blockHashOrBlockNumber，表示指定的区块
 * 取值可以为区块号；区块的hash值；字符串“earliest“（创世区块），“latest”（）最新区块，“pending”（当前开采区块中的一个）
 * returnTransiactionObjects，可选，表示是否将整个交易数据返回，true：返回详细交易信息，false（默认）：只返回块信息
 */
//  web3.eth.getBlock("latest").then(console.log)
//  web3.eth.getBlock("earliest").then(console.log)
 web3.eth.getBlock(4).then(console.log)
