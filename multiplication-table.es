const
  multiplicationTable =
    ( n, a = Array.from( { length: n }, ( _, i ) => -~i ) ) =>
      Array.from( a, ( b, i ) => a.map( c => b*c ) )
