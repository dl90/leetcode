/**
 * @author Don (dl90)
 * @date December 27, 2019
 */

const performance = require('perf_hooks')

diffieHellman()
function diffieHellman () {
  const start = performance.performance.now()
  const primesArr = primeGen(1000)
  const inclusiveRandomGen = (max) => { return Math.floor(Math.random() * max) }

  // Generates public prime and primitive root values
  const populate = (obj) => {
    const randomPosition = inclusiveRandomGen(primesArr.length)
    const root = primitiveRoot(primesArr[randomPosition]).map(ele => parseInt(ele))

    obj['public-prime'] = (primesArr[randomPosition])
    obj['public-primitiveRoot'] = root[inclusiveRandomGen(root.length)]
    return obj
  }

  const publicKey = {}; const personA = {}; const personB = {}
  populate(publicKey);

  [personA.name, personB.name] = ['Bob', 'Rob'];
  [personA.prime, personB.prime] = [publicKey['public-prime'], publicKey['public-prime']];
  [personA.primitiveRoot, personB.primitiveRoot] = [publicKey['public-primitiveRoot'], publicKey['public-primitiveRoot']]

  // Generates a different secret for each person
  const secretValue = (person) => {
    const [min, max] = [1, person.prime - 2]
    const secret = Math.floor(Math.random() * (max - min + 1)) + min
    person.secret = secret
    return person
  }

  secretValue(personA)
  secretValue(personB)

  // Calculate the public keys to send to each other
  const send = (person) => {
    const start = performance.performance.now()

    const [base, secret, prime] = [person.primitiveRoot, person.secret, person.prime]
    const send = parseInt((BigInt(base) ** BigInt(secret)) % BigInt(prime))
    person.send = send

    const end = performance.performance.now()
    console.info((`\t  ${person.name}'s Key-gen Runtime: \t ${(end - start)} ms`))
    return person
  }

  send(personA)
  send(personB)

  // Calculate the private symmetic key
  const privateSymmetricKey = (person, encryptedKey) => {
    const start = performance.performance.now()

    const [base, secret, prime] = [encryptedKey, person.secret, person.prime]
    const key = parseInt((BigInt(base) ** BigInt(secret)) % BigInt(prime))
    person.privateSymmetricKey = key

    const end = performance.performance.now()
    console.info((`\t  ${person.name}'s Key-cal Runtime: \t ${(end - start)} ms`))
    return person
  }

  const encryptedKeys = {}
  encryptedKeys.personA = personA.send
  encryptedKeys.personB = personB.send

  privateSymmetricKey(personA, encryptedKeys.personB)
  privateSymmetricKey(personB, encryptedKeys.personA)

  console.log({ personA })
  console.log({ personB })

  const end = performance.performance.now()
  console.info((`diffieHellman Runtime: \t ${(end - start)} ms`))
}

/**
 * Naive prime gemerator (Slow & exponential compute time).
 * @param {Number} index the number to generate primes up to.
 * @return Array of prime numbers.
 */
function primeGen (index) {
  const start = performance.performance.now()
  const primes = []

  for (let seed = 1; seed <= index; seed++) {
    if (seed === 1) continue
    if (seed === 2) { primes.push(2); continue }

    let state = true
    for (let divisor = 2; divisor * divisor <= seed; divisor++) {
      if (seed % divisor === 0) {
        state = false
        break
      }
    }
    if (state) primes.push(seed)
  }

  const end = performance.performance.now()
  console.info((`\tprimeGen Runtime: \t ${(end - start)} ms`))
  return primes
}

/**
 * Calculates the primitive roots of a number (really slow & uses big int).
 * @param {Number} input Prime number to calculate primitive roots from.
 * @return Array of primitive roots for the prime number.
 */
function primitiveRoot (input) {
  const start = performance.performance.now()
  const bigIntInput = BigInt(input)
  const roots = []

  for (let num = 0n; num < bigIntInput; num++) {
    const arr = []

    for (let index = 0n; index < bigIntInput - 1n; index++) {
      const calcResult = (num ** index) % bigIntInput
      arr.push(calcResult)
    }

    if (isUnique(arr)) roots.push(num)
    // console.log(`Base Number: ${num}, Primitive root calc: ${arr}\n`);
  }

  const end = performance.performance.now()
  console.info((`\tprimitiveRoot Runtime: \t ${(end - start)} ms`))
  return roots
}

/**
 * Checks array for uniqueness.
 * @param {Array} arr
 * @return Boolean result
 */
function isUnique (arr) {
  const set = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return false
    set.add(arr[i], true)
  }
  return true
}
