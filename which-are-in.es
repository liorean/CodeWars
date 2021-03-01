const inArray=(as,bs)=>as.filter(a=>bs.some(b=>b.includes(a))).sort()
/*
const
  inArray =
    ( candidates, strings ) =>
      candidates
     .filter( 
        candidate =>
          strings.some(
            string => 
              string.includes(
                candidate ) ) )
     .sort()
*/
