const
  DNAStrand =
    ( s, p={A:'T',T:'A',C:'G',G:'C'} ) =>
      s.replace(
        /[ATCG]/g
       ,c => p[c] )
