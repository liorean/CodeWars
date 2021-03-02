const
  fingered =
    ( [ s, ...r ], a ) => 
      s == undefined
     ?a
     :unfingered(
        r
       ,a
       +s.replace(
          /([^B-Z]+)|([^b-z]+)/g
         ,( ...[ , p, P ] ) =>
            p
           ?p.toUpperCase()
           :P.toLowerCase() ) )
 ,unfingered =
    ( [ s, ...r ], a ) =>
      s == undefined
     ?a
     :fingered( r , a + s )
 ,fatFingers = s => s && unfingered( s.split( /a/gi ), '' )
