const
  score =
    ([...dice]) => 
      ( ([,a,b,c,d,e,f,g,h,i,j]) =>
          ( a|0 && 1000 )
         +( b|0 && 200 )
         +( c|0 && 100 )
         +( d|0 && 200 )
         +( e|0 && 300 )
         +( f|0 && 400 )
         +( g|0 && 500 )
         +( h|0 && 100 )
         +( i|0 && 50 )
         +( j|0 && 600 ))
      ( /^(111)?(11)?(1)?(222)?2*(333)?3*?(444)?4*?(555)?(55)?(5)?(666)?6*$/
       .exec( dice.sort().join`` ) )