/*
 * @Author: songchao songchao22@countrygarden.com.cn
 * @Date: 2022-06-20 16:29:41
 * @LastEditors: songchao songchao22@countrygarden.com.cn
 * @LastEditTime: 2022-06-21 11:01:33
 * @FilePath: /web3/demo9.js
 * @Description: 合约交互
 */
 let Web3 = require('web3')
 web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'))

 /**
  * 应用程序二进制接口
  * ABI相当于智能合约暴露出来的标准接口，通过这个接口就可以将智能合约转换成别的应用程序中的对象实例，通过这个对象实例就可以和智能合约交互了。
  * ABI以json数据格式展现，json格式中不能添加注释。
  * ABI文件作用：
  * 将一个智能合约编译为ABI后，即可将ABI文件传送给web3.js（或其他SDK），则web3.js可以根据这些接口类型构建出一个js对象，用此js对象即可操作合约。
  */

