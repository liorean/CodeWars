const 
  strangeMath =
    ( n, k ) =>
      Array.from( { length: -~n }, ( c, i ) => `${i}` ).sort().indexOf( `${k}` )
      
