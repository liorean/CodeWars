const
  fatFingers =
    s =>
      s==null
     ?s
     :s.replace(
        /[aA]([^aA]*)(?:[aA]|$)/g
       ,( ...[ , p ] ) => // (,p)
          p.replace(
            /([^A-Z]+)|([^a-z]+)/g
            ,( ...[ , p, P ] ) => // (,p,P)
               p
              ?p.toUpperCase()
              :P.toLowerCase() ) )
