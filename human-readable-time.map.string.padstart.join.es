const
  humanReadable =
    s=>[s/3600,s%3600/60,s%60].map(n=>String(n|0).padStart(2,0)).join`:`
