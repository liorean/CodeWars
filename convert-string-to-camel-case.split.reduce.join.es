const
  toCamelCase =
    s =>
      s
     .split(/_|-/)
     .reduce(
       ( a, [ c, ...cs ] ) =>
         [ a
          ,c.toUpperCase()
          ,...cs ]
        .join`` )
