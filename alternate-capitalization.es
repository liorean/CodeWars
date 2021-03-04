const
  capitalize =
    ( [...s] ) =>
      [s.map((c,i)=>c[['toUpperCase','toLowerCase'][i&1]]()).join``
      ,s.map((c,i)=>c[['toUpperCase','toLowerCase'][~i&1]]()).join``]
