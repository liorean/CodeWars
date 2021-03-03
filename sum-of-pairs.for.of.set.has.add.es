const
  sumPairs =
    ( a, t, b = new Set ) => {
      for( const n of a ){
        if( b.has( t - n ) )
          return [ t - n, n ]
        b.add( n ) } }
