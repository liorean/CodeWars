const
  syntax = 0x20
 ,digit = 0x30
 ,upper = 0x40
 ,lower = 0x60
 ,chars =
    [ 0x08, 0x05, 0x0c, 0x0c, 0x0f  // hello
     ,0x00  // space
     ,0x17, 0x0f, 0x12, 0x0c, 0x04 // world
     ,0x01 ] // exclamation mark
 ,mask =
    [ lower, lower, lower, lower, lower
     ,syntax
     ,lower, lower, lower, lower, lower
     ,syntax ]
 ,zip =
    f => ([a,...as]) => ([b,...bs]) =>
      a != undefined && b != undefined
     ?[ f(a)(b)
      , ...zip(f)(as)(bs) ]
     :[]
 ,greet =
    () =>
      String.fromCharCode(
        ...zip( a => b => a | b )
        ( chars )
        ( mask ) )
