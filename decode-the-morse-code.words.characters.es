const
  decodeMorse =
    code =>
      code
     .trim()
     .split`   `
     .map(
       word =>
         word
        .split` `
        .reduce(
          ( a, c ) => 
            a + MORSE_CODE[c]
         ,'' ) )
     .join` `
