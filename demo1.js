/*
 * @Author: songchao songchao22@countrygarden.com.cn
 * @Date: 2022-06-19 15:58:25
 * @LastEditors: songchao songchao22@countrygarden.com.cn
 * @LastEditTime: 2022-06-28 11:20:55
 * @FilePath: /web3/demo1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let Web3 = require("web3");
web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
/**
 * web3对象
 */
// console.log(web3);
/**
 * web3js查询函数
 */
// 注意以下是大写
console.log(Web3.modules);
// 查看连接节点信息
// web3.eth.getNodeInfo().then(console.log);
// 查看当前是否正在监听
// web3.eth.net.isListening().then(console.log);
// 查看网络id
// web3.eth.net.getId().then(console.log);
// 获取协议版本
// web3.eth.getProtocolVersion().then(console.log)
// web3.eth.net.getPeerCount().then(console.log)

/**
 * providers
 */
// web3js providers查询当前有效的通信服务提供器
// console.log(web3.providers);
// console.log(web3.eth.providers);
// console.log(web3.shh.providers);
// console.log(web3.bzz.providers);

// 查询当前设置的web3 provider
// console.log(web3.currentProvider);
// console.log(web3.eth.currentProvider);
// console.log(web3.shh.currentProvider);
// console.log(web3.bzz.currentProvider);

// 查询浏览器环境设置的web3 provider
// console.log(web3.givenProvider);
// console.log(web3.eth.givenProvider);
// console.log(web3.shh.givenProvider);
// console.log(web3.bzz.givenProvider);

// 设置/修改provider
// web3.setProvider(myProvider)
// web3.eth.givenProvider(myProvider)
// web3.shh.givenProvider(myProvider)
// web3.bzz.givenProvider(myProvider)
// web3.setProvider(new Web3.providers.HttpProvider("HTTP://192.168.42.100:7545 "))

/**
 * 第五节：批处理请求
 * 批处理请求就是将几个请求打包在一起提交
 * 执行时为串行执行
 * 因此速度并不会很快，它可以保证代码执行顺序
 * 在web3中使用batchRequest实现批处理
 */
// 格式
// new web3.batchRequest()
// new web3.eth.batchRequest()
// new web3.shh.batchRequest()
// new web3 .bzz.batchRequest()
// 方法
// add(request): 将请求对象添加到批处理中
// execute()： 执行批处理请求

// const abi = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_number",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "setNumber",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getNumber",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]

// const addr = '0x5382Dc70c13293Ca61465CcCaEb0D017F6C18d64'
// const contract = new web3.eth.Contract(abi, addr)
// const callback1 = () => {console.log('callback1 run');}
// const callback2 = () => {console.log('callback2 run');}

// const batch =  new web3.BatchRequest()
// // 操作账户：获取账户余额
// batch.add(web3.eth.getBalance.request('0x0444432bC0747651D89737d31A841127407a876f', 'latest', callback1))
// batch.add(web3.eth.getBalance.request('0x0444432bC0747651D89737d31A841127407a876f', 'latest', function(err, result) {
//     console.log(err);
//     console.log(result);
// }))
// // 操作合约
// batch.add(contract.methods.getNumber().call.request({from: '0x0444432bC0747651D89737d31A841127407a876f'}, callback2))
// batch.add(contract.methods.getNumber().call.request({from: '0x0444432bC0747651D89737d31A841127407a876f'}, function(err, result) {
//     console.log(err);
//     console.log(result);
// }))

// batch.execute()

// 第六节:
/**
 * 大数据处理：在js中，默认的数字精度较小，但是对于以太坊，推荐内部总是以wei来表示余额（大整数），只有显示余额给用户时，才转换为ether或其他单位，js中默认书的数字精度无法确切的表示wei
 * 因此在web3中，会自动添加一个依赖库bigNumber；
 * 在web3中，将数值转换为bigNumber类型的对象，bigNumber的精度非常高，不会丢失
 */
// const aa = 123456789012345678901234567890
// console.log(aa);

const bigNumber = require("bignumber.js");
// const balance = new bigNumber('123456789012345678901234567890')
// const balance1 = new bigNumber('123456789012345678901234567890.123456789012345678901234567890')
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString(2)); // 二进制
// console.log(balance.toString(10)); // 十进制
// console.log(balance1.toString(10)); // 显示所有的数字，但是若为浮点数，只会最多显示20位小数
// console.log(balance.toString(16)); // 十六进制
// console.log(web3.utils.isBigNumber(balance)); // 检查是否是bignumber类型数据

/**
 * 第七节：以太单位转换
 * 将给定的以wei为单位的值转换为其他单位的值
 * wei是最小的以太单位，应当总是以wei进行计算，尽在需要显示时进行计算
 * 公式：web3.utils.fromWei(number, [,unit]),这里的number实际也是使用字符串形式
 */

// console.log(web3.utils.fromWei('1', 'ether'));
// console.log(web3.utils.fromWei('1', 'finney'));
// console.log(web3.utils.fromWei('1', 'szabo'));
// console.log(web3.utils.fromWei('1', 'shannon'));

/**
 * 将给定的单位数值转换为以wei为单位的数值
 * 公式： web3.utils.toWei(number, [,unit])
 */

//  console.log(web3.utils.toWei('1', 'ether'));
//  console.log(web3.utils.toWei('1', 'finney'));
//  console.log(web3.utils.toWei('1', 'szabo'));
//  console.log(web3.utils.toWei('1', 'shannon'));

/**
 * 将任意给定值转换为16进制字符串。数值字符串将解释为数值，文本字符串将解释为utf-8字符串
 * 格式：web3.utils.toHex(mixed)
 */
// console.log(web3.utils.toHex(123));
// console.log(web3.utils.toHex('123'));
// console.log(web3.utils.toHex('hello'));
// console.log(web3.utils.toHex('你好'));
// console.log(web3.utils.toHex(new bigNumber(123)));

/**
 * 将十六进制转换为数值字符串,格式：web3.utils.hexToNumberString(hex)
 * 将十六进制转换为数值,格式：web3.utils.hexToNumber(hex)
 * 将任何数字转换为十六进制,格式：web3.utils.numberToHex(number)
 * 返回指定字符串的utf-8格式,格式：web3.utils.hexToUtf8(hex)
 * 返回指定字符串的utf-8格式,格式：web3.utils.hexToString(hex)
 * 将十六进制转换为utf-8,格式：web3.utils.toUtf8(hex)
 * 将十六进制转换为ascii格式：web3.utils.toAscii(hex)
 * 将十六进制转换为ascii格式：web3.utils.hexToAscii(hex)
 * 返回指定utf-8字符串的十六进制格式：web3.utils.utf8ToHex(string)
 * 返回指定字符串的十六进制格式：web3.utils.stringToHex(string)
 * ....太鸡毛多了...
 */

// console.log(web3.utils.hexToNumberString("0xea"));
// console.log(web3.utils.hexToNumber("0xea"));
// console.log(web3.utils.numberToHex("234"));
// console.log(web3.utils.hexToUtf8("0x23423"));
// console.log(web3.utils.hexToString("0x23423"));
// console.log(web3.utils.toUtf8("0x23423"));
// console.log(web3.utils.toAscii("0x23423"));
// console.log(web3.utils.hexToAscii("0x23423"));
// console.log(web3.utils.utf8ToHex("hello world"));
// console.log(web3.utils.stringToHex("hello world"));

/**
 * 检查地址：检查指定的字符串是否是有效的以太坊地址，
 * 格式：web3.utils.isAddress(address),过于简单，没有示例
 */
