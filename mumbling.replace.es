const
  accum = 
    s => 
      s.replace(
        /\w/g
       ,( c, i ) =>
          ( i
           ?'-'
           :'' )
         +c.toUpperCase()
         +c.toLowerCase()
           .repeat(i) )
