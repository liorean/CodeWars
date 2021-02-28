const
  toCamelCase =
    s =>
      s
     .split(/[-_](\w)/)
     .reduce(
        ( a, s, i ) =>
          a.concat(
            i & 1
           ?s.toUpperCase()
           :s ) )
