const
  getCount =
    s =>
      ( s.match( /[aeiou]/g )
      ||[] )
     .length
