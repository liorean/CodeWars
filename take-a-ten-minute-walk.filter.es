const
  isValidWalk =
    a => ( console.log(a),
      10 === a.length
    &&!(a
       .filter( c=> /n/.test( c ) )
       .length
       -a
       .filter( c=> /s/.test( c ) )
       .length )
    &&!(a
       .filter( c=> /e/.test( c ) )
       .length
       -a
       .filter( c=> /w/.test( c ) )
       .length ) )
