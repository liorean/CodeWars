const
  sumStrings =
    ( a, b
     ,{r,z,m}={
        *r(s){let{length:l}=s;while(l-->0)yield(s[l])}
       ,*z(...a){
          const b=a.map(i=>i[Symbol.iterator]())
          while(true){
            let c=b.map(i=>i.next())
            if(c.every(({done:d})=>d)) break
            yield(c.map(({value:v})=>v))}}
       ,*m(a,f,b=a[Symbol.iterator]()){
          while(true){
          let{value:v,done:d}=b.next()
          if(d) break
          yield(f(v))}}}
     ,c=m(z(r(a),r(b)),([a,b])=>(a|0)+(b|0))
     ,d=[...c].reduce(([a,b],c)=>[(c+a)/10|0,(c+a)%10+b],[0,''])
     ,e=([a,b])=>((a+b).replace(/^0+(\d+)$/,'$1')))=>
      e(d)
