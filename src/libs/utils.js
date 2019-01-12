/**
 *  utils.js
 *  Create By rehellinen
 *  Create On 2019/1/12 16:30
 */

const getDataByRowColumn = (data, row, column) => {
    const rows = data.slice(row.start - 1, row.end)
    const res = []
    for (let item of rows) {
        res.push(item.slice(column.start - 1, column.end))
    }
    return res
}

const log = (...rest) => {
    console.log(...rest)
}

export {getDataByRowColumn, log}
