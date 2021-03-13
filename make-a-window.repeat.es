const
  makeAWindow =
    ( n,[h,f]='-.',b=h.repeat(n),d=f.repeat(n),l=`-${b}-${b}-`
     ,p=Array.from({length:n},_=>`|${d}|${d}|`)) =>
      [l,...p,`|${b}+${b}|`,...p,l].join`
`
