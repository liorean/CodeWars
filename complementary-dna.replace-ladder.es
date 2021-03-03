const
  DNAStrand =
    s =>
      s
     .replace(/A/g,'U')
     .replace(/T/g,'A')
     .replace(/U/g,'T')
     .replace(/C/g,'g')
     .replace(/G/g,'C')
     .replace(/g/g,'G')
