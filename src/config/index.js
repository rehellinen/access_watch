/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/1/12 15:39
 */
import {resolve} from "path"

const r = path => resolve(__dirname, '../../', path)

const config = {
    excel_dir: r('excel'),
    row: {
        start: 4,
        end: 8
    },
    column: {
        start: 1,
        end: 10
    }
}

export {config}
