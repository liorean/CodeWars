const
  DNAStrand =
    s =>
      s.replace(
        /(A)|(T)|(C)|(G)/g
       ,(m,a,t,c,h)=>
        a
       ?'T'
       :t
       ?'A'
       :c
       ?'G'
       :'C' ) 
