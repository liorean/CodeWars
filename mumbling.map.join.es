const
  accum =
    ( [...s] ) =>
      s
     .map(
        ( c, i ) =>
          c.toUpperCase()
         +c.toLowerCase()
           .repeat( i ) )
     .join`-`
      
