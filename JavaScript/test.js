/**
 * @param {Function} cb Function to execute
 * @param {*[]} arguments Arguments passed to the function,
 * - single argument passed directly
 * - multiple arguments passed in an array
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
function test (cb) {
  const hrStart = process.hrtime()
  if (typeof cb !== 'function') throw new Error('cb must be a function')
  let totalTime = 0;

  (() => {
    console.log('\n----------------------------------------------------------------------------------------------------')
    console.log('\x1b[36m', arguments[0].name.padStart(50, ' '), '\x1b[0m')

    let start, res, end
    for (let i = 1; i < arguments.length; i++) {
      start = process.hrtime()

      Array.isArray(arguments[i]) ? res = cb(...arguments[i]) : res = cb(arguments[i])
      if (res !== undefined) process.stdout.write(`${i} \t-> \x1b[32m ${JSON.stringify(res).slice(0, 60).padEnd(63, ' ')} \x1b[0m`)

      end = process.hrtime(start)
      totalTime += end[1]
      process.stdout.write(`\t=> ${end[1] / 1000000} ~ms*\n`)
    }
  })()

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('----------------------------------------------------------------------------------------------------')
  process.stdout.write(`process time => ${hrEnd[1] / 1000000} ~ms`)
  console.log(`total time => \x1b[35m ${totalTime / 1000000} ~ms \x1b[0m`.padStart(77, ' '))
  console.log('====================================================================================================')
  for (const key in used) process.stdout.write(`${key}: ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB, `)
  console.log('\n====================================================================================================\n')
}

// module.exports = { test }
export { test }
