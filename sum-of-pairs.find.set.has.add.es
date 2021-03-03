const
  sumPairs =
    ( a, t, b = new Set ) =>
      ( n => 
        n != undefined
       ?[ t - n, n ]
       :n )
      ( a.find(
          n =>
            b.has( t - n )
          ||( b.add( n )
             ,false ) ) )
