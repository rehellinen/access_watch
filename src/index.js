/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/1/12 15:37
 */
import {readFileSync} from 'fs'
import xlsx from 'node-xlsx'

import {config} from "./config"
import {getDataByRowColumn} from "./libs/utils"

// 读取完整excel
const excel = xlsx.parse(readFileSync(`${config.excel_dir}/test.xls`))
// 获取所需部分
const res = getDataByRowColumn(excel[0].data, config.row, config.column)

console.log(res)
