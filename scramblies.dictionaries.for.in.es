const
  scramble =
    ( s
     ,w
     ,f = ( a, c ) => ( a[c] = -~a[c], a )
     ,S = s.split``.reduce( f, {} )
     ,W = w.split``.reduce( f, {} ) ) => {
      console.log(s,w)
      for ( const c in W )
        if ( !( c in S ) || ( S[c] < W[c] ) )
          return false
      return true}
