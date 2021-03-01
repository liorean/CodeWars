const
  toBinary =
    ( n, a = '' ) =>
      n|0 > 0 // truncate decimals because of the following
     ?toBinary(
        n/2 // replacement for n>>1  to handle too-large integral floats
       ,(n & 1) + a )
     :a
 ,addBinary =
    ( a, b ) =>
      toBinary( a + b )
