import pc from 'picocolors'
import inquirer from 'inquirer'

console.log(`I see a ${pc.red('red door')} and I want it painted ${pc.black('black')}`)

const { prompt } = inquirer
async function run() {
  const result = await prompt([
    {
      type: 'list',
      name: 'category',
      message: '请选择一个分类：',
      choices: ['水果', '蔬菜']
    },
    {
      type: 'list',
      name: 'item',
      when: (answers) => answers.category === '水果', // 当 category 为 "水果" 时才显示这个 prompt
      message: '请选择一个水果：',
      choices: ['苹果', '香蕉', '橙子']
    }
  ])

  console.log('result :>> ', result)
}

run()
