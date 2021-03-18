const 
  strangeMath =
    ( n, k
     ,a =
        Array
       .from( { length: -~n }, ( c, i ) => i )
       .sort( ( a, b ) => `${a}` < `${b}` ? -1 : `${a}` > `${b}` ? 1 : 0 ) ) =>
      a.indexOf( k )
      
