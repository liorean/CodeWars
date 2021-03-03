const
  iqTest =
    ( s, a = [ , ...s.split` ` ].map( n => n&1 ) ) =>
      a.indexOf( +( a.indexOf( 0 ) != a.lastIndexOf( 0 ) ) )
