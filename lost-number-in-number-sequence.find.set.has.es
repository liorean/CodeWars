const
  findDeletedNumber =
    ( a, b, c = new Set(b) ) =>
      a.find( d => !c.has(d) ) || 0
