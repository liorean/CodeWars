const
  humanReadable =
    s=>
      [ String(s/3600|0).padStart(2,0)
       ,String(s%3600/60|0).padStart(2,0)
       ,String(s%60|0).padStart(2,0)]
     .join`:`
