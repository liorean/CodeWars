const
  makeAWindow =
    ( n
     ,[h,f]='-.'
     ,l=h.padEnd(n+n+3,h)
     ,p=Array.from({length:n},_=>`|${f.padEnd(n,f)}|${f.padEnd(n,f)}|`)
     ,m=`|${h.padEnd(n,h)}+${h.padEnd(n,h)}|`) =>
      [l,...p,m,...p,l].join`
`
