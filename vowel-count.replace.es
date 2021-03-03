const
  getCount =
    s =>
      s.replace( /[^aeiou]/g, '' ).length
