// Two-pass isn't really desirable, but it passes
const
  moveZeros =
    arr =>
      arr
     .filter( n => n !== 0 )
     .concat(
       arr.filter( n => n === 0 ) )
