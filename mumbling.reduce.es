const
  accum =
    ( [...s] ) =>
      s
     .reduce(
        ( a, c, i ) =>
          a
         +'-'
         +c.toUpperCase()
         +c.toLowerCase()
           .repeat( i ) )
