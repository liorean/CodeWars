const
  doubleton =
    n => {
      while(true)
        if( 2 == new Set( [...`${++n}`] ).size )
          return n }
