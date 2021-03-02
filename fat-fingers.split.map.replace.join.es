// I don't understand why ECMAScript hasn't added formal parameter elisions.
// I hate having dummy names in my scopes just so I can conform to an argument
// passing convention that includes parts I don't need and then be forced to
// actually bind the arguments to some parameter I will not be using.
// Especially so if there is a risk of that argument being persisted through
// some closure capture, though that is hardly a problem in a kata like this.
const
  fatFingers =
    s =>
      s != null
     ?s
     .split( /a/i )
     .map(
        ( a, i ) =>
          i & 1
         ?a.replace(
            /([a-z]+)|([A-Z]+)/g
           ,( m, p, P ) =>
              p
             ?p.toUpperCase()
             :P.toLowerCase() )
         :a )
     .join``
     :s
