/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/1/12 15:39
 */
import {resolve} from "path"

const r = path => resolve(__dirname, '../../', path)

const config = {
    excel_dir: r('excel')
}

export {config}
