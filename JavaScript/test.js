/**
 * @param {Function} func Function to execute
 * @param {argument | arguments[]} arguments Arguments passed to the function,
 * - single argument passed directly
 * - multiple arguments passed in an array [ arg1, arg2 ]
 * - array arguments passed wrapped in an array [ [...], [...] ]
 *
 * @example
 * ```js
 * test(
 *    func,
 *    argument || [...arguments] || [[1, 2, 3]],
 * )
 * ```
 */
export default function test (func) {
  const hrStart = process.hrtime()
  const width = 120

  if (typeof func !== 'function') throw new Error('func must be a function')
  let totalTime = 0;

  (() => {
    const funcName = arguments[0].name
    console.log('\n' + '-'.repeat(width))
    console.log('\x1b[36m', arguments[0].name.padStart(Math.floor((width / 2) + (funcName.length / 2) - 1), ' '), '\x1b[0m\n')

    let start, res, end
    for (let i = 1; i < arguments.length; i++) {
      start = process.hrtime()

      Array.isArray(arguments[i]) ? res = func(...arguments[i]) : res = func(arguments[i])
      if (res !== undefined) process.stdout.write(`${i} \t-> \x1b[32m ${JSON.stringify(res).slice(0, 85).padEnd(85, ' ')} \x1b[0m`)

      end = process.hrtime(start)
      totalTime += end[1]
      process.stdout.write(`\t=> ${end[1] / 1_000_000} ~ms*\n`)
    }
  })()

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('-'.repeat(width))
  process.stdout.write(`process time => ${hrEnd[1] / 1_000_000} ~ms`)
  console.log(`total time => \x1b[35m ${totalTime / 1_000_000} ~ms \x1b[0m`.padStart(100, ' '))
  console.log('='.repeat(width))
  for (const key in used) process.stdout.write(`${key}: ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB        `)
  console.log('\n' + '='.repeat(width) + '\n')
}
