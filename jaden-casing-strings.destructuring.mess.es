// Not good looking.
{const
  capitalise =
    ( [ [ c , ...cs ], ...rest ], acc = [] ) =>
      rest.length
     ?capitalise(
        rest
       ,acc
       +c.toUpperCase()
       +cs.join`` )
     :acc
     +c.toUpperCase()
     +cs.join``
String.prototype.toJadenCase =
  function () {
    return capitalise(
      this.split(
        /(\s)/g) ) } }
