const
  toCamelCase =
    s =>
      s.replace(
        /[-_]\w/g
       ,( [ , c ] ) => c.toUpperCase() )
