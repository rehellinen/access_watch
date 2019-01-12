/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/1/12 15:45
 */
require('@babel/register')({
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-transform-runtime']
})

require('./src')
