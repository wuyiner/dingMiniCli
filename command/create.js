const inquirer = require('inquirer')
const fs = require('fs-extra')
const path = require('path')

async function create(projectName, options){
  const cwd = process.cwd()
  console.log(cwd)
  const inCurrent = projectName === '.'
  const name = inCurrent ? path.relative('../', cwd) : projectName
  console.log(inCurrent, 'name:'+ name)
  const targetDir = path.resolve(cwd, projectName || '.')
  console.log('targetDir', targetDir)
  console.log('existsSync',fs.existsSync(targetDir))
}


module.exports = (...args) => {
  return create(...args).catch(err => {
    console.log(err)
    process.exit(1)
  })
}