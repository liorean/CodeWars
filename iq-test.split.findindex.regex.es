const
  iqTest =
    s =>
     s.split` `.findIndex(
       /\b\d*[02468]\s(?:\d*[13579]\s)?\d*[02468]\b/.test(s)
      ?n => /^\d*[13579]$/.test( n )
      :n => /^\d*[02468]$/.test( n ) ) + 1
