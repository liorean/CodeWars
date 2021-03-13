const
  sumSquareEvenRootOdd =
    ns =>
      +ns.reduce((a,c)=>a+[c*c,c**.5][c&1],0).toFixed(2)
