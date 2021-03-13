const
  makeAWindow =
    ( n,b='-'.repeat(n),d='.'.repeat(n),l=`-${b}-${b}-`
     ,p=Array.from({length:n},_=>`|${d}|${d}|`)) =>
      [l,...p,`|${b}+${b}|`,...p,l].join`
`
