const
  greet =
    n =>
      n.replace(
        /^(\w)(\w*)$/
       ,(m,i,r)=>`Hello ${i.toUpperCase()}${r.toLowerCase()}!` )
