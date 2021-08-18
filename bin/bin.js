#!/usr/bin/env node
const { program } = require('commander')
const chalk = require('chalk')
const log = console.log

var processChild = require('child_process')
//version 版本号
//name 新项目名称
// program.version('1.0.8', '-v, --version')
//     .option('-d, --debug', 'output extra debugging')
//     .option('-s, --small', 'small pizza size')
//     .option('-p, --pizza-type <type>', 'flavour of pizza')
//     .option('--no-sauce', 'Remove sauce')
//     .option('-c, ---cheese [type]', 'Add cheese with optional type')
program
  .version('1.0.18', '-v, --version')
  .command('create <projectName>')
  .description('create a new project by dingding miniProgram template')
  .option('-p, --preset', 'preset')
  .action((name, options) => {
    // log(chalk.blue.bgRed.bold('clone from git'))
    console.log(name, options)
    require('../command/create')(name, options)
    // processChild.exec(
    //   `git clone https://wuyiner:wy2007320202@github.com/wuyiner/dingMiniProgramTemplate.git ${name}`,
    //   function (error, stdout, stderr) {
    //     if (error !== null) {
    //       console.log('exec error: ' + error)
    //       return
    //     }

    //     console.log('1111')
    //     log(chalk.green.bold('clone success'))
    //   }
    // )
  })

program.parse(process.argv)
// const options = program.opts()
// if (options) log(chalk.blue(JSON.stringify(options)))
