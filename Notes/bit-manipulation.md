# Bit Manipulation

| Operator |  Name                 | Description                                     |
| :------- | :-------------------- | :---------------------------------------------- |
| &        | AND                   | Sets each bit to 1 if both bits are 1           |
| \|       | OR                    | Sets each bit to 1 if one of two bits is 1      |
| ^        | XOR                   | Sets each bit to 1 if only one of two bits is 1 |
| ~        | NOT                   | Inverts all the bits                            |
| <<       | Zero fill left shift  | Shifts left by pushing zeros in from the right and let the leftmost bits fall off |
| >>       | Signed right shift    | Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off |
| >>>      | Zero fill right shift | Shifts right by pushing zeros in from the left, and let the rightmost bits fall off |

---

## JavaScript uses 32 bits signed integers

1. Positives and negatives are represented as twos complement.
1. Before a bitwise operation is performed, JavaScript converts numbers to 32 bit signed integers.
1. After the bitwise operation is performed, the result is converted back to 64 bit JavaScript numbers.

The two’s complement of an integer A is -(A + 1)

```javascript
00000000000000000000000000000101 (5)
11111111111111111111111111111010 (~5 = -6)
```

```javascript
// Decimal to Binary
(decimal >>> 0).toString(2);

// Binary (String) to Decimal
// Note: binary needs to be 64 bit for negative numbers
(parseInt("11111111111111111111111111111010", 2) [.toString(10)]
```

---

### binary

 > 0b111 => 7
 >
 > 0B1111 => 15

### octal

leading 0 with following number between [1 - 8], not available in strict mode.
 > 01 => 1
 >
 > 010 => 8

### hex

leading 0x || 0X with following char between [1 - F]
>0xAA => 170
>
>0XFF => 255

---

## Addition

```text
Binary of 3 + 7 => 1010
    011 (3)
    111 (7)
    XOR
=>  100 (4)

    011
    111
    AND
=>  011 (3) this is the carry we shift << 1, so it becomes 110 or 6

    100
    110 (carry)
    XOR
=>  010 (2) check for carry again

    100
    110
    AND
=>  100 (4) << 1

    010
   1000 (carry)
    XOR
=> 1010 (10)
```

```javascript
function add(a, b) {
  if (!a) return b;
  if (!b) return a;

  let carry;
  while (b) {
    carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
};
```

## Subtraction

```text
Binary of 7 - 10 => 11111111111111111111111111111101 (-3)
    7 + (-10) => 7 + 2's complement 10

    1010
    NOT +1
=>  11111111111111111111111111110110 (-10)

    00000000000000000000000000000111 (7)
    11111111111111111111111111110110 (-10)
    XOR
=>  11111111111111111111111111110001 (-15)

    00000000000000000000000000000111
    11111111111111111111111111110110
    AND
    00000000000000000000000000000110 (6)
    << 1
=>  1100 (carry)

    11111111111111111111111111110001
    00000000000000000000000000001100 (carry)
    XOR
=>  11111111111111111111111111111101 (-3)
```

```text
Binary of 3 - -9 => 1100 (12)
    11111111111111111111111111110111 (-9)
    NOT + 1
=>  00000000000000000000000000001001 (9)

    00000000000000000000000000000011 (3)
    00000000000000000000000000001001 (9)
    XOR
=>  00000000000000000000000000001010 (10)

    00000000000000000000000000000011
    00000000000000000000000000001001
    AND
    00000000000000000000000000000001 (1)
    << 1
=>  10 (carry)

    00000000000000000000000000001010 (10)
    00000000000000000000000000000010 (carry)
    XOR
=>  00000000000000000000000000001000 (8)

    00000000000000000000000000001010
    00000000000000000000000000000010
    AND
    00000000000000000000000000000010 (2)
    << 1
=>  100 (carry)

    00000000000000000000000000001000 (8)
    00000000000000000000000000000100 (carry)
    XOR
=>  00000000000000000000000000001100 (12)
```

---

Transforming falsy to boolean (-1 => false)

> Boolean(~(-1)) => false

---

Bit masking using &

```js
const mask = 0b1111111111 // 1023
const num = 0b1000000000001111 // 32783
/*
  1000000000001111
  0000001111111111
  AND
  0000000000001111 (15)
*/
console.log(num & mask) // 15
```
