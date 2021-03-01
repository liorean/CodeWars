// Recur! Though because JavaScript iterators aren't at all well thought out, 
// and we are not passing around a live iterator but instead actually build
// out an entirely new array when using spread and rest syntax, 
//     const rec = ([a,...as],acc=[]) => a?rec(as, [...acc, handle(a)]):acc
// thus destructures the entire rest of the input as well as the entire 
// accumulated result and rebuilds a new array with each at every iteration.
// The unnecessary algorithmic complexity we get is aweful.
{const
  capitalise =
    ( [ s, ...ss ], a = [] ) =>
      s
     ?capitalise(
       ss
      ,( ( [ c, ...cs ], a ) =>
          [ ...a
           ,c.toUpperCase()
           ,...cs ] )
         ( s
          ,a) )
     :a.join``
String.prototype.toJadenCase =
  function () {
    return capitalise(
      this.split(
        /(\s+)/g) ) } }
