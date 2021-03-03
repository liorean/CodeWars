// This is silly. But it works :/
const isValidWalk =
    ( [...a],
      { n ,s ,e ,w } =
        a.reduce(
          ( a, c ) =>
            ( a[c] = -~a[c]
             ,a )
         ,{} ) ) =>
      10 == (~~n+~~s+~~e+~~w) * !(~~n-~~s) * !(~~e-~~w)
