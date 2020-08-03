const R = require ('ramda')

const double = R.multiply (2)
const list = [ 1, 2, 4, 8 ]

const result = R.map (double) (list)
const sum = R.reduce (R.add) (0) (list)

const record = {
  user: 'bill123',
  name: 'Bill Bob',
  age: 20,
}

const x =
  'lorem ipsum madas lorem ipsum madas lorem ipsum madas lorem ipsum madas lorem ipsum madas lorem ipsum madas lorem ipsum madas lorem ipsum madas lorem ipsum madas lorem ipsum madas lorem ipsum madas lorem ipsum madas '

const newRecord = R.evolve ({age: R.inc}) (record)

const a = R.pipe (
  R.add (10),
  R.subtract (5),
  R.divide (2),
  R.add (20),
  R.negate,
) (10)

console.log (a)
console.log (newRecord)
console.log (result)
console.log (sum)
