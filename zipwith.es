const
  zipWith =
    ( f, [a,...as], [b,...bs], c=[] ) =>
      undefined !== a && undefined !== b
     ?zipWith( f, as, bs, c.concat( f( a, b ) ) )
     :c
