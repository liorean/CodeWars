const
  points =
    ( games ) =>
      games.reduce(
        ( acc, [home,,away] ) =>
          acc
         +( home<away
           ?0
           :home>away
           ?3
           :1 )
        ,0 )
