// Word boundary checking doesn't work as good in English with contractions
{
const
  capitalise=
    str =>
      str
     .split` `
     .map(
       s =>
         s[0]
        .toUpperCase()
        +s.slice( 1 ) )
     .join` `
String.prototype.toJadenCase =
    function(){return capitalise(this)}
}
