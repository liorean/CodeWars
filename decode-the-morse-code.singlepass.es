const
  decodeMorse =
    code =>
      code
     .trim()
     .split( /\s{1,2}/ )
     .reduce(
        ( a, c ) => 
          a.concat( MORSE_CODE[c] || ' ' )
       ,'' )
