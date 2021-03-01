// Array destructuring instead of concat, nice looking but inefficient
const
  moveZeros =
    arr =>
      [ ...arr.filter( n => n !== 0 )
       ,...arr.filter( n => n === 0 ) ]
