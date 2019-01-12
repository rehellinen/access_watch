/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/1/12 15:37
 */
import {readFileSync} from 'fs'
import xlsx from 'node-xlsx'
import chokidar from 'chokidar'
import axios from 'axios'

import {config} from "./config"
import {getDataByRowColumn, log} from "./libs/utils"

class Excel {
    start () {
        this.watch()
    }

    watch () {
        const watcher = chokidar.watch(config.excel_dir, {})
        // 检测文件增加
        watcher.on('add', path => {
            const excelRes = this.readExcel(path)
            this.http(excelRes)
        })
    }

    readExcel (path) {
        if (!(path.endsWith('xls') || path.endsWith('xlsx'))) {
            return
        }
        // 读取完整excel
        const excel = xlsx.parse(readFileSync(path))
        // 获取所需部分
        return getDataByRowColumn(excel[0].data, config.row, config.column)
    }

    async http (postData) {
        if (!postData) return
        const {data} = axios.post(config.api_url, {
            data: postData
        })
        log(data)
    }
}

new Excel().start()
