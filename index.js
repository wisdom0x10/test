import enquirer from 'enquirer'
import { execa } from 'execa'

const { prompt } = enquirer

const versionIncrements = [
  'patch',
  'minor',
  'major',
]


async function build(){
  const { release } = await prompt({
    type: 'select',
    name: 'release',
    message: 'Select release type',
    choices: versionIncrements
      .map(i => `${i}`)
      .concat(['custom']),
  })
  console.log('release :>> ', release);
}

// build()

async function getBranch() {
  return (await execa('git', ['rev-parse', '--abbrev-ref', 'HEAD'])).stdout
}

async function getSha() {
  return (await execa('git', ['rev-parse', 'HEAD'])).stdout
}


const x = await getSha()
console.log('x :>> ', x);