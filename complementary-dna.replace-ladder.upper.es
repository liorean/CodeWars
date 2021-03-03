const
  DNAStrand =
    s =>
      s
     .replace( /A/g, 't' )
     .replace( /T/g, 'A' )
     .replace( /C/g, 'g' )
     .replace( /G/g, 'C' )
     .toUpperCase()
