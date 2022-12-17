/*
 * @Author: songchao songchao22@countrygarden.com.cn
 * @Date: 2022-06-20 16:29:41
 * @LastEditors: songchao songchao22@countrygarden.com.cn
 * @LastEditTime: 2022-06-21 10:29:19
 * @FilePath: /web3/demo9.js
 * @Description: 交易执行相关
 */
 let Web3 = require('web3')
 web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'))


 /**
  * 发送交易
  * web3.eth.sendTransaction(transactionObject [,callback] )
  * 交易参数transactionObject参数说明：
  * from：发送方
  * to：接收方
  * value：发送数值
  * gas：gas的限制
  * gasValue，每个gas的价格
  * data：若发送的为合约，则为合约的abi文件，否则为说明信息
  * noce：这是账号的前一个交易记数，这个值必须是十六进制，可以使用web3.js的web3.utils.toHex()转换
  */

//  web3.eth.sendTransaction({
//    from:'0xde7CAeD2830049e86394ad27544251025368C109', // 来自ganache account中的任意一个账户
//    to: '0x22866D88B7eDaca429A016efC49b49085B2AB8F2', // 来自ganache account中的另一个任意账户
//    value: web3.utils.toWei('1', 'ether'),
//    data:''
//  }).then(console.log)

 /**
  * 查询交易信息：返回具有指定哈希值的交易对象
  * 格式：web3.eth.getTransaction(transactionHash [,callback])
  * transactionHash参数说明：交易hash
  * 返回值：
  * hash：32位，stirng，交易hash
  * nonce： number，发送人在此之前进行的交易次数
  * blockHash：32字节，string，该交易所在区块的区块hash，打包中的区块其值为null
  * blockNumber：number，该交易所在区块的区块号，打包中的区块其值为null
  * transactionNumber：该交易在区块位置的位置索引，打包中的区块其值为null
  * from：交易发送人地址
  * to：交易接受人地址，对于合约创建其值为null
  * value：转账金额，以wei为单位
  * gasPrice：string，由发送人指定的gas价格
  * gas：number，由发送人指定的gas数量，以wei为单位
  * input：伴随交易发送的数据
  * 
  */

 web3.eth.getTransaction('0x014b444333b15432a08a055f742528e3335e654d803a5781c5568f43ec4e00a8').then(console.log)


 /**
  * 查询交易数据（进区块数据）:返回指定交易的收据对象，如果交易处于pending状态，则返回null
  * 格式：web3.eth.getTransactionReceipt(hash [,callback])
  * 
  */
  web3.eth.getTransactionReceipt('0x014b444333b15432a08a055f742528e3335e654d803a5781c5568f43ec4e00a8').then(console.log)
