'use strict'
const test = require('./test.js').test
/*
  Given a valid (IPv4) IP address, return a defanged version of that IP address.
  A defanged IP address replaces every period "." with "[.]".

  Example 1:
    Input: address = "1.1.1.1"
    Output: "1[.]1[.]1[.]1"

  Example 2:
    Input: address = "255.100.50.0"
    Output: "255[.]100[.]50[.]0"

  Constraints:
    The given address is a valid IPv4 address.
*/

var defangIPaddr = function (address) {
  return address.replace(/\./g, '[.]')
}

function alt (address) {
  return [...address].map(val => val == '.' ? val = '[.]' : val).join('')
};

test(
  defangIPaddr('255.100.50.0'),
  alt('255.100.50.0')
)
