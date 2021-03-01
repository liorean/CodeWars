const
  points =
    ( [ [ home, , away ], ...games ] ) =>
      ( home < away
       ?0
       :home > away
       ?3
       :1 )
     +( games.length && points( games ) )
