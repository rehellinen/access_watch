/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/1/12 15:37
 */

import {config} from "./config"
import {readFileSync} from 'fs'
import xlsx from 'node-xlsx'

const excel = xlsx.parse(readFileSync(`${config.excel_dir}/test.xls`))

console.log(excel[0].data[1])
