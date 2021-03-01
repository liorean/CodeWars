const
  oddOrEven =
    ( numbers ) =>
      [ 'even'
       ,'odd' ]
      [ numbers.reduce(
          ( acc, number ) => 
            ( acc + number ) & 1 // We're only interested in the ones bit.
         ,0 ) ]
